import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem, createUser, getQuestions } from '../server/functions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';

const Problem = (props) => {
	const [userId, setUserId] = useState(null);
	const [questions, setQuestions] = useState([]);
	const [currentNum, setCurrentNum] = useState(0);
	const [consideration, setConsideration] = useState(null);
	const [purchase, setPurchase] = useState(null);
	const [shipping, setShipping] = useState(null);
	const [using, setUsing] = useState(null);
	const [service, setService] = useState(null);
	const [none, setNone] = useState(null);
	const [result, setResult] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		createUser()
			.then(userId => {
				console.log("userId", userId);
				setUserId(userId);
			});
		getQuestions()
			.then(questions => {
				console.log("questions", questions);
				setQuestions(questions);
			});

	}, []);

	const getPrevProblem = async () => {
		console.log("prev problem");
		if(currentNum > 0){
			setCurrentNum(currentNum-1);
		}
		else{
			navigate(-1);
		}
	}
	const getNextProblem = async () => {
		if(!(consideration && purchase && shipping && using && service && none)){
			alert("choose all options");
			return;
		}
		console.log("next problem");
		const answer = {
			text: questions[currentNum]?.reviewText,
			star: questions[currentNum]?.star,
			consideration: consideration,
			purchase: purchase,
			shipping: shipping,
			using: using,
			service: service,
			none: none,
		};
		console.log(result);
		console.log(answer);
		setResult([...result, answer]);
		setConsideration(null);
		setPurchase(null);
		setShipping(null);
		setUsing(null);
		setService(null);
		setNone(null);
		setCurrentNum(currentNum+1);
	};
	const submitAnswers = async () => {
		if(!(consideration && purchase && shipping && using && service && none)){
			alert("choose all options");
			return;
		}
		const answer = {
			text: questions[currentNum]?.reviewText,
			star: questions[currentNum]?.star,
			consideration: consideration,
			purchase: purchase,
			shipping: shipping,
			using: using,
			service: service,
			none: none,
		};
		const answers = [...result, answer];
		if(answers.length !== questions.length){
			alert("Answer all questions");
			return;
		}
		await addItem(userId, answers);
		setResult(answers);
		setConsideration(null);
		setPurchase(null);
		setShipping(null);
		setUsing(null);
		setService(null);
		setNone(null);
		alert("submit success");
		navigate(`/completion`, { state: userId});
	}

	return (
		<>
			<h1>Labeling Task</h1>
			<p><b className="red">**Do not Refresh the page**</b></p>
      <p>Progress {currentNum+1}/{questions?.length}</p>
			<h3 className='labeling-text'> Text: {questions[currentNum]?.reviewText}</h3>
			<FormControl>
				<FormLabel id="row-radio-buttons-group-label">Consideration</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={consideration}
					onChange={(e)=>{setConsideration(e.target.value)}}
				>
					<FormControlLabel value="1" control={<Radio />} label="O" />
					<FormControlLabel value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Purchase</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={purchase}
					onChange={(e)=>{setPurchase(e.target.value)}}
				>
					<FormControlLabel value="1" control={<Radio />} label="O" />
					<FormControlLabel value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">


					<Grid
						container
						direction="row"
						alignItems="center"
					>
						Shipping
						<Tooltip title="Delete" placement="right-end">
							<HelpOutlineIcon style={{paddingLeft:'5px'}}/>
						</Tooltip>
					</Grid>
					
				</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={shipping}
					onChange={(e)=>{setShipping(e.target.value)}}
				>
					<FormControlLabel value="1" control={<Radio />} label="O" />
					<FormControlLabel value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Using</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={using}
					onChange={(e)=>{setUsing(e.target.value)}}
				>
					<FormControlLabel value="1" control={<Radio />} label="O" />
					<FormControlLabel value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Customer Service</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={service}
					onChange={(e)=>{setService(e.target.value)}}
				>
					<FormControlLabel value="1" control={<Radio />} label="O" />
					<FormControlLabel value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">None</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={none}
					onChange={(e)=>{setNone(e.target.value)}}
				>
					<FormControlLabel value="1" control={<Radio />} label="O" />
					<FormControlLabel value="0" control={<Radio />} label="X" />
				</RadioGroup>
				<Stack direction="row" spacing={2}>
					<Button variant="outlined" onClick={getPrevProblem}>Previous</Button>
					<IconButton color="primary" size="large" aria-label="home" onClick={()=>{navigate('/')}}>
						<HomeIcon />
					</IconButton>
					{
						currentNum+1 !== questions?.length ?
						<Button variant="outlined" onClick={getNextProblem}>Next</Button> :
						<Button variant="contained" onClick={submitAnswers} >Submit</Button>
					}
				</Stack>
			</FormControl>
		</>
	);
};

export default Problem;

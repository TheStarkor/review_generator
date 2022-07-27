import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser, getQuestions } from '../server/functions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

	let navigate = useNavigate();

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

	return (
		<>
			<h2>Labeling Task</h2>
			<p><b>**Do not Refresh the page**</b></p>
      <h3>Progress {currentNum+1}/{questions?.length}</h3>
			<p>Star: {questions[currentNum]?.star}</p>
			<p>Problem: {questions[currentNum]?.reviewText}</p>
			<FormControl>
      	<FormLabel id="row-radio-buttons-group-label">Consideration</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={consideration}
					onChange={(e)=>{setConsideration(e.target.value)}}
				>
					<FormControlLabel value="O" control={<Radio />} label="O" />
					<FormControlLabel value="X" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Purchase</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={purchase}
					onChange={(e)=>{setPurchase(e.target.value)}}
				>
					<FormControlLabel value="O" control={<Radio />} label="O" />
					<FormControlLabel value="X" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Shipping</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={shipping}
					onChange={(e)=>{setShipping(e.target.value)}}
				>
					<FormControlLabel value="O" control={<Radio />} label="O" />
					<FormControlLabel value="X" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Using</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={using}
					onChange={(e)=>{setUsing(e.target.value)}}
				>
					<FormControlLabel value="O" control={<Radio />} label="O" />
					<FormControlLabel value="X" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">Service</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={service}
					onChange={(e)=>{setService(e.target.value)}}
				>
					<FormControlLabel value="O" control={<Radio />} label="O" />
					<FormControlLabel value="X" control={<Radio />} label="X" />
				</RadioGroup>
				<FormLabel id="row-radio-buttons-group-label">None</FormLabel>
				<RadioGroup
					row
					aria-labelledby="row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={none}
					onChange={(e)=>{setNone(e.target.value)}}
				>
					<FormControlLabel value="O" control={<Radio />} label="O" />
					<FormControlLabel value="X" control={<Radio />} label="X" />
				</RadioGroup>
			</FormControl>
			

			<Stack direction="row" spacing={2}>
				<Button variant="outlined" onClick={getPrevProblem}>Previous</Button>
				{
					currentNum+1!=questions?.length ?
					<Button variant="outlined" onClick={getNextProblem}>Next</Button> :
					<Button variant="contained" >Submit</Button>
				}
			</Stack>
		</>
	);
};

export default Problem;

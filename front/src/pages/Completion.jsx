import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from 'react-router-dom';
import { complete } from '../server/functions';
import { Link } from 'react-router-dom';


const Completion = ({ route }) => {
  const [input, setInput] = useState("");
  const completionCode = "C6OPEITM";
  const navigate = useNavigate();
  const location = useLocation();
  const {userId, task} = location.state;
  const finishSurvey = async () => {
    if(input !== completionCode){
      alert("Incorrect Code");
      setInput("");
      return;
    }
    console.log("code", input);
    complete(userId, input, task.task);
    navigate(`/finish`);
    window.location.replace('https://app.prolific.co/submissions/complete?cc=C6OPEITM');

  }
	
	return (
		<>
			<h2>Thank you for your participation</h2>
			<h3>Please enter completion code</h3>
      <p>{completionCode}</p>
      <Stack direction="column" spacing={2}>
        <TextField id="outlined-basic" variant="outlined" value={input} onChange={(e) => {setInput(e.target.value)}} />
          <Button variant="outlined" onClick={finishSurvey}>Finish</Button>
      </Stack>
		</>
	);
};

export default Completion;

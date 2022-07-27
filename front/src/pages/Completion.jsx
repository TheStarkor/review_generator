import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate } from 'react-router-dom';
import { complete } from '../server/functions';

const Completion = (props) => {
  const [input, setInput] = useState("");
  const completionCode = "AB2CD7";
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state;
  const finishSurvey = async () => {
    if(input !== completionCode){
      alert("Incorrect Code");
      setInput("");
      return;
    }
    console.log("code", input);
    await complete(userId, input);
    navigate(`/`);

  }
	
	return (
		<>
			<h2>Thank you for your participation</h2>
			<h3>Please enter completion code</h3>
      <p>{completionCode}</p>
      <Stack direction="column" spacing={2}>
        <TextField id="outlined-basic" value={input} onChange={(e) => {setInput(e.target.value)}} variant="outlined" />
        <Button variant="outlined" onClick={finishSurvey}>Finish</Button>
      </Stack>
		</>
	);
};

export default Completion;

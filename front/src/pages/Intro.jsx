import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './style.css';
import { getQuestions } from '../server/functions';


const Intro = (props) => {
	useEffect(() => {
		getQuestions();
	}, [])
	
	return (
		<>
			<div className='text-box'>
				<h1>Labeling Online Review Sentences <br></br>based on the Customer Journey</h1>
				<p className='text-body'>Thank you for your help.</p>
				<p className='text-body'>In this survey, you will read 25 review sentences and label them based on the customer journey criteria.</p>
			</div>
			<div className='text-box'>
				<h2>The survey is separated into two steps.</h2>
				<ul>
					<li className='text-body'>First, we will explain the <b>labeling criteria and examples.</b></li>
					<li className='text-body'>Second, then you will <b>label 25 review sentences of a headset at Amazon.com.</b></li>
				</ul>
			</div>
			<div className='button-group'>
				<Stack direction="row" spacing={2}>
					<Button variant="disabled">Previous</Button>
					<Link to="/sample">
						<Button variant="outlined">Next</Button>
					</Link>
				</Stack>
			</div>
		</>
	);
};

export default Intro;

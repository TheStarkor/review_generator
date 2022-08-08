import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './style.css';


const Intro = (props) => {
	
	return (
		<>
			<div className='text-box'>
				<h1>Labeling Online Review Sentences <br></br>based on the Customer Journey</h1>
				{/* <p className='text-body'>Thank you for your help.</p> */}
				<p className='text-body'>In this survey,<br /> you will <b style={{color:"red"}}>(1) read 26 sentences from online reviews</b><br />  and <b style={{color:"red"}}>(2) label them based on the customer journey criteria.</b></p>
			</div>
			<div className='text-box'>
				<h2>The survey is separated into three steps.</h2>
				<ul>
					<li className='text-body'>First, we will explain the <b>labeling criteria and examples.</b></li>
					<li className='text-body'>Second, you will <b>solve 5 tutorial quizes</b></li>
					<li className='text-body'>Third, you will <b>label 26 review sentences of a headset.</b></li>
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

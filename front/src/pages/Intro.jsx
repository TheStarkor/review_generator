import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './style.css';
import './Index.css';

const Intro = (props) => {
	
	return (
		<>
			<div className='text-box'>
				<h1>Labeling Online Review Sentences based on the Customer Journey</h1>
				{/* <p className='text-body'>Thank you for your help.</p> */}
			</div>
			<div className='text-box'>
				<h1 style={{fontWeight:"normal"}}>Thank you for your participation.</h1>
				<h1 style={{fontWeight:"normal"}}>The survey is separated into three steps.</h1>
			</div>
			<div className='text-box'>
				<ul>
					<li className='text-body'><h2 style={{fontWeight:"normal"}}>First, we explain what the <b>customer journey criteria are and how to label them</b></h2></li>
					<li className='text-body'><h2 style={{fontWeight:"normal"}}>Second, you <b>solve 6 tutorial quizes</b></h2></li>
					<li className='text-body'><h2 style={{fontWeight:"normal"}}>Third, you <b>label 26 review sentences of a few products</b></h2></li>
				</ul>
			</div>
			<div className='button-group'>
				<Stack direction="row" spacing={2}>
					<Button variant="disabled">Previous</Button>
					<Link to="/sample" style={{ textDecoration: 'none'}}>
						<Button variant="outlined">Next</Button>
					</Link>
				</Stack>
			</div>
		</>
	);
};

export default Intro;

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
			{/* </div>
			<div className='text-box'> */}
				<h2 style={{fontWeight:"normal"}}>Thank you for your participation. The survey is separated into three steps.</h2>
			</div>
			<br/>
			<div className='text-box'>
				<ol>
					<h2 style={{fontWeight:"normal"}}><li className='text-body'>We explain what the <b>customer journey criteria are and how to label them</b></li></h2>
					<h2 style={{fontWeight:"normal"}}><li className='text-body'>You <b>solve 7 tutorial quizes</b></li></h2>
					<h2 style={{fontWeight:"normal"}}><li className='text-body'>You <b>label 26 review sentences of a few products</b></li></h2>
				</ol>
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

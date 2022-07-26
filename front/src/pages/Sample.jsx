import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Intro = (props) => {
	return (
		<>
			<h3>Labeling Online Review Sentences based on the Customer Journey</h3>
			<p>Thank you for your help. <br/> In this survey, you will read 25 review sentences and label them based on the customer journey criteria.</p>
			<p>The survey is separated into two steps.</p>
			<ul>
				<li>First, we will explain the labeling criteria and examples.</li>
				<li>Second, then you will label 25 review sentences of a headset at Amazon.com</li>
			</ul>
			<Stack direction="row" spacing={2}>
				<Button variant="outlined">Previous</Button>
				<Button variant="outlined">Next</Button>
			</Stack>
		</>
	);
};

export default Intro;

import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const Problem = (props) => {
	return (
		<>
			<h2>Labeling Task</h2>
      <h3>Progress #/25</h3>
			<p>Thank you for your help. <br/> In this survey, you will read 25 review sentences and label them based on the customer journey criteria.</p>
			<p>The survey is separated into two steps.</p>
			<ul>
				<li>First, we will explain the labeling criteria and examples.</li>
				<li>Second, then you will label 25 review sentences of a headset at Amazon.com</li>
			</ul>
			<Stack direction="row" spacing={2}>
				<Link to="/sample2">
					<Button variant="outlined">Previous</Button>
				</Link>
				<Button variant="outlined">Next</Button>
			</Stack>
		</>
	);
};

export default Problem;

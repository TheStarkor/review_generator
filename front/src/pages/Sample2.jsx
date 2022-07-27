import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


const Sample2 = (props) => {

	return (
		<>
			<h2>Labeling Criteria and Examples</h2>
      <h3>Here are labeling examples.</h3>
			<ol>
        <li>
          Sentence : Got the earphones 3 days back.
          <ul>
            <li>Consideration : X</li>
            <li>Purchase : X</li>
            <li>Shipping : O</li>
            <li>Using : X</li>
            <li>Customer Service : X</li>
            <li>None : X</li>
          </ul>
        </li>
        <li>
          Sentence : After a long research to get my BT Headset in the price rage of Rs.2000, I finally landed with this one.
          <ul>
            <li>Consideration : O</li>
            <li>Purchase : O</li>
            <li>Shipping : X</li>
            <li>Using : X</li>
            <li>Customer Service : X</li>
            <li>None : X</li>
          </ul>
        </li>
        <li>
          Sentence : I would request sennheiser to work on thier product build quality as they r offerings great sound and warranty service.
          <ul>
            <li>Consideration : X</li>
            <li>Purchase : X</li>
            <li>Shipping : X</li>
            <li>Using : O</li>
            <li>Customer Service : O</li>
            <li>None : X</li>
          </ul>
        </li>
        <li>
          Sentence : This is one of the top ones.
          <ul>
            <li>Consideration : X</li>
            <li>Purchase : X</li>
            <li>Shipping : X</li>
            <li>Using : X</li>
            <li>Customer Service : X</li>
            <li>None : O</li>
          </ul>
        </li>
      </ol>
			<Stack direction="row" spacing={2}>
        <Link to="/">
				  <Button variant="outlined">Previous</Button>
        </Link>
        <Link to="/problem">
				  <Button variant="outlined">Next</Button>
        </Link>
			</Stack>
		</>
	);
};

export default Sample2;

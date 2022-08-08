import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './style.css';

import cjimage from '../image/prolific.png';
import review from '../image/review.png';


const Sample = (props) => {
//   const criteriaMd = `
// Step 1. Consideration: Opinions related to before purchase decision making
//   - Expectation of the product
//       - Example Quotes : "Disappointed as I expected that it would last me for 6 months for the least."
//   - Reason for purchase decision making
//       - Example Quotes : "I buy this product for my daughter’s present."
//   - Product search experience
//       - Example Quotes : "After a long research, I finally choose this one."
//   - Previous similar product usage experience
//       - Example Quotes : "I've tried similar products from the same company before."
// 2. Purchase: 
//   - Thoughts and opinions about price
//       - Example Quotes : "I spend at least 1600 rs for this product and really unsatisfied."
//   - Experience related to payment methods
//       - Example Quotes : "I kept trying, but Amazon's payment system didn't work."
// 3. Shipping: 
//   - Thoughts and opinions about delivery time
//       - Example Quotes : "Got the earphones 3 days early."
//   - Package condition
//       - Example Quotes : "The product came very worse packaged."
// 4. Using:
//   - Product quality evaluation (sound quality, bass, charging, connection, ….)
//       - Example Quotes : "The sound quality is awesome but the built quality of the product is at very low level."
//   - Context of use.
//       - Example Quotes : "I used it when exercising."
//   - Ease of use
//       - Example Quotes : "The earphones kept coming out of my ears."
//   - Frequency of use
//       - Example Quotes : "I use the product 2-3 times a week."
// 5. Customer Service:
//   - Warranty service: "The product is giving a two-year warranty."
//   - Return: "Product is returned."
//   - Refund / Replace: "Hope to get it replaced at service centre."
//   - Company’s communication about the product issue
//       - Example Quotes : "I've tried calling them but the always receive a 'network busy' error."
//   `;

	return (
		<>
	    <h1>1. Labeling Criteria and Examples</h1>
        <p style={{color:"red"}}><b>Please read carefully.</b></p>
        <h2>Labeling criteria according to customer journey stage </h2>
        <img src={cjimage} width="1000"/>
		<p>While people purchase and use a product, their experience (i.e. customer journey) usually goes through several stages: </p>
        <ul>
        <li><p>Stage 1: Considering to buy the product</p></li>
        <li><p>Stage 2: Purchasing</p></li>
        <li><p>Stage 3: Waiting for the delivery</p></li>
        <li><p>Stage 4: Using the product</p></li>
        <li><p>Stage 5: Getting help from the customer service.</p></li>
        </ul>
        <br></br>
        <hr></hr>
        <h3>In online reviews, we can find each sentences are corresponding to the above stages.</h3>
        <p>Here is an <b>example from headset reviews:</b></p>
        <img src={review} width="800"/>
        <br></br>
        <br></br>
        <hr></hr>

        <Stack direction="row" spacing={2}>
            <Link to="/">
                    <Button variant="outlined">Previous</Button>
            </Link>
            <Link to="/sample2">
                    <Button variant="outlined">Next</Button>
            </Link>
        </Stack>
		</>
	);
};


export default Sample;

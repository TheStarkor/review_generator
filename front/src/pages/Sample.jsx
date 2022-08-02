import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './style.css';

import cjimage from '../image/prolific.png';


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
	    <h1>Labeling Criteria and Examples</h1>
        <h2>Labeling criteria according to customer journey stage </h2>
		<p>While people purchase and use a product, their experience (i.e. customer journey) usually goes through several stages: </p>
        <p>(1) considering to buy the product</p>
        <p>(2) purchasing</p>
        <p>(3) waiting for the delivery</p>
        <p>(4) using the product</p>
        <p> (5) getting help from the customer service.</p>
        <p>The following list gives more details with sample quotes from online product reviews.</p>
        <p>Please read them carefully before proceeding to the next page. You will be asked to determine which stage a review sentence belongs to.</p>	
        <img src={cjimage} widt="1000" height="400"/>
        <hr></hr>
        <div>
            <h3>Step 1. Consideration: Opinions related to before purchase decision making</h3>
            <div className="container">
                <p className="explain">e.g. Expectation of the product: &nbsp; </p>
                <p className={"quotes explain"}> "Disappointed as I expected that it would last me for 6 months for the least."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Reason for purchase decision making: &nbsp; </p>
                <p className={"quotes explain"}> "I buy this product for my daughter’s present."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Product search experience: &nbsp; </p>
                <p className={"quotes explain"}> "After a long research, I finally choose this one."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Previous similar product usage experiencet: &nbsp; </p>
                <p className={"quotes explain"}> "I've tried similar products from the same company before."</p>
            </div>
        </div>
        <hr></hr>
        <div>
            <h3>Step 2. Purchase</h3>
            <div className="container">
                <p className="explain">e.g. Thoughts and opinions about price: &nbsp; </p>
                <p className={"quotes explain"}> "I spend at least 1600 rs for this product and really unsatisfied."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Experience related to payment methods: &nbsp; </p>
                <p className={"quotes explain"}> "I kept trying, but Amazon's payment system didn't work."</p>
            </div>
        </div>
        <hr></hr>
        <div>
            <h3>Step 3. Shipping</h3>
            <div className="container">
                <p className="explain">e.g. Thoughts and opinions about delivery time: &nbsp; </p>
                <p className={"quotes explain"}> "Got the earphones 3 days early."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Package condition: &nbsp; </p>
                <p className={"quotes explain"}> "The product came very worse packaged."</p>
            </div>
        </div>
        <hr></hr>
        <div>
            <h3>Step 4. Using</h3>
            <div className="container">
                <p className="explain">e.g. Product quality evaluation (sound quality, bass, charging, connection, ….): &nbsp; </p>
                <p className={"quotes explain"}> "The sound quality is awesome."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Context of use: &nbsp; </p>
                <p className={"quotes explain"}> "I used it when exercising."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Ease of use / Troubles: &nbsp; </p>
                <p className={"quotes explain"}> "The earphones kept coming out of my ears."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Frequency of use: &nbsp; </p>
                <p className={"quotes explain"}> "I use the product 2-3 times a week."</p>
            </div>
        </div>
        <hr></hr>
        <div>
            <h3>Step 5. Customer Service</h3>
            <div className="container">
                <p className="explain">e.g. Warranty service: &nbsp; </p>
                <p className={"quotes explain"}> "The product is giving a two-year warranty."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Return: &nbsp; </p>
                <p className={"quotes explain"}> "Product is returned."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Refund/Replace: &nbsp; </p>
                <p className={"quotes explain"}> "Hope to get it replaced at service centre."</p>
            </div>
            <div className="container">
                <p className="explain">e.g. Company’s communication about the product issue: &nbsp; </p>
                <p className={"quotes explain"}> "I've tried calling them but always receive a 'network busy'."</p>
                <p>&nbsp;</p>
            </div>
        </div>
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

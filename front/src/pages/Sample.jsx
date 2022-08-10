import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './style.css';
import './Index.css';


import cjimage from '../image/prolific.png';
import review from '../image/review.png';


const Sample = (props) => {

	return (
		<>
	    <h1>1. What is Customer Journey?</h1>
		<h3 style={{fontWeight:'normal'}}>While people purchase and use a product, their experience (i.e. customer journey) usually goes through several stages: </h3>
        <img src={cjimage} width="1000"/>
        <div>
            <h3 style={{fontWeight: 'normal', backgroundColor:'#EDC568', paddingTop:'10px', paddingBottom:'10px', width:'1000px'}}><b>&nbsp;Stage 1. Consideration: </b>Opinions related to before purchase decision making</h3>
            <ul>
            <li>
                <div className="container">
                <p className="explain"><b>Expectation of the product: &nbsp; </b></p>
                <p className={"quotes "}> "Disappointed as I expected that it would last me for 6 months for the least."</p>
            </div>
            </li>
            <li>
                <div className="container">
                <p className="explain"><b>Reason for purchase decision making: &nbsp; </b></p>
                <p className={"quotes "}> "I buy this product for my daughter’s present."</p>
            </div>
            </li>
            <li>
                <div className="container">
                <p className="explain"><b>Product search experience: &nbsp; </b></p>
                <p className={"quotes "}> "After a long research, I finally choose this one."</p>
            </div>
            </li>
            <li>
                <div className="container">
                <p className="explain"><b>Previous similar product usage experience: &nbsp; </b></p>
                <p className={"quotes "}> "I've tried similar products from the same company before."</p>
            </div>
            </li>
            </ul>
        </div>
        <br/>
        <br/>
        <div>
            <h3 style={{backgroundColor:'#92B972', paddingTop:'10px', paddingBottom:'10px', width:'1000px'}}>&nbsp;Stage 2. Purchase</h3>
            <ul>
            <li>
            <div className="container">
                <p className="explain">Thoughts and opinions about price: &nbsp; </p>
                <p className={"quotes "}> "I spend at least 1600 rs for this product and really unsatisfied."</p>
            </div>
            </li>
            <li>
            <div className="container">
                <p className="explain">Experience related to payment methods: &nbsp; </p>
                <p className={"quotes "}> "I kept trying, but Amazon's payment system didn't work."</p>
            </div>
            </li>
            </ul>
        </div>
        <br/>
        <br/>
        <div>
            <h3 style={{backgroundColor:'#7EA8D8', paddingTop:'10px', paddingBottom:'10px', width:'1000px'}}>&nbsp;Stage 3. Shipping</h3>
            <ul>
            <li>
            <div className="container">
                <p className="explain"> Thoughts and opinions about delivery time: &nbsp; </p>
                <p className={"quotes"}> "Got the earphones 3 days early."</p>
            </div>
            </li>
            <li>
            <div className="container">
                <p className="explain"> Package condition: &nbsp; </p>
                <p className={"quotes"}> "The product came very worse packaged."</p>
            </div>
            </li>
            </ul>
        </div>
        <br/>
        <br/>
        <div>
            <h3 style={{backgroundColor:'#CF7084', paddingTop:'10px', paddingBottom:'10px', width:'1000px'}}>&nbsp;Stage 4. Using</h3>
            <ul>
            <li>
                <div className="container">
                <p className="explain">Product quality evaluation (sound quality, bass, charging, connection, ….): &nbsp; </p>
                <p className={"quotes"}> "The sound quality is awesome."</p>
                </div>
            </li>
            <li>
                <div className="container">
                <p className="explain">Context of use: &nbsp; </p>
                <p className={"quotes"}> "I used it when exercising."</p>
                </div>
            </li>
            <li>
                <div className="container">
                <p className="explain">Ease of use / Troubles: &nbsp; </p>
                <p className={"quotes"}> "The earphones kept coming out of my ears."</p>
                </div>
            </li>
            <li>
                <div className="container">
                <p className="explain">Frequency of use: &nbsp; </p>
                <p className={"quotes"}> "I use the product 2-3 times a week."</p>
                </div>
            </li>
            </ul>
        </div>
        <br/>
        <br/>
        <div>
            <h3 style={{backgroundColor:'#AC8CBA', paddingTop:'10px', paddingBottom:'10px', width:'1000px'}}>&nbsp;Stage 5. Customer Service</h3>
            <ul>
            <li>
                <div className="container">
                <p className="explain">Warranty service: &nbsp; </p>
                <p className={"quotes"}> "The product is giving a two-year warranty."</p>
            </div>
            </li>
            <li>
                <div className="container">
                <p className="explain">Return: &nbsp; </p>
                <p className={"quotes"}> "Product is returned."</p>
            </div>
            </li>
            <li>
                <div className="container">
                <p className="explain">Refund / Replace / Repair: &nbsp; </p>
                <p className={"quotes"}> "Hope to get it replaced at service centre."</p>
            </div>
            </li>
            <li>
                <div className="container">
                <p className="explain">Company’s communication about the product issue: &nbsp; </p>
                <p className={"quotes"}> "I've tried calling them but always receive a 'network busy'."</p>
            </div>
            </li>
            </ul>
        </div>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <h3>Most sentences in online reviews correspond to some of the above stages.</h3>
        <p>Here is an <b>example review of a headsetfrom headset reviews:</b></p>
        <img src={review} width="800"/>
        <br></br>
        <br></br>
        <hr></hr>

        <Stack direction="row" spacing={2}>
            <Link to="/" style={{ textDecoration: 'none'}}>
                    <Button variant="outlined">Previous</Button>
            </Link>
            <Link to="/tutorial" style={{ textDecoration: 'none'}}>
                    <Button variant="outlined">Next</Button>
            </Link>
        </Stack>
		</>
	);
};


export default Sample;

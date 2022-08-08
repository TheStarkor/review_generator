import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Sample2 = (props) => {

	return (
		<>
			<h1>1. Labeling Criteria and Examples</h1>
      <h2>Here are labeling examples.</h2>
	  <p style={{color:"red"}}><b>The following list gives more details with sample quotes from online product reviews.</b></p>
        <p style={{color:"red"}}><b>Please read them carefully before proceeding to the next page. You will be asked to determine which stage a review sentence belongs to.</b></p>
        <p></p>	
        <br></br>
        <hr></hr>
        <div>
            <h3>Stage 1. Consideration: Opinions related to before purchase decision making</h3>
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
            <h3>Stage 2. Purchase</h3>
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
            <h3>Stage 3. Shipping</h3>
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
            <h3>Stage 4. Using</h3>
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
            <h3>Stage 5. Customer Service</h3>
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
        <Link to="/sample">
				  <Button variant="outlined">Previous</Button>
        </Link>
        <Link to="/tutorial">
				  <Button variant="outlined">Next</Button>
        </Link>
			</Stack>
		</>
	);
};

export default Sample2;

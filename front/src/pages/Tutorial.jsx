import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { addItem, createUser, getQuestions } from "../server/functions";
import Button from "@mui/material/Button";
// import IconButton from '@mui/material/IconButton';
// import HomeIcon from '@mui/icons-material/Home';
import Stack from "@mui/material/Stack";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from "@mui/material/FormControl";
// import FormLabel from '@mui/material/FormLabel';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
// import { Grid } from '@mui/material';
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
const HelpInfoTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 320,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));


const Tutorial = (props) => {
    const [consideration1, setConsideration1] = useState(null);
    const [purchase1, setPurchase1] = useState(null);
    const [shipping1, setShipping1] = useState(null);
    const [using1, setUsing1] = useState(null);
    const [service1, setService1] = useState(null);
    const [result1, setResult1] = useState(['Choose all options.']);

    const [consideration2, setConsideration2] = useState(null);
    const [purchase2, setPurchase2] = useState(null);
    const [shipping2, setShipping2] = useState(null);
    const [using2, setUsing2] = useState(null);
    const [service2, setService2] = useState(null);
    const [result2, setResult2] = useState([]);

    const [consideration3, setConsideration3] = useState(null);
    const [purchase3, setPurchase3] = useState(null);
    const [shipping3, setShipping3] = useState(null);
    const [using3, setUsing3] = useState(null);
    const [service3, setService3] = useState(null);
    const [result3, setResult3] = useState([]);

    const [consideration4, setConsideration4] = useState(null);
    const [purchase4, setPurchase4] = useState(null);
    const [shipping4, setShipping4] = useState(null);
    const [using4, setUsing4] = useState(null);
    const [service4, setService4] = useState(null);
    const [result4, setResult4] = useState([]);

    const [consideration5, setConsideration5] = useState(null);
    const [purchase5, setPurchase5] = useState(null);
    const [shipping5, setShipping5] = useState(null);
    const [using5, setUsing5] = useState(null);
    const [service5, setService5] = useState(null);
    const [result5, setResult5] = useState([]);

    useEffect(() => { 
        if(consideration1==1 && purchase1==1 && shipping1==1 && using1==1 && service1==1){
            setResult1(["Correct!"])
            console.log(2);
          }
          else if (!(consideration1 && purchase1 && shipping1 && using1 && service1 )) {
              setResult1(["Choose all options"]);
              console.log(1);
            }
          else{
            setResult1(["Your answer is wrong, try again."])
          }


          if(consideration2==1 && purchase2==1 && shipping2==1 && using2==1 && service2==1){
            setResult2(["Correct!"])
            console.log(2);
          }
          else if (!(consideration2 && purchase2 && shipping2 && using2 && service2 )) {
              setResult2(["Choose all options"]);
              console.log(1);
            }
          else{
            setResult2(["Your answer is wrong, try again."])
          }


          if(consideration3==1 && purchase3==1 && shipping3==1 && using3==1 && service3==1){
            setResult3(["Correct!"])
            console.log(2);
          }
          else if (!(consideration3 && purchase3 && shipping3 && using3 && service3 )) {
              setResult3(["Choose all options"]);
              console.log(1);
            }
          else{
            setResult3(["Your answer is wrong, try again."])
          }


          if(consideration4==1 && purchase4==1 && shipping4==1 && using4==1 && service4==1){
            setResult4(["Correct!"])
            console.log(2);
          }
          else if (!(consideration4 && purchase4 && shipping4 && using4 && service4 )) {
              setResult4(["Choose all options"]);
              console.log(1);
            }
          else{
            setResult4(["Your answer is wrong, try again."])
          }


          if(consideration5==1 && purchase5==1 && shipping5==1 && using5==1 && service5==1){
            setResult5(["Correct!"])
            console.log(2);
          }
          else if (!(consideration5 && purchase5 && shipping5 && using5 && service5 )) {
              setResult5(["Choose all options"]);
              console.log(1);
            }
          else{
            setResult5(["Your answer is wrong, try again."])
          }



        }, [
            consideration1,purchase1,shipping1,using1,service1,
            consideration2,purchase2,shipping2,using2,service2,
            consideration3,purchase3,shipping3,using3,service3,
            consideration4,purchase4,shipping4,using4,service4,
            consideration5,purchase5,shipping5,using5,service5,
        ])
    useEffect(() => { 
        if(result1=="Correct!" && result2=="Correct!" && result3=="Correct!" && result4=="Correct!" && result5=="Correct!" ){
            console.log("enable")
            goToProblem();
        }
        else{
            console.log("disable")
            goToProblem();
        }
    },[result1,result2,result3,result4,result5])
    
    let button;
    const goToProblem = ()=>{
        console.log("i'm here!")
        console.log("status :",result1=="Correct!" && result2=="Correct!" && result3=="Correct!" && result4=="Correct!" && result5=="Correct!" )
        if(result1=="Correct!" && result2=="Correct!" && result3=="Correct!" && result4=="Correct!" && result5=="Correct!" ){
            return(
            <Link to="/problem">
                <Button variant="outlined">Next</Button>
            </Link>
            );
        }
        else{
            return(
                <Button variant="disabled">Next</Button>
            )
        }
    }

    return (
		<>
			<h1>2. Labeling Tutorial</h1>
      <h2>Here are sample questions.</h2>
      <p><b style={{color:"red"}}>After correctly answer all tutorial questions, you can go to next step.</b></p>
      <hr></hr>
      <br></br>
      <p>Please read sentences from online reviews and match them to correct customer journey stage</p>
      <ul>
          <li><p>For each sentences, you have to select Yes/No for all stages</p></li>
          <li><p>If you cannot remeber the meaning of stages, move your mouse on the <HelpCenterIcon style={{marginTop:"0", paddingLeft: "0px", color: "grey" }}/> icon.
         </p></li>
      </ul>
      <br></br>
      <hr></hr>
      <div className='example'>
			<ul>
			<h2>&nbsp;</h2>
        <li>
		<h2 style={{fontWeight: "normal"}}>Question 1.</h2>
        <p><b>Status : {result1}</b></p>
        <hr></hr>
        <h2 style={{ fontWeight: "normal", lineHeight: "40px" }}>sentence:<br /> Got the earphones 3 days back.</h2>
        <hr></hr>
        </li>
        <body>
          <table>
            <th></th>
			<th style={{fontWeight: "normal"}}>Yes</th>
					<th style={{fontWeight: "normal"}}>No</th>
            <tr>
              <td>
                <b>
                  Consideration
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"The expectation of the product"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "Disappointed as I expected that it would last me for 6 months for the least."
                          }
                        </li>
                        <p>{"Reason for purchase decision making"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I buy this product for my daughter’s present."}
                        </li>
                        <p>{"Product search experience"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"After a long research, I finally choose this one."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={consideration1 == "1"}
                  onChange={(e) => {
                    setConsideration1(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={consideration1 == "0"}
                  onChange={(e) => {
                    setConsideration1(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Purchase
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about price"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I spend at least 1600 rs for this product and really unsatisfied."
                          }
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I kept trying, but Amazon's payment system didn't work."
                          }
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={purchase1 == "1"}
                  onChange={(e) => {
                    setPurchase1(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={purchase1 == "0"}
                  onChange={(e) => {
                    setPurchase1(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Shipping
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about delivery time"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Got the earphones 3 days early."}
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product came very worse packaged."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={shipping1 == "1"}
                  onChange={(e) => {
                    setShipping1(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={shipping1 == "0"}
                  onChange={(e) => {
                    setShipping1(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Using
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>
                          {
                            "Product quality evaluation (sound quality, bass, charging, connection, ….)"
                          }
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "The sound quality is awesome but the built quality of the product is at very low level."
                          }
                        </li>
                        <p>{"Context of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I used it when exercising."}
                        </li>
                        <p>{"Ease of use / Troubles"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The earphones kept coming out of my ears."}
                        </li>
                        <p>{"Frequency of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I use the product 2-3 times a week."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={using1 == "1"}
                  onChange={(e) => {
                    setUsing1(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={using1 == "0"}
                  onChange={(e) => {
                    setUsing1(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Customer Service
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Warranty service"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product is giving a two-year warranty."}
                        </li>
                        <p>{"Return"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Product is returned."}
                        </li>
                        <p>{"Refund / Replace"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Hope to get it replaced at service centre."}
                        </li>
                        <p>
                          {"Company’s communication about the product issue"}
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I've tried calling them but the always receive a 'network busy' error."
                          }
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={service1 == "1"}
                  onChange={(e) => {
                    setService1(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={service1 == "0"}
                  onChange={(e) => {
                    setService1(e.target.value);
                  }}
                ></input>
              </td>
            </tr>

          </table>
        </body>
		<h2>&nbsp;</h2>
        <li>
        <hr></hr>
		<h2 style={{fontWeight: "normal"}}>Question 2.</h2>
        <p><b>Status : {result2}</b></p>
        <h2 style={{ fontWeight: "normal", lineHeight: "40px" }}>Sentence: <br />After a long research to get my BT Headset in the price rage of Rs.2000, I finally landed with this one</h2>
        <hr></hr>
          </li>
          <table>
            <th></th>
			<th style={{fontWeight: "normal"}}>Yes</th>
					<th style={{fontWeight: "normal"}}>No</th>
            <tr>
              <td>
                <b>
                  Consideration
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"The expectation of the product"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "Disappointed as I expected that it would last me for 6 months for the least."
                          }
                        </li>
                        <p>{"Reason for purchase decision making"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I buy this product for my daughter’s present."}
                        </li>
                        <p>{"Product search experience"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"After a long research, I finally choose this one."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={consideration2 == "1"}
                  onChange={(e) => {
                    setConsideration2(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={consideration2 == "0"}
                  onChange={(e) => {
                    setConsideration2(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Purchase
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about price"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I spend at least 1600 rs for this product and really unsatisfied."
                          }
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I kept trying, but Amazon's payment system didn't work."
                          }
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={purchase2 == "1"}
                  onChange={(e) => {
                    setPurchase2(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={purchase2 == "0"}
                  onChange={(e) => {
                    setPurchase2(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Shipping
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about delivery time"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Got the earphones 3 days early."}
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product came very worse packaged."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={shipping2 == "1"}
                  onChange={(e) => {
                    setShipping2(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={shipping2 == "0"}
                  onChange={(e) => {
                    setShipping2(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Using
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>
                          {
                            "Product quality evaluation (sound quality, bass, charging, connection, ….)"
                          }
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "The sound quality is awesome but the built quality of the product is at very low level."
                          }
                        </li>
                        <p>{"Context of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I used it when exercising."}
                        </li>
                        <p>{"Ease of use / Troubles"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The earphones kept coming out of my ears."}
                        </li>
                        <p>{"Frequency of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I use the product 2-3 times a week."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={using2 == "1"}
                  onChange={(e) => {
                    setUsing2(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={using2 == "0"}
                  onChange={(e) => {
                    setUsing2(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Customer Service
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Warranty service"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product is giving a two-year warranty."}
                        </li>
                        <p>{"Return"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Product is returned."}
                        </li>
                        <p>{"Refund / Replace"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Hope to get it replaced at service centre."}
                        </li>
                        <p>
                          {"Company’s communication about the product issue"}
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I've tried calling them but the always receive a 'network busy' error."
                          }
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={service2 == "1"}
                  onChange={(e) => {
                    setService2(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={service2 == "0"}
                  onChange={(e) => {
                    setService2(e.target.value);
                  }}
                ></input>
              </td>
            </tr>

          </table>
				<h2>&nbsp;</h2>
				
				<li>
                <hr></hr>
		<h2 style={{fontWeight: "normal"}}>Question 3</h2>
        <p><b>Status : {result3}</b></p>
        <h2 style={{ fontWeight: "normal", lineHeight: "40px" }}>Sentence:<br />I returned the headset because of the poor sound quality.</h2>
        <hr></hr>
          </li>
          <table>
            <th></th>
			<th style={{fontWeight: "normal"}}>Yes</th>
					<th style={{fontWeight: "normal"}}>No</th>
            <tr>
              <td>
                <b>
                  Consideration
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"The expectation of the product"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "Disappointed as I expected that it would last me for 6 months for the least."
                          }
                        </li>
                        <p>{"Reason for purchase decision making"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I buy this product for my daughter’s present."}
                        </li>
                        <p>{"Product search experience"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"After a long research, I finally choose this one."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={consideration3 == "1"}
                  onChange={(e) => {
                    setConsideration3(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={consideration3 == "0"}
                  onChange={(e) => {
                    setConsideration3(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Purchase
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about price"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I spend at least 1600 rs for this product and really unsatisfied."
                          }
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I kept trying, but Amazon's payment system didn't work."
                          }
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={purchase3 == "1"}
                  onChange={(e) => {
                    setPurchase3(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={purchase3 == "0"}
                  onChange={(e) => {
                    setPurchase3(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Shipping
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about delivery time"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Got the earphones 3 days early."}
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product came very worse packaged."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={shipping3 == "1"}
                  onChange={(e) => {
                    setShipping3(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={shipping3 == "0"}
                  onChange={(e) => {
                    setShipping3(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Using
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>
                          {
                            "Product quality evaluation (sound quality, bass, charging, connection, ….)"
                          }
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "The sound quality is awesome but the built quality of the product is at very low level."
                          }
                        </li>
                        <p>{"Context of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I used it when exercising."}
                        </li>
                        <p>{"Ease of use / Troubles"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The earphones kept coming out of my ears."}
                        </li>
                        <p>{"Frequency of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I use the product 2-3 times a week."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={using3 == "1"}
                  onChange={(e) => {
                    setUsing3(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={using3 == "0"}
                  onChange={(e) => {
                    setUsing3(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Customer Service
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Warranty service"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product is giving a two-year warranty."}
                        </li>
                        <p>{"Return"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Product is returned."}
                        </li>
                        <p>{"Refund / Replace"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Hope to get it replaced at service centre."}
                        </li>
                        <p>
                          {"Company’s communication about the product issue"}
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I've tried calling them but the always receive a 'network busy' error."
                          }
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={service3 == "1"}
                  onChange={(e) => {
                    setService3(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={service3 == "0"}
                  onChange={(e) => {
                    setService3(e.target.value);
                  }}
                ></input>
              </td>
            </tr>

          </table>
          <h2>&nbsp;</h2>
        <li>
        <hr></hr>
		<h2 style={{fontWeight: "normal"}}>Question 4.</h2>
        <p><b>Status : {result4}</b></p>
        <h2 style={{ fontWeight: "normal", lineHeight: "40px" }}>Sentence: <br />After a long research to get my BT Headset in the price rage of Rs.2000, I finally landed with this one</h2>
        <hr></hr>
          </li>
          <table>
            <th></th>
			<th style={{fontWeight: "normal"}}>Yes</th>
					<th style={{fontWeight: "normal"}}>No</th>
            <tr>
              <td>
                <b>
                  Consideration
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"The expectation of the product"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "Disappointed as I expected that it would last me for 6 months for the least."
                          }
                        </li>
                        <p>{"Reason for purchase decision making"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I buy this product for my daughter’s present."}
                        </li>
                        <p>{"Product search experience"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"After a long research, I finally choose this one."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={consideration4 == "1"}
                  onChange={(e) => {
                    setConsideration4(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={consideration4 == "0"}
                  onChange={(e) => {
                    setConsideration4(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Purchase
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about price"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I spend at least 1600 rs for this product and really unsatisfied."
                          }
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I kept trying, but Amazon's payment system didn't work."
                          }
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={purchase4 == "1"}
                  onChange={(e) => {
                    setPurchase4(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={purchase4 == "0"}
                  onChange={(e) => {
                    setPurchase4(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Shipping
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about delivery time"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Got the earphones 3 days early."}
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product came very worse packaged."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={shipping4 == "1"}
                  onChange={(e) => {
                    setShipping4(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={shipping4 == "0"}
                  onChange={(e) => {
                    setShipping4(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Using
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>
                          {
                            "Product quality evaluation (sound quality, bass, charging, connection, ….)"
                          }
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "The sound quality is awesome but the built quality of the product is at very low level."
                          }
                        </li>
                        <p>{"Context of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I used it when exercising."}
                        </li>
                        <p>{"Ease of use / Troubles"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The earphones kept coming out of my ears."}
                        </li>
                        <p>{"Frequency of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I use the product 2-3 times a week."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={using4 == "1"}
                  onChange={(e) => {
                    setUsing4(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={using4 == "0"}
                  onChange={(e) => {
                    setUsing4(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Customer Service
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Warranty service"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product is giving a two-year warranty."}
                        </li>
                        <p>{"Return"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Product is returned."}
                        </li>
                        <p>{"Refund / Replace"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Hope to get it replaced at service centre."}
                        </li>
                        <p>
                          {"Company’s communication about the product issue"}
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I've tried calling them but the always receive a 'network busy' error."
                          }
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={service4 == "1"}
                  onChange={(e) => {
                    setService4(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={service4 == "0"}
                  onChange={(e) => {
                    setService4(e.target.value);
                  }}
                ></input>
              </td>
            </tr>

          </table>
          <h2>&nbsp;</h2>
        <li>
        <hr></hr>
		<h2 style={{fontWeight: "normal"}}>Question 5.</h2>
        <p><b>Status : {result5}</b></p>
        <h2 style={{ fontWeight: "normal", lineHeight: "40px" }}>Sentence: <br />After a long research to get my BT Headset in the price rage of Rs.2000, I finally landed with this one</h2>
        <hr></hr>
          </li>
          <body>
          <table>
            <th></th>
			<th style={{fontWeight: "normal"}}>Yes</th>
					<th style={{fontWeight: "normal"}}>No</th>
            <tr>
              <td>
                <b>
                  Consideration
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"The expectation of the product"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "Disappointed as I expected that it would last me for 6 months for the least."
                          }
                        </li>
                        <p>{"Reason for purchase decision making"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I buy this product for my daughter’s present."}
                        </li>
                        <p>{"Product search experience"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"After a long research, I finally choose this one."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={consideration5 == "1"}
                  onChange={(e) => {
                    setConsideration5(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={consideration5 == "0"}
                  onChange={(e) => {
                    setConsideration5(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Purchase
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about price"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I spend at least 1600 rs for this product and really unsatisfied."
                          }
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I kept trying, but Amazon's payment system didn't work."
                          }
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={purchase5 == "1"}
                  onChange={(e) => {
                    setPurchase5(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={purchase5 == "0"}
                  onChange={(e) => {
                    setPurchase5(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Shipping
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Thoughts and opinions about delivery time"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Got the earphones 3 days early."}
                        </li>
                        <p>{"Package condition"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product came very worse packaged."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={shipping5 == "1"}
                  onChange={(e) => {
                    setShipping5(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={shipping5 == "0"}
                  onChange={(e) => {
                    setShipping5(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Using
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>
                          {
                            "Product quality evaluation (sound quality, bass, charging, connection, ….)"
                          }
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "The sound quality is awesome but the built quality of the product is at very low level."
                          }
                        </li>
                        <p>{"Context of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I used it when exercising."}
                        </li>
                        <p>{"Ease of use / Troubles"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The earphones kept coming out of my ears."}
                        </li>
                        <p>{"Frequency of use"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"I use the product 2-3 times a week."}
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={using5 == "1"}
                  onChange={(e) => {
                    setUsing5(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={using5 == "0"}
                  onChange={(e) => {
                    setUsing5(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  Customer Service
                  <HelpInfoTooltip
                    placement="right-start"
                    title={
                      <React.Fragment>
                        <p>{"Warranty service"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"The product is giving a two-year warranty."}
                        </li>
                        <p>{"Return"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Product is returned."}
                        </li>
                        <p>{"Refund / Replace"}</p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {"Hope to get it replaced at service centre."}
                        </li>
                        <p>
                          {"Company’s communication about the product issue"}
                        </p>
                        <li
                          className="helptext"
                          style={{ fontStyle: "italic" }}
                        >
                          {
                            "I've tried calling them but the always receive a 'network busy' error."
                          }
                        </li>
                      </React.Fragment>
                    }
                  >
                    <HelpCenterIcon
                      style={{ paddingLeft: "5px", color: "grey" }}
                    />
                  </HelpInfoTooltip>
                </b>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="1"
                  checked={service5 == "1"}
                  onChange={(e) => {
                    setService5(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={service5 == "0"}
                  onChange={(e) => {
                    setService5(e.target.value);
                  }}
                ></input>
              </td>
            </tr>

          </table>
        </body>
                </ul>     
      </div>
		<Stack direction="row" spacing={2}>
        <Link to="/sample2">
				  <Button variant="outlined">Previous</Button>
        </Link>
            {goToProblem()}
		</Stack>
		</>
	);
};

export default Tutorial;

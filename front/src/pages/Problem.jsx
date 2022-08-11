import React, { useState, useEffect } from "react";
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

import Consideration from "./HelpInfoToolTip/Consideration"
import Purchase from "./HelpInfoToolTip/Purchase"
import Shipping from "./HelpInfoToolTip/Shipping"
import Using from "./HelpInfoToolTip/Using"
import CustomerService from "./HelpInfoToolTip/CustomerService"
import './Index.css';
import './style.css';

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

const Problem = (props) => {
  const [userId, setUserId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentNum, setCurrentNum] = useState(0);
  const [consideration, setConsideration] = useState(null);
  const [purchase, setPurchase] = useState(null);
  const [shipping, setShipping] = useState(null);
  const [using, setUsing] = useState(null);
  const [service, setService] = useState(null);
  const [result, setResult] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    createUser().then((userId) => {
      console.log("userId", userId);
      setUserId(userId);
    });
    getQuestions().then((questions) => {
      console.log("questions", questions);
      setQuestions(questions);
    });
  }, []);

  const getPrevProblem = async () => {
    console.log("prev problem",currentNum);
    setResult(result.slice(0,-1));
    if (currentNum > 0) {
      setCurrentNum(currentNum - 1);
    } else {
      navigate(-1);
    }
  };
  const getNextProblem = async () => {
    if (!(consideration && purchase && shipping && using && service )) {
       console.log(consideration,purchase,shipping,using,service)
       alert("choose all options");
       return;
    }
    console.log("next problem",currentNum);
    const answer = {
      text: questions[currentNum]?.reviewText,
      star: questions[currentNum]?.star,
      consideration: consideration,
      purchase: purchase,
      shipping: shipping,
      using: using,
      service: service,
    };
    console.log(result);
    console.log(answer);
    setResult([...result, answer]);
    setConsideration(null);
    setPurchase(null);
    setShipping(null);
    setUsing(null);
    setService(null);
    setCurrentNum(currentNum + 1);
  };
  const submitAnswers = async () => {
    // if (!(consideration && purchase && shipping && using && service )) {
    //   alert("choose all options");
    //   return;
    // }
    const answer = {
      text: questions[currentNum]?.reviewText,
      star: questions[currentNum]?.star,
      consideration: consideration,
      purchase: purchase,
      shipping: shipping,
      using: using,
      service: service,
    };
    const answers = [...result, answer];
    if (answers.length !== questions.length) {
      alert("Answer all questions");
      return;
    }
    await addItem(userId, answers);
    setResult(answers);
    setConsideration(null);
    setPurchase(null);
    setShipping(null);
    setUsing(null);
    setService(null);
    alert("submit success");
    console.log(questions[questions.length - 1]);
    navigate(`/completion`, {
      state: { userId: userId, task: questions[questions.length - 1] },
    });
  };

  return (
    
    <>
      <h1>3.Labeling Task</h1>
      <p>
        <b className="red">**Do not Refresh the page**</b>
      </p>
      <p className="labeling-text">
        Please wait a few seconds for the text to appear
      </p>
      <p className="labeling-text">
        Please read the text below and match it to the corresponding customer
        journey.
      </p>
      <br/>
      <br/>
      <br/>
      <p>
        <hr></hr>
        <p style={{fontSize:".8rem"}}>
        PROGRESS: {currentNum + 1}/{questions?.length}<br/>
        </p>
        <p style={{fontSize:".8rem", marginTop:"5px"}}>
        SENTENCE:
        </p>
        <h2 style={{ color:'#555', lineHeight: "40px"}} className="serif">
          "{questions[currentNum]?.reviewText}"
        </h2>
        <hr></hr>
      </p>
      <div className="container">
        <body>
          <table>
            <tr>
              <td>
                <Consideration/>
              </td>
              <td style={{ textAlign: "center", width: "300px" , marginBottom:"0"}}>
                {["No", "Maybe", "Yes"].map((v,vi) => {
                    return (
                        
                            <button
                                className={(consideration == vi.toString())? "bigButton selected": "bigButton"}
                                type="radio"
                                
                                onChange={() => { }}
                                onClick={() => {
                                    setConsideration(vi.toString());
                                    console.log("consider is assigned")
                                    console.log(consideration)
                                }}
                            >{v}</button>                        
                    );
                })
                }
              </td>
            </tr>
            <tr>
              <td>
                  <Purchase/>
              </td>
              <td style={{ textAlign: "center", width: "300px" }}>
                {["No", "Maybe", "Yes"].map((v,vi) => {
                    return (
                        
                            <button
                                className={
                                  (purchase == vi.toString())? "bigButton selected": "bigButton"
                                }
                                type="radio"
                                
                                onChange={() => { 
                                  
                                }}
                                onClick={() => {
                                    setPurchase(vi.toString());
                                    console.log("purchase is assigned")
                                    console.log(purchase)
                                }}
                            >{v}</button>                        
                    );
                })
                }
              </td>
            </tr>
            <tr>
              <td>
                <Shipping/>
              </td>
              <td style={{ textAlign: "center", width: "300px" }}>
                {["No", "Maybe", "Yes"].map((v,vi) => {
                    return (
                        
                            <button
                                className={(shipping == vi.toString())? "bigButton selected": "bigButton"}
                                type="radio"
                                
                                onChange={() => { }}
                                onClick={() => {
                                    setShipping(vi.toString());
                                    console.log("shipping is assigned")
                                    console.log(shipping)
                                }}
                            >{v}</button>                        
                    );
                })
                }
              </td>
            </tr>
            <tr>
              <td>
                  <Using/>
              </td>
              <td style={{ textAlign: "center", width: "300px" }}>
                {["No", "Maybe", "Yes"].map((v,vi) => {
                    return (
                        
                            <button
                                className={(using == vi.toString())? "bigButton selected": "bigButton"}
                                type="radio"
                                
                                onChange={() => { }}
                                onClick={() => {
                                    setUsing(vi.toString());
                                    console.log("using is assigned")
                                    console.log(using)
                                }}
                            >{v}</button>                        
                    );
                })
                }
              </td>
            </tr>
            <tr>
              <td>
                  <CustomerService/>
              </td>
              <td style={{ textAlign: "center", width: "300px" }}>
                {["No", "Maybe", "Yes"].map((v,vi) => {
                    return (
                        
                            <button
                                className={(service == vi.toString())? "bigButton selected": "bigButton"}
                                type="radio"
                                
                                onChange={() => { }}
                                onClick={() => {
                                    setService(vi.toString());
                                    console.log("service is assigned")
                                    console.log(service)
                                }}
                            >{v}</button>                        
                    );
                })
                }
              </td>
            </tr>

          </table>
        </body>
      </div>
      <FormControl>
        <Stack direction="row" spacing={2} style={{ marginTop: "40px" }}>
          <Button variant="outlined" onClick={getPrevProblem}  style={{ textDecoration: 'none'}}>
            Previous
          </Button>
          {/* <IconButton color="primary" size="large" aria-label="home" onClick={()=>{navigate('/')}}>
						<HomeIcon />
					</IconButton> */}
          {currentNum + 1 !== questions?.length ? (
            <Button variant="outlined" onClick={getNextProblem}  style={{ textDecoration: 'none'}}>
              Next
            </Button>
          ) : (
            <Button variant="contained" onClick={submitAnswers}  style={{ textDecoration: 'none'}}>
              Submit
            </Button>
          )}
        </Stack>
      </FormControl>
    </>
  );
};

export default Problem;

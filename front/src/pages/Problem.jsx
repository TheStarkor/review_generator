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
    console.log("prev problem");
    if (currentNum > 0) {
      setCurrentNum(currentNum - 1);
    } else {
      navigate(-1);
    }
  };
  const getNextProblem = async () => {
    if (!(consideration && purchase && shipping && using && service )) {
      alert("choose all options");
      return;
    }
    console.log("next problem");
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
    if (!(consideration && purchase && shipping && using && service )) {
      alert("choose all options");
      return;
    }
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
      <h1>Labeling Task</h1>
      <p>
        <b className="red">**Do not Refresh the page**</b>
      </p>
      <p>
        Progress {currentNum + 1}/{questions?.length}
      </p>
      <p className="labeling-text">
        Please wait a few seconds for the text to appear
      </p>
      <p className="labeling-text">
        Please read the text below and match it to the corresponding customer
        journey.
      </p>
      <p>
        <hr></hr>
        <h2 style={{ fontWeight: "normal", lineHeight: "40px" }}>
          {" "}
          Sentence:<br />{questions[currentNum]?.reviewText}
        </h2>
      </p>
      <hr></hr>
      <div className="container">
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
                  checked={consideration == "1"}
                  onChange={(e) => {
                    setConsideration(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={consideration == "0"}
                  onChange={(e) => {
                    setConsideration(e.target.value);
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
                  checked={purchase == "1"}
                  onChange={(e) => {
                    setPurchase(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={purchase == "0"}
                  onChange={(e) => {
                    setPurchase(e.target.value);
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
                  checked={shipping == "1"}
                  onChange={(e) => {
                    setShipping(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={shipping == "0"}
                  onChange={(e) => {
                    setShipping(e.target.value);
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
                  checked={using == "1"}
                  onChange={(e) => {
                    setUsing(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={using == "0"}
                  onChange={(e) => {
                    setUsing(e.target.value);
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
                  checked={service == "1"}
                  onChange={(e) => {
                    setService(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <input
                  className="bigButton"
                  type="radio"
                  value="0"
                  checked={service == "0"}
                  onChange={(e) => {
                    setService(e.target.value);
                  }}
                ></input>
              </td>
            </tr>

          </table>
        </body>
      </div>
      <FormControl>
        <Stack direction="row" spacing={2} style={{ marginTop: "40px" }}>
          <Button variant="outlined" onClick={getPrevProblem}>
            Previous
          </Button>
          {/* <IconButton color="primary" size="large" aria-label="home" onClick={()=>{navigate('/')}}>
						<HomeIcon />
					</IconButton> */}
          {currentNum + 1 !== questions?.length ? (
            <Button variant="outlined" onClick={getNextProblem}>
              Next
            </Button>
          ) : (
            <Button variant="contained" onClick={submitAnswers}>
              Submit
            </Button>
          )}
        </Stack>
      </FormControl>
    </>
  );
};

export default Problem;

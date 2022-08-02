import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addItem, createUser, getQuestions } from "../server/functions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

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
  const [none, setNone] = useState(null);
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
    if (!(consideration && purchase && shipping && using && service && none)) {
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
      none: none,
    };
    console.log(result);
    console.log(answer);
    setResult([...result, answer]);
    setConsideration(null);
    setPurchase(null);
    setShipping(null);
    setUsing(null);
    setService(null);
    setNone(null);
    setCurrentNum(currentNum + 1);
  };
  const submitAnswers = async () => {
    if (!(consideration && purchase && shipping && using && service && none)) {
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
      none: none,
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
    setNone(null);
    alert("submit success");
		console.log(questions[questions.length - 1])
    navigate(`/completion`, { state: {userId: userId, task: questions[questions.length - 1]} });
  };

  return (
    <>
      <h1>Labeling Task</h1>
      <p>
        <b className="red">**Do not Refresh the page**</b>
      </p>
      {questions !== [] && (
        <>
          <p>
            Progress {currentNum + 1}/{questions?.length}
          </p>
          <p className="labeling-text">
            Please read the text below and match it to the corresponding
            customer journey.
            <h3> Text: {questions[currentNum]?.reviewText}</h3>
          </p>
          <FormControl>
            <FormLabel
              id="row-radio-buttons-group-label"
              style={{ marginTop: "10px" }}
            >
              <Grid container direction="row" alignItems="center">
                Consideration
                <HelpInfoTooltip
                  placement="right-start"
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        Opinions related to before purchase decision making
                      </Typography>
                      <p>{"Texpectation of the product"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {
                          "Example Quotes : Disappointed as I expected that it would last me for 6 months for the least."
                        }
                      </li>
                      <p>{"Reason for purchase decision making"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {
                          "Example Quotes : I buy this product for my daughter’s present."
                        }
                      </li>
                      <p>{"Product search experience"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {
                          "Example Quotes : After a long research, I finally choose this one."
                        }
                      </li>
                    </React.Fragment>
                  }
                >
                  <HelpOutlineIcon style={{ paddingLeft: "5px" }} />
                </HelpInfoTooltip>
              </Grid>{" "}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={consideration}
              onChange={(e) => {
                setConsideration(e.target.value);
              }}
            >
              <FormControlLabel value="1" control={<Radio />} label="O" />
              <FormControlLabel value="0" control={<Radio />} label="X" />
            </RadioGroup>
            <FormLabel
              id="row-radio-buttons-group-label"
              style={{ marginTop: "10px" }}
            >
              <Grid container direction="row" alignItems="center">
                Purchase
                <HelpInfoTooltip
                  placement="right-start"
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        Opinions related to purchases on the platform
                      </Typography>
                      <p>{"Thoughts and opinions about price"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {
                          "Example Quotes : I spend at least 1600 rs for this product and really unsatisfied."
                        }
                      </li>
                      <p>{"Package condition"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {
                          "Example Quotes : I kept trying, but Amazon's payment system didn't work."
                        }
                      </li>
                    </React.Fragment>
                  }
                >
                  <HelpOutlineIcon style={{ paddingLeft: "5px" }} />
                </HelpInfoTooltip>
              </Grid>{" "}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={purchase}
              onChange={(e) => {
                setPurchase(e.target.value);
              }}
            >
              <FormControlLabel value="1" control={<Radio />} label="O" />
              <FormControlLabel value="0" control={<Radio />} label="X" />
            </RadioGroup>

            <FormLabel
              id="row-radio-buttons-group-label"
              style={{ marginTop: "10px" }}
            >
              <Grid container direction="row" alignItems="center">
                Shipping
                <HelpInfoTooltip
                  placement="right-start"
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        Opinions related to product shipping
                      </Typography>
                      <p>{"Thoughts and opinions about delivery time"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {"Quotes : Got the earphones 3 days early."}
                      </li>
                      <p>{"Package condition"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {"Quotes : The product came very worse packaged."}
                      </li>
                    </React.Fragment>
                  }
                >
                  <HelpOutlineIcon style={{ paddingLeft: "5px" }} />
                </HelpInfoTooltip>
              </Grid>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={shipping}
              onChange={(e) => {
                setShipping(e.target.value);
              }}
            >
              <FormControlLabel value="1" control={<Radio />} label="O" />
              <FormControlLabel value="0" control={<Radio />} label="X" />
            </RadioGroup>

            <FormLabel
              id="row-radio-buttons-group-label"
              style={{ marginTop: "10px" }}
            >
              <Grid container direction="row" alignItems="center">
                Using
                <HelpInfoTooltip
                  placement="right-start"
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        Opinions related to product usage
                      </Typography>
                      <p>
                        {
                          "Product quality evaluation (sound quality, bass, charging, connection, ….)"
                        }
                      </p>
                      <li style={{ fontStyle: "italic" }}>
                        {
                          "Example Quotes : The sound quality is awesome but the built quality of the product is at very low level."
                        }
                      </li>
                      <p>{"Context of use"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {"Example Quotes : I used it when exercising."}
                      </li>
                      <p>{"Ease of use"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {
                          "Example Quotes : The earphones kept coming out of my ears."
                        }
                      </li>
                      <p>{"Frequency of use"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {"Example Quotes : I use the product 2-3 times a week."}
                      </li>
                    </React.Fragment>
                  }
                >
                  <HelpOutlineIcon style={{ paddingLeft: "5px" }} />
                </HelpInfoTooltip>
              </Grid>{" "}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={using}
              onChange={(e) => {
                setUsing(e.target.value);
              }}
            >
              <FormControlLabel value="1" control={<Radio />} label="O" />
              <FormControlLabel value="0" control={<Radio />} label="X" />
            </RadioGroup>

            <FormLabel
              id="row-radio-buttons-group-label"
              style={{ marginTop: "10px" }}
            >
              <Grid container direction="row" alignItems="center">
                Customer Service
                <HelpInfoTooltip
                  placement="right-start"
                  title={
                    <React.Fragment>
                      <Typography color="inherit">
                        Opinions about product issues and the company’s response
                      </Typography>
                      <p>{"Warranty service"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {
                          "Example Quotes : The product is giving a two-year warranty."
                        }
                      </li>
                      <p>{"Return"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {"Example Quotes : Product is returned."}
                      </li>
                      <p>{"Refund / Replace"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {
                          "Example Quotes : Hope to get it replaced at service centre."
                        }
                      </li>
                      <p>{"Company’s communication about the product issue"}</p>
                      <li style={{ fontStyle: "italic" }}>
                        {
                          "Example Quotes : I've tried calling them but the always receive a 'network busy' error."
                        }
                      </li>
                    </React.Fragment>
                  }
                >
                  <HelpOutlineIcon style={{ paddingLeft: "5px" }} />
                </HelpInfoTooltip>
              </Grid>{" "}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={service}
              onChange={(e) => {
                setService(e.target.value);
              }}
            >
              <FormControlLabel value="1" control={<Radio />} label="O" />
              <FormControlLabel value="0" control={<Radio />} label="X" />
            </RadioGroup>
            <FormLabel
              id="row-radio-buttons-group-label"
              style={{ marginTop: "10px" }}
            >
              <Grid container direction="row" alignItems="center">
                None
                <HelpInfoTooltip
                  placement="right-start"
                  title={
                    <React.Fragment>
                      <Typography color="inherit">None of the above</Typography>
                    </React.Fragment>
                  }
                >
                  <HelpOutlineIcon style={{ paddingLeft: "5px" }} />
                </HelpInfoTooltip>
              </Grid>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={none}
              onChange={(e) => {
                setNone(e.target.value);
              }}
            >
              <FormControlLabel value="1" control={<Radio />} label="O" />
              <FormControlLabel value="0" control={<Radio />} label="X" />
            </RadioGroup>
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
      )}
    </>
  );
};

export default Problem;

import React, { useState, useEffect } from "react";
import _ from "lodash";
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

import TutorialQuestion from "./TutorialQuestion.jsx"


const Tutorial = (props) => {
    let questions = [
        {
            "question": "After a while, the headphone comes to uncomfortable.",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about consideration."
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about purchase."
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about shipping."
                    }
                },
                "using": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The sentence is talking about experience while using the product."
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about customer service."
                    }
                }
            }
        },
        {
            "question": "As the headphone was uncomfortable, I asked the company to fix",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about consideration."
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about purchase."
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about shipping."
                    }
                },
                "using": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct!",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The setence is talking about problem of the product."
                    }
                },
                "service": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct!",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The sentence is talking problem solving experience."
                    }
                }
            }
        },
        {
            "question": "I replaced my headphone",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about consideration."
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about purchase."
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about shipping."
                    }
                },
                "using": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about using."
                    }
                },
                "service": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct!",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The sentence is talking abour product replace experience."
                    }
                }
            }
        },
        {
            "question": "I bought it at a low price during the promotion",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about consideration."
                    }
                },
                "purchase": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct!",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The sentence is talking about customer's purchase experience"
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about shipping."
                    }
                },
                "using": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about using."
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about customer service."
                    }
                }
            }
        },
        {
            "question": "Will buy it again",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about consideration."
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about user's previous purchase experience."
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about shipping."
                    }
                },
                "using": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about using."
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about customer service."
                    }
                }
            }
        },
        {
            "question": "You get the value of your money",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about consideration."
                    }
                },
                "purchase": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct!",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The sentence is talking about the product's price."
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about shipping."
                    }
                },
                "using": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct!",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The sentence is talking abour product value after using."
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about customer service."
                    }
                }
            }
        },
        {
            "question": "With amazing price, the quality was great",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about consideration."
                    }
                },
                "purchase": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct!",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The sentence is talking about the product's price."
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about shipping."
                    }
                },
                "using": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct!",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The sentence is talking abour product value after using."
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about customer service."
                    }
                }
            }
        },
        {
            "question": "When listening to music, they are not like similar styles of headphones",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",    
                        "explain" : "The sentence doesn't contain any information about consideration. It just compare with other products after using"
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about purchase."
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about shipping."
                    }
                },
                "using": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct!",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The sentence is talking about product using experience."
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about customer service."
                    }
                }
            }
        },        
        {
            "question": "Reviews say that they are not like similar styles of headphones",
            "feedback": {
                "consideration": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct!",
                        "1": "Think again",
                        "0": "Think again",
                        "explain" : "The sentence is talking about consideration experience. Which is reading review before purchase."
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about purchase."
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about shipping."
                    }
                },
                "using": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about using."
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Think again",
                        "1": "Think again",
                        "0": "Correct!",
                        "explain" : "The sentence doesn't contain any information about customer service."
                    }
                }
            }
        }
    ]
    let initialResults = questions.map(q => { return undefined; });
    const [evaluationResults, setEvaluationResults] = useState(initialResults);

    const handleEvaluationResult = (questionNumber, isAllCorrectWithinTheQuestion) => {
        console.log(questionNumber + " has been reevaluated");
        let newResults = [...evaluationResults];
        newResults[questionNumber] = isAllCorrectWithinTheQuestion;
        setEvaluationResults(newResults);
    }

    return (
        <>
            <h1>2. Labeling Tutorial</h1>
            <h2>Here are sample questions.</h2>
            <p><b style={{ color: "red" }}>After correctly answer all tutorial questions, you can go to next step.</b></p>
            <hr></hr>
            <br></br>
            <p>Please read sentences from online reviews and match them to correct customer journey stage</p>
            <ul>
                <li><p>For each sentences, you have to select Yes/No for all stages</p></li>
                <li><p>If you cannot remeber the meaning of stages, move your mouse on the <HelpCenterIcon style={{ marginTop: "0", paddingLeft: "0px", color: "grey" }} /> icon.
         </p></li>
            </ul>
            <br></br>
            <hr></hr>
            <div className='example'>
                <ul>
                    {questions.map((q, qi) => {
                        return (
                            <TutorialQuestion key={"tq" + qi} 
                                evaluationResult={evaluationResults[qi]} 
                                number={qi.toString()} 
                                qObj={q} handleEvaluationResult={handleEvaluationResult} />
                        );
                    })}
                </ul>
            </div>
            <Stack direction="row" spacing={2}>
                <Link to="/sample2">
                    <Button variant="outlined">Previous</Button>
                </Link>
                {_.every(evaluationResults, (r)=>{ return r; }) ? (
                <Link to="/problem">
                    <Button variant="outlined">Next</Button>
                </Link>
                ) : (
                <Button variant="disabled">Next</Button>                )}
            </Stack>
        </>
    );
};

export default Tutorial;

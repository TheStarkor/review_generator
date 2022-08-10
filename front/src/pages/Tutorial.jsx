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

import './style.css';
import './Index.css';


const Tutorial = (props) => {
    let questions = [
        // {
        //     "question": "After a while, the headphone comes to uncomfortable.",
        //     "feedback": {
        //         "consideration": {
        //             "answerKey": "0",
        //             "messages": {
        //                 "2": "Incorrect: ",
        //                 "1": "Incorrect: ",
        //                 "0": "Correct: ",
        //                 "explain": ""
        //             }
        //         },
        //         "purchase": {
        //             "answerKey": "0",
        //             "messages": {
        //                 "2": "Incorrect: ",
        //                 "1": "Incorrect: ",
        //                 "0": "Correct: ",
        //                 "explain": ""
        //             }
        //         },
        //         "shipping": {
        //             "answerKey": "0",
        //             "messages": {
        //                 "2": "Incorrect: ",
        //                 "1": "Incorrect: ",
        //                 "0": "Correct: ",
        //                 "explain": ""
        //             }
        //         },
        //         "using": {
        //             "answerKey": "2",
        //             "messages": {
        //                 "2": "Correct: ",
        //                 "1": "Incorrect: ",
        //                 "0": "Incorrect: ",
        //                 "explain" : "The sentence is talking about experience while using the product."
        //             }
        //         },
        //         "service": {
        //             "answerKey": "0",
        //             "messages": {
        //                 "2": "Incorrect: ",
        //                 "1": "Incorrect: ",
        //                 "0": "Correct: ",
        //                 "explain": ""
        //             }
        //         }
        //     }
        // },
        {
            "question": "As the headphone was uncomfortable, I asked the company to fix",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "using": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct: ",
                        "1": "Incorrect: ",
                        "0": "Incorrect: ",
                        "explain" : "The setence is talking about problem of the product."
                    }
                },
                "service": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct: ",
                        "1": "Incorrect: ",
                        "0": "Incorrect: ",
                        "explain" : "The sentence is talking problem solving experience."
                    }
                }
            }
        },
        {
            "question": "I refunded my headphone",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": "Refund is not the product purchase stage."
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "using": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "service": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct: ",
                        "1": "Incorrect: ",
                        "0": "Incorrect: ",
                        "explain" : "The sentence is talking abour product replace experience."
                    }
                }
            }
        },
        // {
        //     "question": "I bought it at a low price during the promotion",
        //     "feedback": {
        //         "consideration": {
        //             "answerKey": "0",
        //             "messages": {
        //                 "2": "Incorrect: ",
        //                 "1": "Incorrect: ",
        //                 "0": "Correct: ",
        //                 "explain": ""
        //             }
        //         },
        //         "purchase": {
        //             "answerKey": "2",
        //             "messages": {
        //                 "2": "Correct: ",
        //                 "1": "Incorrect: ",
        //                 "0": "Incorrect: ",
        //                 "explain" : "The sentence is talking about customer's purchase experience"
        //             }
        //         },
        //         "shipping": {
        //             "answerKey": "0",
        //             "messages": {
        //                 "2": "Incorrect: ",
        //                 "1": "Incorrect: ",
        //                 "0": "Correct: ",
        //                 "explain": ""
        //             }
        //         },
        //         "using": {
        //             "answerKey": "0",
        //             "messages": {
        //                 "2": "Incorrect: ",
        //                 "1": "Incorrect: ",
        //                 "0": "Correct: ",
        //                 "explain": ""
        //             }
        //         },
        //         "service": {
        //             "answerKey": "0",
        //             "messages": {
        //                 "2": "Incorrect: ",
        //                 "1": "Incorrect: ",
        //                 "0": "Correct: ",
        //                 "explain": ""
        //             }
        //         }
        //     }
        // },
        {
            "question": "Will buy it again",
            "feedback": {
                "consideration": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain" : "The sentence doesn't contain any information about user's previous purchase of the product."
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "using": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
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
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "using": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
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
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "purchase": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct: ",
                        "1": "Incorrect: ",
                        "0": "Incorrect: ",
                        "explain": "Sentence is talking about the price of the product"
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "using": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct: ",
                        "1": "Incorrect: ",
                        "0": "Incorrect: ",
                        "explain": ""
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
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
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",    
                        "explain" : "The sentence doesn't contain any information about consideration. It just compare with other products after using"
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "using": {
                    "answerKey": "2",
                    "messages": {
                        "2": "Correct: ",
                        "1": "Incorrect: ",
                        "0": "Incorrect: ",
                        "explain": ""
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
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
                        "2": "Correct: ",
                        "1": "Incorrect: ",
                        "0": "Incorrect: ",
                        "explain" : "The sentence is talking about consideration experience. Which is reading review before purchase."
                    }
                },
                "purchase": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "shipping": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "using": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
                    }
                },
                "service": {
                    "answerKey": "0",
                    "messages": {
                        "2": "Incorrect: ",
                        "1": "Incorrect: ",
                        "0": "Correct: ",
                        "explain": ""
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
            <h1>2. Tutorial</h1>
            <p>Read sentences below, and tell us whether they contain information of a specific customer journey stage.</p>
            <p>Note that a single sentence could be associated with multiple or no stage.</p>
            <p>If you cannot remeber the meaning of stages, hover your mouse over the <b style={{textDecoration:"underline"}}>customer journey stage name</b></p>
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
            <p><b>After correctly answer all tutorial questions, you can go to next step.</b></p>
            <br/>
            <Stack direction="row" spacing={2}>
                <Link to="/sample"  style={{ textDecoration: 'none'}}>
                    <Button variant="outlined">Previous</Button>
                </Link>
                {_.every(evaluationResults, (r)=>{ return r; }) ? (
                <Link to="/problem"  style={{ textDecoration: 'none'}}>
                    <Button variant="outlined">Next</Button>
                </Link>
                ) : (
                <Button variant="disabled">Next</Button>                )}
            </Stack>
        </>
    );
};

export default Tutorial;

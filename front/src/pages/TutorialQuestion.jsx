import React, { useState, useEffect } from "react";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import _ from "lodash";
import Consideration from "./HelpInfoToolTip/Consideration"
import Purchase from "./HelpInfoToolTip/Purchase"
import Shipping from "./HelpInfoToolTip/Shipping"
import Using from "./HelpInfoToolTip/Using"
import CustomerService from "./HelpInfoToolTip/CustomerService"

import './Index.css';
import './style.css';

function TutorialQuestion(props) {
    const [choices, setChoices] = useState({
        "consideration": undefined,
        "purchase": undefined,
        "shipping": undefined,
        "using": undefined,
        "service": undefined
    });
    const instructions = {
        "consideration": Consideration,
        "purchase": Purchase,
        "shipping": Shipping,
        "using": Using,
        "service": CustomerService
    };
    const handleChoice = (k, v) => {
        console.log(k); console.log(v);
        setChoices(choices => ({
            ...choices,
            [k]: v
        }))
    }
    const evaluateChoices = () => {
        console.log("evaluating current choices");
        let evalResult = {};
        Object.keys(choices).forEach(stageKey => {
            evalResult[stageKey] = choices[stageKey] == feedback[stageKey]["answerKey"];
        });
        return evalResult;
    };
    useEffect(() => {
        let evaluationResult = evaluateChoices();
        let isAllCorrect = _.every(Object.values(evaluationResult), (v)=>{
            return v==true;
        })
        if (isAllCorrect) {
            console.log("Question" + props.number + "'s answers are all correct");
        } else {
            console.log("Question" + props.number + "'s answers are not correct yet");
        }
        props.handleEvaluationResult(props.number, isAllCorrect);
    }, [choices]);

    const feedback = props.qObj.feedback;

    console.log(props.considerationList);

    const questions = Object.keys(instructions).map((k, ki) => {
        return (
            <tr key={ki}>
                <td>
                    {instructions[k]()}
                </td>
                <td style={{ textAlign: "center", width: "300px" }}>
                {["No", "Maybe", "Yes"].map((v,vi) => {
                    return (
                        
                            <button
                                className={(choices[k] == vi.toString())? "bigButton selected": "bigButton"}
                                type="radio"
                                
                                onChange={() => { }}
                                onClick={() => {
                                    handleChoice(k, vi.toString());
                                }}
                            >{v}</button>
                        
                    );
                })
                }
                </td>
                <td className="feedback">
                    <div className='rowC'>
                    <div>
                        <span   style={{color:"red"}}>{feedback[k]["messages"][choices[k]]}</span>
                        {(choices[k] == undefined) ? (
                            ""
                            ) : (
                            feedback[k]["messages"]["explain"]
                        )}
                    </div>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <>
            <br/>
            <br/>
            <h2 style={{}}> {parseInt(props.number) + 1}.</h2>
            <hr></hr>
            <h2 style={{ color:'#555', lineHeight: "40px"}} className="serif"> "{props.qObj.question}"</h2>
            <hr></hr>
            <table className="choiceTable">
                <tbody>
                    {/* <tr>
                        <th></th>
                        <th style={{ fontWeight: "normal", width: "60px" }}>Very<br />likely</th>
                        <th style={{ fontWeight: "normal", width: "60px" }}>Somewhat<br />likely</th>
                        <th style={{ fontWeight: "normal", width: "60px" }}>Not<br />likely</th>
                    </tr> */}
                    {questions}
                    <tr>
                        <th></th>
                        <th>
                        <h3 style={{textAlign:'center'}}>
                            <div style={{color:'red'}}>{(props.evaluationResult) ? "Good job": "Please check your answer again"}</div>
                        </h3>
                        </th>
                    </tr>
                </tbody>
            </table>
            <hr></hr>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default TutorialQuestion;
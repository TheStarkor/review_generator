import React, { useState, useEffect } from "react";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import _ from "lodash";
import Consideration from "./HelpInfoToolTip/Consideration"
import Purchase from "./HelpInfoToolTip/Purchase"
import Shipping from "./HelpInfoToolTip/Shipping"
import Using from "./HelpInfoToolTip/Using"
import CustomerService from "./HelpInfoToolTip/CustomerService"


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
                {["2", "1", "0"].map(v => {
                    return (
                        <td style={{ textAlign: "center" }} key={"td" + v}>
                            <input
                                className="bigButton"
                                type="radio"
                                checked={
                                    choices[k] == v
                                }
                                onChange={() => { }}
                                onClick={() => {
                                    handleChoice(k, v);
                                }}
                            ></input>
                        </td>
                    );
                })
                }
                <td className="feedback">
                    <div  style={{color:"blue"}}>{feedback[k]["messages"][choices[k]]}</div>
                    {(choices[k] == undefined) ? (
                        <div></div>
                        ) : (
                        <div style={{maxWidth:"400px"}}>{feedback[k]["messages"]["explain"]}</div>
                    )}             
                </td>
            </tr>
        )
    })

    return (
        <>
            <h2>&nbsp;</h2>
            <li>
                <h2 style={{ fontWeight: "normal" }}>Question {parseInt(props.number) + 1}.</h2>
                <hr></hr>
                <h2 style={{ fontWeight: "normal", lineHeight: "40px" }}>sentence:<br /> {props.qObj.question}</h2>
                <hr></hr>
            </li>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th style={{ fontWeight: "normal", width: "60px" }}>Very<br />likely</th>
                        <th style={{ fontWeight: "normal", width: "60px" }}>Somewhat<br />likely</th>
                        <th style={{ fontWeight: "normal", width: "60px" }}>Not<br />likely</th>
                    </tr>
                    {questions}
                </tbody>
            </table>
            <h2>
                Status : <div style={{color:'blue'}}>{(props.evaluationResult) ? "All Correct": "Not done yet"}</div>
            </h2>
            <hr></hr>
        </>
    );
};

export default TutorialQuestion;
import { useEffect, useState } from "react";
import Ending from "./ending";
import ErrorMessage from "./error-message";
import questions from "./questions";
import QuestionView from "./question-view";
import { Alert } from "@mui/material";

export default function Game(){
    const timeout = 60
    const [timer, setTimer] = useState(timeout)
    const [locked, setLocked] = useState(false)
    const [message, setMessage] = useState()
    const [score, setScore] = useState(0)
    const [questionIndex, setIndex] = useState(0)
    const [finished, setFinished] = useState(false)
    const correctPoints = Math.round(100 / questions.length)
    useEffect(()=>{
        // Countdown Timer
        if(!locked && timer > 0) setTimeout(()=>{
            setTimer(timer - 1)
        },1000)
    }, [locked, timer, setTimer])
  
    const correctHandler = () => {
        // Selected Correct Answer
        if(!locked){
            setMessage((<Alert severity="success">Correct!</Alert>))
            setScore(score + correctPoints)
            selectionHandler() 
        }   
    }
    const incorrectHandler = () => {
        // Selected Incorrect Answer
        if(!locked){
            setMessage(<Alert severity="error">Nope, you are a fool!</Alert>)
            selectionHandler() 
        }
    }
    const selectionHandler = () => {
        // A Selection was Made
        setLocked(true)
        setTimeout(()=>{
            if(questionIndex + 1 < questions.length) {
                setIndex(questionIndex+1)
                setTimer(timeout)
            }
            else {setFinished(true)}
            setMessage()
            setLocked(false)
        },1500)
    }
    const progress = (questionIndex/questions.length) * 100
        
    const render = !locked && (timer === 0) ? 
        <ErrorMessage/> :
        <QuestionView 
            question={questions[questionIndex]} 
            correctHandler={correctHandler}  
            incorrectHandler={incorrectHandler} 
            message={message}
            progress={progress}
        />
    return render 
}

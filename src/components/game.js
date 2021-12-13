import { useEffect, useState } from "react";
import questions from "./questions";
import QuestionView from "./question-view";

export default function Game(){
  const [timer, setTimer] = useState(timeout)
  const [questionIndex, setIndex] = useState(0)
  useEffect(()=>{
        // Countdown Timer
        if(!locked && timer > 0) setTimeout(()=>{
            setTimer(timer - 1)
        },1000)
    }, [timer, setTimer])
  
  return <QuestionView question={questions[questionIndex]} />
}

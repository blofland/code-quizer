import { useEffect, useState } from "react";
export default function Game(){
  const [timer, setTimer] = useState(timeout)
  useEffect(()=>{
        // Countdown Timer
        if(!locked && timer > 0) setTimeout(()=>{
            setTimer(timer - 1)
        },1000)
    }, [timer, setTimer])
}

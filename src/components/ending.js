import { Typography, Button, Box, Card, TextField } from "@mui/material"
import {  useState } from "react"
import { useNavigate } from "react-router-dom"
import highscores from "../utility/storage"
import { Link } from "react-router-dom"
export default function Ending({score}){
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
    function submitHandler(e){
        e.preventDefault()
        const scores = highscores.get()
        const index = scores.indexOf(s => s.username.toLowerCase() === username.toLowerCase())
        console.log(index)
        if(index === -1) {scores.push({username, score})}
        else {scores[index].score = score }
        highscores.write(scores)
        navigate("/scores")

    }
    const message = (score <= 25) ? 
        "Have you even heard of Google?" : 
        (score <= 50) ? 
        "Try again honey" : 
        (score <= 75) ? 
        "You're killing me smalls!" : 
        (score < 100) ? 
        "Aww, you had so much potential..." : 
        "The only acceptable response. ;-)" 
    return (
        <Card sx={{p: 3, width:'50%', position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%);'}}>
            <Box  sx={{textAlign: 'center'}}>
                <Typography variant={"p"}>{`Your Score:`}</Typography>
                <Typography variant={"h4"}>{`${score} / 100`}</Typography>
                <Typography variant={"div"}>{message}</Typography>
                <Box component="form" sx={{mx: 5}} autoComplete="off" onSubmit={submitHandler}>
                    <div>
                        <h4>Save Score?</h4>
                        <TextField id="username" label="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <Button type="submit" color="success" variant="contained" sx={{display: 'block', width: '30%', textAlign: 'center', mx: 'auto', mt: 3}}>Save</Button>
                    </div>
                </Box>
                <Link to="/"><Button variant="contained" sx={{display: 'block', width: '30%', textAlign: 'center', mx: 'auto', mt: 3}}>Home</Button></Link>
            </Box>
        </Card>
        
    )
}

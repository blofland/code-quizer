import { Card, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function LandingPage(){
    return (
    <Card sx={{p: 3, position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%);'}}>
        <Typography variant="h2" sx={{textAlign:'center'}}>Shall we play a game?</Typography>
        <Box sx={{my:4}}>
            <Link to={"/game"}><Button  variant="contained" sx={{display: 'block', width: '30%', textAlign: 'center', mx: 'auto'}}>Let's Begin</Button></Link>
            <Link to="/scores"><Button sx={{display: 'block', width: '30%', textAlign: 'center', mx: 'auto'}}>High Scores</Button></Link>
        </Box>    
    </Card>)
}

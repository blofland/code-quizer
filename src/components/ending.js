import { Typography, Button, Box, Card, TextField } from "@mui/material"

export default Ending({score}){
  const message = (score <= 25) ? 
        "Have you even heard of Google?" : 
        (score <= 50) ? 
        "Try again honey" : 
        (score <= 75) ? 
        "You're killing me smalls!" : 
        (score < 100) ? 
        "Aww, you had so much potential..." : 
        "The only acceptable response. ;-)" 
  return <Card sx={{p: 3, width:'50%', position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%);'}}>
    <Box  sx={{textAlign: 'center'}}>
      <Typography variant={"p"}>{`Your Score:`}</Typography>
      <Typography variant={"h4"}>{`${score} / 100`}</Typography>
      <Typography variant={"div"}>{message}</Typography>
    </Box>
  <Card>
}

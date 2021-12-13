import { Typography, Button, Box, Card, TextField } from "@mui/material"
export default Ending({score}){
  return <Card sx={{p: 3, width:'50%', position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%);'}}>
    <Box  sx={{textAlign: 'center'}}>
      <Typography variant={"p"}>{`Your Score:`}</Typography>
      <Typography variant={"h4"}>{`${score} / 100`}</Typography>
    </Box>
  <Card>
}

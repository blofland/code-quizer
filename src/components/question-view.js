import { Card, Typography, LinearProgress, List, ListItemButton, Box } from "@mui/material";
export default function QuestionView({question, correctHandler, incorrectHandler, message, progress}){
    return (
        <Card sx={{p: 3, width:'50%', position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%);'}}>
            <Box sx={{my: 4}}><LinearProgress variant="determinate" value={progress} /></Box>
            <Box sx={{my:4}}>
            <Typography variant={"h4"}>{question.question}</Typography>
                <List>
                    {question.choices.map((c,i) => {
                        const handler = i === question.answer ? correctHandler : incorrectHandler
                        return <ListItemButton key={i} onClick={handler}><Typography sx={{pr:2}}value="bold">{`${i+1}:`}</Typography><span choice={c}>{c}</span></ListItemButton>
                    })}
                </List>
                {message}
            </Box>
        </Card>

    )
}

import { List, ListItem, ListItemText  } from "@mui/material"
import { Box } from "@mui/material"
import highscores from "../utility/storage"

export default function HighScores() {
    const scores = highscores.get()
    scores.sort((a,b)=>{
        return b.score - a.score
    })
    const scoreList = scores.map((s,i) => {
        const bb = (i+1) === scores.length ? 0 : 1
        return <ListItem sx={{borderBottom: bb}} key={i}>
            <ListItemText primary={s.score.toLocaleString()} secondary={s.username}/>
        </ListItem>
    })
    return (
        <Box sx={{border: 1, p: 3, textAlign: 'center', width:'75%', position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%);'}}>
            <h3>High Scores</h3>
            <List>
                {scoreList}
            </List>
        </Box>
    )
}

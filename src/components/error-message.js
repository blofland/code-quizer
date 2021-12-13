import { Modal, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ErrorMessage(){
    return (
        <Modal open={true}>
            <Box sx={{p:6, backgroundColor: 'error.main', color:'white', position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%);', textAlign: 'center'}}>
                <h2>You. Were. Too. SLOW!</h2>
                <Link to="/"><Button variant="contained" sx={{display: 'block', width: '75%', textAlign: 'center', mx: 'auto'}}>Try Again</Button></Link>
            </Box>
        </Modal>
    )
}

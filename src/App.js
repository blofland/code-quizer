import './App.css';
import { Container } from '@mui/material';
import LandingPage from './components/landing-page';
import Game from './components/game';
import HighScores from './components/high-scores';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container sx={{height: '100vh'}}>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/scores" element={<HighScores/>}/>
      </Routes>
    </Container>
  );
}

export default App;

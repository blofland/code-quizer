import './App.css';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing-page';

function App() {
  return (
    <Container sx={{height: '100vh'}}>
      <Routes>
        <Route path="/" element={LandingPage}/>
        <Route path="/game"/>
        <Route path="/scores"/>
      </Routes>
    </Container>
  );
}

export default App;

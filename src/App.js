import './App.css';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container sx={{height: '100vh'}}>
      <Routes>
        <Route path="/"/>
        <Route path="/game"/>
        <Route path="/scores"/>
      </Routes>
    </Container>
  );
}

export default App;

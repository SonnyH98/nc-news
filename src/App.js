import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Articles from './components/Articles';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { AppBar } from '@mui/material';

function App() {
  return (
    <Container maxWidth='sm' className='news'>
      <BrowserRouter>
        <AppBar>
          <Typography variant='h2'>NC-News</Typography>
        </AppBar>
        <div className='App'></div>
        <Typography variant='h4' className='user'>
          Welcome USER(CHANGE TO DEFAULT USER LATER)
        </Typography>
        <Typography variant='subtitle1'>
          <Link to={'/articles/all'}>Articles</Link> {'  |  '}
        </Typography>
        <Routes>
          <Route path='/articles/:topic' element={<Articles />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Articles from './components/Articles';
import Users from './components/Users';
import SpecificArticle from './components/SpecificArticle';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { AppBar } from '@mui/material';
import { UserContext } from './contexts/User';

//adding comment for commit
function App() {
  const [user, setUser] = useState('cooljmessy');
  return (
    <Container maxWidth='sm' className='news'>
      <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <AppBar>
          <Typography variant='h2'>NC-News</Typography>
        </AppBar>
        <div className='App'></div>
        <Typography variant='h4' className='user'>
          Current User:  {user}
        </Typography>
        <Typography variant='subtitle1'>
          <Link to={'/articles/all'}>Articles</Link> {'  |  '}
          <Link to={'/users'}>Users</Link> {'  |  '}
        </Typography>
        <Routes>
          <Route path='/articles/:topic' element={<Articles />}>
            
          </Route>
          <Route path='/users' element={<Users />}>
            
          </Route>
          <Route
            path='/article/:article_id'
            element={<SpecificArticle />}
          ></Route>
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </Container>
  );
}

export default App;

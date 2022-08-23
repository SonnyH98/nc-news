import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Articles from './components/Articles';
import FilteredArticles from './components/FilteredArticles';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';

function App() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState('');
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
          <Route
            path='/articles/all'
            element={
              <Articles
                articles={articles}
                setArticles={setArticles}
                topics={topics}
                setTopics={setTopics}
                currentTopic={currentTopic}
                setCurrentTopic={setCurrentTopic}
              />
            }
          ></Route>
          <Route
            path='/articles/topic'
            element={
              <FilteredArticles
                articles={articles}
                setArticles={setArticles}
                currentTopic={currentTopic}
                setCurrentTopic={setCurrentTopic}
                topics={topics}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

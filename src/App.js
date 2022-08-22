import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Articles from './components/Articles';
import { useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <BrowserRouter>
      <h1>NC-News</h1>
      <h2>Welcome USER(CHANGE TO DEFAULT USER LATER)</h2>
      <Link to={'/articles'}>Articles</Link>
      <div className='App'></div>
      <Routes>
        <Route
          path='/articles'
          element={<Articles articles={articles} setArticles={setArticles} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchArticleById,
  increaseVotesByArticleId,
  decreaseVotesByArticleId,
} from './api-calls';
import Comments from './Comments';
import ErrorPage from './ErrorPage';
import { UserContext } from '../contexts/User';

export default function SpecificArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [userError, setUserError] = useState(null);
  const [voteCount, setVoteCount] = useState(0);
  const [viewComments, setViewComments] = useState(true);
  const { err, setErr } = useContext(UserContext);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((articleInfo) => {
        setArticle(articleInfo);
      })
      .catch((err) => {
        setErr({ err });
      });
  }, []);

  if (userError) {
    return <p>{userError}</p>;
  }

  if (err) {
    return <ErrorPage />;
  } else {
    return (
      <section>
        <p>-----------------------------------</p>
        <h1>NC-NEWS Article</h1>
        <p>Date: {article.created_at}</p>
        <h2>
          {article.title} by {article.author}
        </h2>
        <p>{article.body}</p>

        <p className='votes'>Votes: {article.votes + voteCount}</p>
        <button
          onClick={() => {
            setVoteCount((currCount) => currCount + 1);
            increaseVotesByArticleId(article.article_id).catch((userError) => {
              setVoteCount((currCount) => currCount - 1);
              setUserError('Something went wrong, please try again');
            });
          }}
        >
          Increase the votes
        </button>
        <button
          onClick={() => {
            setVoteCount((currCount) => currCount - 1);
            decreaseVotesByArticleId(article.article_id).catch((userError) => {
              setVoteCount((currCount) => currCount + 1);
              setUserError('Something went wrong, please try again');
            });
          }}
        >
          Decrease the votes
        </button>
        <p>Comment Count: {article.comment_count}</p>
        <button
          onClick={() => {
            setViewComments((currBool) => {
              return !currBool;
            });
          }}
        >
          View/Close comments
        </button>
        <Comments viewComments={viewComments} />
      </section>
    );
  }
}

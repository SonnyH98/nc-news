import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById, increaseVotesByArticleId, decreaseVotesByArticleId } from './api-calls';
import Comments from './Comments';



export default function SpecificArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [err, setErr] = useState(null);
  const [voteCount, setVoteCount] = useState(0)
  const [viewComments, setViewComments] = useState(true)



  useEffect(() => {
    fetchArticleById(article_id).then((articleInfo) => {
      setArticle(articleInfo);
    });
  }, []);



  if(err) {return <p>{err}</p>}

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
      <button onClick={() => {
        setVoteCount((currCount) => currCount + 1)
        increaseVotesByArticleId(article.article_id).catch((err)=> {
            setVoteCount((currCount) => currCount - 1);
            setErr('Something went wrong, please try again')
        })
      }}>Increase the votes</button>
      <button onClick={() => {
        setVoteCount((currCount) => currCount -1)
        decreaseVotesByArticleId(article.article_id).catch((err)=> {
            setVoteCount((currCount) => currCount + 1);
            setErr('Something went wrong, please try again')
        })
      }}>Decrease the votes</button>
      <p>Comment Count: {article.comment_count}</p>
      <button onClick={() => {
        setViewComments((currBool) => {
            return !currBool
        })
      }}>View/Close comments</button>
      <Comments viewComments={viewComments} />
    </section>
  );
}




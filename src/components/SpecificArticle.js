import { ListItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from './api-calls';

export default function SpecificArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    fetchArticleById(article_id).then((articleInfo) => {
      setArticle(articleInfo);
    });
  }, []);
  return (
    <section>
      <p>-----------------------------------</p>
      <h1>NC-NEWS Article</h1>
      <p>Date: {article.created_at}</p>
      <h2>
        {article.title} by {article.author}
      </h2>
      <p>{article.body}</p>
      <p>Comment Count: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
    </section>
  );
}

import React from 'react';
import { useEffect } from 'react';
import { fetchArticles } from './api-calls';
import styles from './Articles.module.css';

export default function Articles({ articles, setArticles }) {
  useEffect(() => {
    fetchArticles().then((articleInfo) => {
      setArticles(articleInfo);
    });
  }, []);
  console.log(articles);
  return (
    <section>
      <ul>
        {articles.map((item) => {
          return (
            <li key={item.title}>
              <p>{item.title}</p>
              <p>Topic : {item.topic}</p>
              <p>Comment Count : {item.comment_count}</p>
              <p>Votes : {item.votes}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

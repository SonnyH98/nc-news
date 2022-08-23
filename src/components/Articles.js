import React from 'react';
import { useEffect, useState } from 'react';
import { fetchArticles, fetchTopics } from './api-calls';
import styles from './Articles.module.css';
import { Link } from 'react-router-dom';

export default function Articles({
  articles,
  setArticles,
  topics,
  setTopics,
  currentTopic,
  setCurrentTopic,
}) {
  useEffect(() => {
    fetchArticles().then((articleInfo) => {
      setArticles(articleInfo);
    });

    fetchTopics().then((topicsInfo) => {
      setTopics(topicsInfo);
    });
  }, []);
  return (
    <section>
      <h2>Select articles by specific topic</h2>
      <button>
        <Link to={`/articles/all`}>All</Link>
      </button>
      {topics.map((item) => {
        return (
          <button
            key={item.slug}
            onClick={() => {
              setCurrentTopic(item.slug);
            }}
          >
            <Link to={`/articles/topic`}>{item.slug} | </Link>
          </button>
        );
      })}
      <ul>
        {articles.map((item) => {
          return (
            <li key={item.title}>
              <p>Date : {item.created_at}</p>
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

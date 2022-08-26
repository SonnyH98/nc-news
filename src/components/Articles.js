import React from 'react';
import { useEffect, useState, useContext } from 'react';
import {
  fetchArticles,
  fetchTopics,
  fetchArticlesByTopic,
  fetchArticlesWithQueries,
} from './api-calls';
import styles from './Articles.module.css';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import ErrorPage from './ErrorPage';

export default function Articles() {
  const { err, setErr } = useContext(UserContext);

  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  let { topic } = useParams();

  useEffect(() => {
    if (topic === 'all') {
      fetchArticles()
        .then((articleInfo) => {
          setArticles(articleInfo);
        })
        .catch((err) => {
          setErr({ err });
        });
    } else {
      fetchArticlesByTopic(topic)
        .then((articleInfo) => {
          setArticles(articleInfo);
        })
        .catch((err) => {
          setErr({ err });
        });
    }

    fetchTopics().then((topicsInfo) => {
      setTopics(topicsInfo);
    });
  }, [topic]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const sort_by = event.target[0].value;
    const order_by = event.target[1].value;
    if (topic === 'all') {
      topic = '';
    }
    fetchArticlesWithQueries(topic, sort_by, order_by)
      .then((articleInfo) => {
        setArticles(articleInfo);
      })
      .catch((err) => {
        
        setErr({ err });
      });
  };

  if (err) {
    return <ErrorPage />;
  } else {
    return (
      <section>
        <h2>Select articles by specific topic</h2>
        <button>
          <Link to={`/articles/all`}>All</Link>
        </button>
        {topics.map((item) => {
          return (
            <button key={item.slug}>
              <Link to={`/articles/${item.slug}`}>{item.slug} | </Link>
            </button>
          );
        })}
        <p>
          By default the articles are sorted by date and in descending order,
          please use the drop-down boxes below if you wish to change this.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='sort-by'>Sort By:</label>

          <select name='sort-by' id='sort-by' defaultValue={'created_at'}>
            <option value='created_at'>Date</option>
            <option value='comment_count'>Comment Count</option>
            <option value='votes'>Votes</option>
            <option value='author'>Author</option>
          </select>
          <br />
          <label htmlFor='order-by'>Order-by:</label>

          <select name='order-by' id='order-by' defaultValue={'DESC'}>
            <option value='ASC'>Ascending</option>
            <option value='DESC'>Descending</option>
          </select>
          <br />
          <button>Submit choices</button>
        </form>
        <ul>
          {articles.map((item) => {
            return (
              <li key={item.title}>
                <p>Date : {item.created_at}</p>
                <Link
                  className='specific-article'
                  to={`/article/${item.article_id}`}
                >
                  <p>{item.title}</p>
                </Link>
                <p>Author: {item.author}</p>
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
}

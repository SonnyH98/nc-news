const axios = require('axios');

export const fetchArticles = () => {
  const query = `https://backend-project-sonny.herokuapp.com/api/articles`;
  return axios.get(query).then((res) => {
    return res.data.articles;
  });
};

export const fetchTopics = () => {
  const query = `https://backend-project-sonny.herokuapp.com/api/topics`;
  return axios.get(query).then((res) => {
    return res.data;
  });
};

export const fetchArticlesByTopic = (topic) => {
  const query = `https://backend-project-sonny.herokuapp.com/api/articles?topic=${topic}`;
  return axios.get(query).then((res) => {
    return res.data.articles;
  });
};

export const fetchArticleById = (article_id) => {
  const query = `https://backend-project-sonny.herokuapp.com/api/articles/${article_id}`;
  return axios.get(query).then((res) => {
    console.log(res.data);
    return res.data.article;
  });
};

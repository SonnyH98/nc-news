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
    return res.data.article;
  });
};

export const increaseVotesByArticleId =(article_id) => {
  const query = `https://backend-project-sonny.herokuapp.com/api/articles/${article_id}`;
  return axios.patch(query, {inc_votes : '1'}).then((res) => {
    return res.data.article;
  });
}

export const decreaseVotesByArticleId =(article_id) => {
  const query = `https://backend-project-sonny.herokuapp.com/api/articles/${article_id}`;
  return axios.patch(query, {inc_votes : '-1'}).then((res) => {
    return res.data.article;
  });
}

export const fetchCommentsByArticleId = (article_id) => {
  const query = `https://backend-project-sonny.herokuapp.com/api/articles/${article_id}/comments`
  return axios.get(query).then((res) => {
    return res.data.comments;
  });
}

export const postCommentByArticleId = (article_id, newComment) => {
  const query = `https://backend-project-sonny.herokuapp.com/api/articles/${article_id}/comments`
  return axios.post(query, newComment).then((res) => {
    return res.data.comments;
  })
}

export const fetchArticlesWithQueries = (topic, sort_by, order_by) => {
  const query = `https://backend-project-sonny.herokuapp.com/api/articles?topic=${topic}&sort_by=${sort_by}&order=${order_by}`;
  return axios.get(query).then((res) => {
    return res.data.articles;
  });
};

export const fetchUsers = () => {
  const query = `https://backend-project-sonny.herokuapp.com/api/users`;
  return axios.get(query).then((res) => {
    return res.data.users;
  });
};

export const deleteComment = (comment_id) => {
  const query = `https://backend-project-sonny.herokuapp.com/api/comments/${comment_id}`;
  return axios.delete(query).then((res) => {
    console.log(res.data);
    return res.data;
  });
}
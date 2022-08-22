const axios = require('axios');

export const fetchArticles = () => {
  const query = `https://backend-project-sonny.herokuapp.com/api/articles`;
  return axios.get(query).then((res) => {
    console.log();
    return res.data.articles;
  });
};

import { Link } from 'react-router-dom';

export default function FilteredArticles({
  articles,
  setArticles,
  topics,
  currentTopic,
  setCurrentTopic,
}) {
  console.log(currentTopic);
  const filteredArticles = articles.filter((article) => {
    return article.topic === currentTopic;
  });
  console.log(filteredArticles);
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
        {filteredArticles.map((item) => {
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

import { useEffect, useState } from 'react';
import { fetchCommentsByArticleId } from './api-calls';
import { useParams } from 'react-router-dom';

export default function Comments({ viewComments }) {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentInfo) => {
      console.log(commentInfo);
      setComments(commentInfo);
      console.log(comments);
    });
  }, []);

  if (viewComments) {
    return (
      <section>
        <ul>
          {comments.map((comment) => {
            return(<li key={comment.comment_id}>
              <p>Author: {comment.author}</p>
              <p>Comment: {comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </li>);
          })}
        </ul>
      </section>
    );
  }
}

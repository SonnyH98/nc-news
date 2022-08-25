import { useEffect, useState } from 'react';
import { fetchCommentsByArticleId, postCommentByArticleId } from './api-calls';
import { useParams } from 'react-router-dom';


export default function Comments({ viewComments }) {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [bool,setBool] = useState(true)
  const [newCommentMessage, setNewCommentMessage] = useState(null);
  

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentInfo) => {
      setComments(commentInfo);

    })
}, [bool]);

//sort the comments in descending order
comments.sort((a,b) => b.comment_id - a.comment_id)


  const handleSubmit = (event) => {
    event.preventDefault()
    const username = event.target[0].value;
    const body = event.target[1].value
    const newComment = {
        username, 
        body
    }
    postCommentByArticleId(article_id, newComment)
    .then((res) => {
      setNewCommentMessage("Your comment has been uploaded. Press wait for the comment to show.")
        setBool((currBool) => {
            return !currBool
        })
    }).catch((err) => {
      setNewCommentMessage('Something went wrong, please try again.')
    })
  }

  let message = ''
  if(newCommentMessage){
    message = newCommentMessage
  }

  if (viewComments) {
    return (
      <section>
        <form onSubmit={handleSubmit} action='/' method='POST'>
            <h3>Add a comment</h3>
          <label htmlFor='comment-name'>Name: </label>
          <input className='input' type='text' name='commentName' id='comment-name' />
          <br/> <br/>
          <label htmlFor='comment-name'>Comment: </label>
          <textarea  className='input' type='text' name='commentName' id='comment-name' />
          <br />
          <button id='submit-button'>Add to comments</button>
        </form>
        {message}
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p>Name: {comment.author}</p>
                <p>Comment: {comment.body}</p>
                <p>Votes: {comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}


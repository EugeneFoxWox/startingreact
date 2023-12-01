
import './App.css';

import './components/comment/Comment.css';
import Comment from './components/comment/Comment';
import { useState } from 'react'
import Sender from './components/sender/Sender';
import { defaultComments } from './constants/comments';
import { avatars } from './constants/avatars';
import { nname } from './constants/siteNames';
import { getRandomIntInclusive } from './helpers/getRandomIntInclusive';

function App() {
 

  const [comments, setComments] = useState(
    defaultComments
  );



  const handleClickAddComment = function (name, content) {
    const randomAvatarIndex = getRandomIntInclusive(0, avatars.length - 1)


    const id = Date.now()
    const randomNameIndex = getRandomIntInclusive(0, siteNames.length - 1)

    setComments([{ id, name, content, avatar: avatars[randomAvatarIndex] }, ...comments])


  }

  const handleClickDeleteComment = function (id) {
    setComments(comments.filter((comment) => comment.id !== id));
  }

  const handleClickLike = function (id) {
    setComments(comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, youLike: !comment.youLike }

      }
      return comment;
    }));
  }


  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Привет Мир, я - {nname}</h1>
        </header>

        <Sender addComment={handleClickAddComment} />
        
        {comments.map((comment) =>
          <Comment
            key={comment.id}
            id={comment.id}
            name={comment.name}
            content={comment.content}
            youLike={comment.youLike}
            deleteClick={handleClickDeleteComment}
            likeClick={handleClickLike}
            avatar={comment.avatar}
          />
        )}
      </div>

    </div>
  );
}


export default App;

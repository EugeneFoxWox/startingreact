
import './App.css';

import './components/comment/Comment.css';
import Comment from './components/comment/Comment';
import { useState } from 'react'
import Sender from './components/sender/Sender';
import { avatars } from './constants/avatars';
import { getRandomIntInclusive } from './helpers/getRandomIntInclusive';

function App() {
  let nname = "Компьютер"

  const [comments, setComments] = useState(
    [
      { id: 1, name: "React pro", content: "Bezdablfun", youLike: false, avatar: avatars[0] },
      { id: 2, name: "Понять", content: "Простить", youLike: false, avatar: avatars[1] },
      { id: 3, name: "дабл", content: "фани", youLike: false, avatar: avatars[2] },
      { id: 4, name: "резня", content: "Простить", youLike: false, avatar: avatars[3] },
    ]


  );



  const handleClickAddComment = function (name, content) {
    const randomAvatarIndex = getRandomIntInclusive(0, avatars.length - 1)

    console.log(randomAvatarIndex)

    const id = Date.now()

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

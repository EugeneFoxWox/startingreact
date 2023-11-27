
import './App.css';
import './components/sender/Sender.css';
import './components/comment/Comment.css';

import Comment from './components/comment/Comment';
import {useState} from 'react'
import Sender from './components/sender/Sender';

function App() {
  let nname = "Компьютер"
 
  const [comments, setComments] = useState(
    [
      { name: "React pro", content: "Bezdablfun" },
      { name: "Понять", content: "Простить" },
      { name: "дабл", content: "фани" }, 
      { name: "резня", content: "Простить" }, 
    ]
  
  );


  const handleClickAddComment = function(name, content) {
    setComments([{name, content},...comments ])

  }

  
  

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Привет Мир, я - {nname}</h1>
        </header>
        
        <Sender addComment={handleClickAddComment}/>
        {comments.map((comment) => 
            <Comment name={comment.name} content={comment.content}/>
        )}
      </div>
      
    </div>
  );
}


export default App;

import { useState} from 'react'

function Sender({addComment}) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
      
  const handleChangeName = function (event) {
        setName(event.target.value)
  }
      
  const handleChangeContent = function(event){
        setContent(event.target.value)
  }
  const handleClick = function(event){
        addComment(name, content)
        setName("") 
        setContent("")
  }

  return (
    <>
      <input className='name' type="text" value={name} onChange={handleChangeName} />
      <input className='content' type="text" value={content} onChange={handleChangeContent} />
      <button onClick={handleClick}>SEND MEEEE</button>

    </>
  );
}

export default Sender;
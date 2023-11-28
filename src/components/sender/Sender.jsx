import { useState } from 'react'
import './Sender.css';

function Sender({ addComment }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleChangeName = function (event) {
    setName(event.target.value)
  }

  const handleChangeContent = function (event) {
    setContent(event.target.value)
  }
  const handleSubmitForm = function (event) {
    event.preventDefault()
    if (name === "") {
      return alert("E,L@н имя то напиши")
    }
    if (content === "") {
      return alert("Ну ты ля попуск без мнения")
    }
    addComment(name, content)
    setName("")
    setContent("")
  }

  return (
    <form className="sender" onSubmit={handleSubmitForm}>
      <input placeholder="Ваше имя" className='name' type="text" value={name} onChange={handleChangeName} />
      <input placeholder="Ваше мнение о нас" className='content' type="text" value={content} onChange={handleChangeContent} />
      <button>Отправить</button>
    </form>
  );
}

export default Sender;
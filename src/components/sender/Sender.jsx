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
      return alert("Напишите имя")
    }
    if (content === "") {
      return alert("Не забудьте мнение о нас!")
    }
    addComment(name, content)
    setName("")
    setContent("")
  }

  return (
    <form className="sender" onSubmit={handleSubmitForm}>
      <div className='inputs'>
        <input title='ИМЯ' placeholder="Ваше имя" className='name' type="text" value={name} onChange={handleChangeName} />
        <textarea maxLength="300" title='Тут мнение' placeholder="Ваше мнение о нас" className='content' type="text" value={content} onChange={handleChangeContent} />
      </div>
      <button>Отправить</button>
    </form>
  );
}

export default Sender;
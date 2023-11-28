function Comment({id, name, content, youLike, deleteClick, likeClick, avatar}) {


    return(
        <div className="block-comment">
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <div className="text-content">
                <h2 className="name">{name}</h2>
                <p className="content">{content}</p>
            </div>
            <div>
                <button className="delete-button" onClick={() => deleteClick(id)}>Удалить</button>
            </div>
            <div className="classy">
                <button className="button-like" onClick={() => likeClick(id)}>
                    {youLike? "Забайтили на класс": "Поставь класс" }
                </button>

            </div>
        </div>
    );
}

export  default Comment;
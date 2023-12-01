function Comment({ id, name, content, youLike, deleteClick, likeClick, avatar }) {

    //const buttonLikeClass = `button-like ${youLike ? "button-like-active" : ""}`
    const buttonLikeClass = youLike ? ["button-like", "button-like-active"].join(' ') : "button-like"

    return (
        <div className="block-comment">
            <div className="avatar">
                <img src={avatar} alt="AVA" />
            </div>
            <div className="text-content">
                <h2 className="name">{name}</h2>
                <p className="content">{content}</p>
            </div>
            <div className="buttons">
                <div>
                    <button className="delete-button" onClick={() => deleteClick(id)}>Удалить</button>
                </div>
                <div className="classy">
                    <button className={buttonLikeClass} onClick={() => likeClick(id)}>
                        {youLike ? "Забайтили на класс" : "Поставь класс"}
                    </button>

                </div>
            </div>

        </div>
    );
}

export default Comment;
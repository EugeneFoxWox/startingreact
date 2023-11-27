function Comment({name, content}) {
    return(
        <div className="block-comment">
            <div className="avatar">
                <img src="https://avatars.githubusercontent.com/u/98116130?v=4" alt="" />
            </div>
            <div className="text-content">
                <h2 className="name">{name}</h2>
                <p className="content">{content}</p>
            </div>
        </div>
    );
}

export  default Comment;
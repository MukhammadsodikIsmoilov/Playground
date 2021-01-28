import React from 'react'

const Post = (props) => {
    const {userId, id, title, body} = props.post;
    return (
        <div className="post">
            <h3>User: {userId}</h3>
            <p>comment: <span>{id}</span></p>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Post

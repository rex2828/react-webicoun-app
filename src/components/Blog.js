import React from 'react'
import classes from './Blog.module.css';
const Blog = (props) => {
    return (
        <div className={classes.card}>
            <img src="/meditation.png" alt="Avatar"></img>
            <div className={classes.container}>
                <h4><b>{props.title}</b></h4>
                <p>{props.description}</p>
                <button onClick={() => { props.selectBlogHandler(props.id) }}>Read more</button>
            </div>
        </div>
    )
}

export default Blog;
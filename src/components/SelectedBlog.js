import React from 'react'

const SelectedBlog = (props) => {
    return (
        <div>
            <img src='/meditation.png' alt='img'></img>
            <h1>{props.selectedblog.title}</h1>
            <p>{props.selectedblog.description}</p>
        </div>
    )
}

export default SelectedBlog
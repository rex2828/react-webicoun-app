import React, { useState } from 'react';
import Blog from './Blog';
import classes from './Blogs.module.css';
import SelectedBlog from './SelectedBlog';
const blogsArray = [
    {
        id: "1",
        title: "How to meditate at Home",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
    },
    {
        id: "2",
        title: "Blog 2",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
    },
    {
        id: "3",
        title: "How to meditate at Home",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
    },
    {
        id: "4",
        title: "Blog 2",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
    }, {
        id: "5",
        title: "How to meditate at Home",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
    },
    {
        id: "6",
        title: "Blog 2",
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
    },

]

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    function selectBlogHandler(blogid) {
        blogsArray.forEach((blog) => {
            if (blog.id === blogid) {
                setSelectedBlog(blog)
            }
        })
    }

    const blogList = blogsArray.map((blog) => {
        return <Blog key={blog.id} id={blog.id} title={blog.title} description={blog.description} selectBlogHandler={selectBlogHandler} />
    })

    return (
        <React.Fragment>
            <div className={classes.blogscontainer}>
                {!selectedBlog && blogList}
                {selectedBlog && <SelectedBlog selectedblog={selectedBlog} />}
            </div>
        </React.Fragment>

    )
}

export default Blogs
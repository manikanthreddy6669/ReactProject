import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, id, student, image, children }) => {
    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <div className="post-meta">
                <h3><span>{id}</span> | <span>{student}</span></h3>
            </div>
            {image && <img src={image} alt={title} className="post-image" />}
            <div className="post-content">
                {children}
            </div>
            <hr />
        </div>
    );
};

export default BlogPost;
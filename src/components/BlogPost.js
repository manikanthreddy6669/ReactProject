import React from 'react';
import './BlogPost.css';
function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <h2>{post.id}</h2>
      <h2>{post.studentname}</h2>
      {post.image && <img src={post.image} alt={post.title} className="post-image" />}
    </div>
  );
}
export default BlogPost;
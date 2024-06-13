import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import './Blog.css';
function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchedPosts = [
      { id: 500224276, title: 'Masters',studentname:'Manikanth Reddy',image:"https://loyalistcollege.com/wp-content/uploads/2021/07/PXL_20210720_192142015-700x525.jpg" },
      { id: 999999, title: 'Bachelors',studentname:'Manikanth Reddy', image:"https://images.shiksha.com/mediadata/images/articles/1590155383php9JlZBw.jpeg" },
    ];
    setPosts(fetchedPosts);
  }, []);

  return (
    <div className="blog">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;
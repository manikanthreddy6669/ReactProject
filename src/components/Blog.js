
import React from 'react';
import BlogPost from './BlogPost';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog">
            <BlogPost
                title="Masters"
                id="500224276"
                student="Manikanth Reddy"
                image="https://loyalistcollege.com/wp-content/uploads/2021/07/PXL_20210720_192142015-700x525.jpg"

            >
                <p>Loyalist College, Toronto</p>
            </BlogPost>
            <BlogPost
                title="Bachelors"
                id="999999"
                student="Manikanth Reddy"
                image="https://images.shiksha.com/mediadata/images/articles/1590155383php9JlZBw.jpeg"
            >
                <p>Anurag group of Institutions</p>
            </BlogPost>
            {/* Add more BlogPost components as needed */}
        </div>
    );
};

export default Blog;
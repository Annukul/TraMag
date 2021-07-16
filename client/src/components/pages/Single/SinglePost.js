import React from 'react';

import './single.css';

import Nav from '../../parts/nav';
import Post from './pieces/post';

const SinglePost = () => {
    return (
        <div className="single_post_container">
            <Nav />
            <Post />
        </div>
    )
}

export default SinglePost;

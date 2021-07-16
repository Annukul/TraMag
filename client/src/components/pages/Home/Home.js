import React from 'react';

import Nav from '../../parts/nav';
import LpPost from './pieces/lpPosts';
import VideoPost from './pieces/videoPost';
import Travel from './pieces/travel';
import Sub from './pieces/sub';
import Footer from '../../parts/footer';

const Home = () => {
    return (
        <>
            <Nav />
            <div className="content">
                <LpPost />
                <VideoPost />
                <Travel />
                <Sub />
                <Footer />
            </div>
        </>
    )
}

export default Home;

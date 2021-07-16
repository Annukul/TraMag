import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../home.css';
import aurora from '../../../../media/aurora.jpg';

const LpPosts = () => {
    const [travelPost, setTravelPost] = useState([]);

    const dl = "http://localhost:5000/images/";

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/post/?cat=Travel");
            setTravelPost(res.data);
        }
        fetchPost();
    }, []);

    return (
        <div className="lp_content" style={{ backgroundImage: `url(${aurora})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <div className="lp_head">
                <h1>Travel</h1>
                <hr className="lp_head_hr" />
            </div>
            <div className="lp_posts">
                <div className="lp_posts_left">
                    <div className="lp_posts_left_head">
                        <h2>Today's Picks</h2>
                    </div>
                    <div className="lp_posts_left_content">
                        {travelPost.map((post) => {
                            const { title, category, image, _id } = post;
                            return (
                                <div className="lp_posts_left_post" key={_id}>
                                    <div className="left_post_img">
                                        <img src={dl + image} alt="post" />
                                    </div>
                                    <div className="left_post_txt">
                                        <small>{category}</small>
                                        <Link style={{ "color": "white" }} to={`/view/${_id}`}><h4>{title}</h4></Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="lp_posts_right">
                    <div className="lp_posts_right_top">
                        <div className="lp_posts_right_post">
                            <div className="right_post_img">
                                <img src="https://3.bp.blogspot.com/_clW92NzmFvI/TR81YyayWsI/AAAAAAAAEb8/ITQ4ZHRjXwI/s1600/mountain-snowboarding-wallpaper.jpg" alt="post" />
                            </div>
                            <div className="right_post_txt">
                                <small>Outdoors</small>
                                <h4>An obscure lizard reveals how zoos may indirectly play a role.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="lp_posts_right_bottom">
                        <div className="bottom_postcard">
                            <div className="bottom_postcard_img">
                                <img src="https://awesomeocean.com/wp-content/uploads/2016/02/Scuba-Diving-Sabah.jpg" alt="post" />
                            </div>
                            <div className="bottom_postcard_text">
                                <small>Outdoors</small>
                                <h4>An obscure lizard reveals how zoos may indirectly play a role.</h4>
                            </div>
                        </div>

                        <div className="bottom_postcard">
                            <div className="bottom_postcard_img">
                                <img src="https://awesomeocean.com/wp-content/uploads/2016/02/Scuba-Diving-Sabah.jpg" alt="post" />
                            </div>
                            <div className="bottom_postcard_text">
                                <small>Outdoors</small>
                                <h4>An obscure lizard reveals how zoos may indirectly play a role.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LpPosts;

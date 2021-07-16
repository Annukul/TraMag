import React, { useState, useEffect } from 'react';

import '../single.css';

import Space from '../../../../media/space.jpg';
import Sub from '../../Home/pieces/sub';
import Footer from '../../../parts/footer';
import axios from 'axios';

import { useLocation } from "react-router-dom";



const Post = () => {
    const PF = "http://localhost:5000/images/";
    const [post, setPost] = useState([]);
    const location = useLocation();
    const id = location.pathname.split("/")[2];


    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/post/" + id);
            setPost(res.data);
        }
        fetchPost();
    }, [id]);

    const deletePost = async () => {
        await axios.delete("/post/" + id);
        window.location.replace("/");
    }

    return (
        <div className="single_post">
            <div className="single_post_head">
                <div className="single_post_head_img">
                    <img src={PF + post.image} alt="Post image" />
                </div>
                <div className="single_post_head_text">
                    <div className="single_post_small_div">
                        <small>{post.category}</small>
                    </div>
                    <div className="single_post_h1_div">
                        <h1>{post.title}</h1>
                        <p>{post.excrept}</p>
                    </div>
                </div>
            </div>

            <div className="single_post_text">
                <div className="single_post_text_auth">
                    <p>By <strong>Andrew</strong></p>
                    <p>
                        Published June 17, 2021 • 20 min read
                    </p>
                </div>
                <div className="single_post_text_story">
                    <p>{post.body}</p>
                    <div className="post_btns">
                        <button className="delete" onClick={deletePost}>Delete</button>
                    </div>
                </div>

                <div className="single_post_author_info">
                    <img src="https://independent.media.clients.ellingtoncms.com/img/photos/2018/09/10/john_doe_-_jim_herrington_t958.jpg?fef15e12b784e9bbb22bf3f2924819218cda3d1a" alt="Author profile" />
                    <p>
                        But in the age of climate change, L.A.’s sunshine is no longer an unqualified
                        boon. By mid-century, absent major international efforts to rein in carbon
                        emissions, L.A. is expected to experience 22 days a year above 95 degrees
                        Fahrenheit, more than triple the current number. The suburbs in the San Fernando
                        Valley may see more than 90 days—a full quarter of the year. Heat already increases
                        the risk of death in Los Angeles, even when it isn’t the proximate cause. During a
                        short heat wave, the death rate from all causes rises by 8 percent above normal.
                        After four or five days.
                    </p>
                </div>

                <div className="single_post_share">
                    <a className="twitter">Twitter</a>
                    <a className="facebook">Facebook</a>
                    <a className="instagram">Instagram</a>
                    <a className="tumblr">Tumblar</a>
                </div>
            </div>
            <Sub />
            <Footer />
        </div>
    )
}

export default Post;

import React from 'react';

import video from '../../../../media/video.mp4';

const videoPost = () => {
    return (
        <div id="videoDiv">
            <video id="video1" preload autoplay="autoplay" muted playsinline loop="loop" >
                <source src={video} type="video/mp4" />
            </video>
            <div id="videoMessage" class="styling">
                <div className="videotext">
                    <h1>INTO THE WILD</h1>
                    <h2>Dive right into the wildrness</h2>
                    <p>
                        It is not so much for its beauty that the forest makes a claim
                        upon men’s hearts, as for that subtle something, that quality
                        of air that emanation from old trees, that so wonderfully changes
                        and renews a weary spirit.
                    </p>
                    <button className="videobtn">Dive in?</button>
                </div>
            </div>
        </div>
    )
}

export default videoPost;

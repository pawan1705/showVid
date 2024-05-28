import React from 'react'
import './PlayVideo.css';
import {assets} from '../../assets/assets'
const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={assets.video} controls autoPlay muted></video>
      <h3>Title of video</h3>
      <div className="play-video-info">
        <p>1234 Views &bull; 2days ago</p>
        <div>
          <span><img src={assets.like} alt="" />123</span>
          <span><img src={assets.dislike} alt="" />12</span>
          <span><img src={assets.share} alt="" />share</span>
          <span><img src={assets.save} alt="" />save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={assets.kejri} alt="" />
        <div>
          <p>Channel name</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribed</button>
      </div>
      <div className="video-description">
        <p>Channel that makes learn easy.</p>
        <p>Subscribe to learn more Tutorials on web development.</p>
        <hr />
        <h4>133 Comments</h4>
        <div className="comments">
          <img src={assets.user_profile} alt="" />
          <div>
            <h3>User/channel Name <span>1 day ago</span></h3>
            <p>matter that user commented</p>
            <div className="comment-action">
              <img src={assets.like} alt="" /><span>123</span>
              <img src={assets.dislike} alt="" /><span>44</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
import React, { useEffect, useState } from 'react'
import './PlayVideo.css';
import {assets} from '../../assets/assets'
import moment from 'moment'
import { API_KEY,value_converter } from '../../../data';
const PlayVideo = ({videoId}) => {
  const [apiData,setApiData]=useState(null);

  const fetchVideoData=async()=>{
    //fetching videos data
    const videoDetail_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}|&key=${API_KEY}`;
    await fetch(videoDetail_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))
    console.log("data",apiData);
  }

  useEffect(()=>{
      fetchVideoData();
  },[])
  return (
    <div className='play-video'>
      {/* <video src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} controls autoPlay muted></video> */}
      
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
      <h3>{apiData.snippet.title}</h3>
      <div className="play-video-info">
        <p>{value_converter(apiData.statistics.viewCount)} Views &bull; {moment(apiData.snippet.publishedAt).fromNow()}</p>
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
// import React from 'react'
import './Sidebar.css';
import {assets } from '../../assets/assets';
const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={assets.home} alt="" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={assets.game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={assets.automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={assets.sports} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={assets.entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={assets.tech} alt="" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={assets.music} alt="" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={assets.blogs} alt="" />
          <p>Blogs</p>
          </div>
          <div className="side-link">
          <img src={assets.news} alt="" />
          <p>News</p>
        </div>
        <hr />
        </div>

        
<div className="subscribed-list">
          <h3>Subscribed</h3>
          <div className="side-link">
            <img src={assets.tseries} alt="" />
            <p>T-Series</p>
          </div>
          <div className="side-link">
            <img src={assets.setindia} alt="" />
            <p>Set-India tv</p>
          </div>
          <div className="side-link">
            <img src={assets.goldmines} alt="" />
            <p>Goldmines</p>
          </div>
          <div className="side-link">
            <img src={assets.zeemusic} alt="" />
            <p>Zee Music Company</p>
          </div>
          <div className="side-link">
            <img src={assets.sonysab} alt="" />
            <p>Sony SAB</p>
          </div>
          <div className="side-link">
            <img src={assets.zeetv} alt="" />
            <p>Zee</p>
          </div>
        </div>

        </div>
        
      
      
   
  )
}

export default Sidebar
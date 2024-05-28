import React from 'react'
import './Navbar.css';
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className='menu-icon' src={assets.menu} alt=""  onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
       <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link> 
      </div>
      <div className="flex-middle">
        <div className="search-box flex-div">
        <input type="text " placeholder='search' />
        <img src={assets.search} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={assets.upload} alt="" />
        <img src={assets.more} alt="" />
        <img src={assets.notification} alt="" />
        <img src={assets.me} alt="" className='user-icon' />
      </div>
    </nav>
  )
}

export default Navbar
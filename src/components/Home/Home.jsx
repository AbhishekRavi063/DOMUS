import React from 'react'
import './Home.css'
import {Carousel} from '3d-react-carousal';
import Menu from '../Menu';
import { Link, NavLink } from 'react-router-dom';
import kitchen from '../../assets/kitchen.jpg'
import bedroom from '../../assets/bedroom.jpg'
import living from '../../assets/living.jpg'
import balcony from '../../assets/balcony.jpg'
import head from '../../assets/head.jpg'



function Home() {
  let slides = [
     <div className="rm" ><h2 className="chh">BBQ DAY</h2> <div className="on"></div></div>,
    <div className="rm"><h2 className="chh">DINNER</h2> <div className="on"></div></div>,
    <div className="rm"><h2 className="chh">CINEMA</h2> <div className="on"></div></div>,
    <div className="rm"><h2 className="chh">WINTER</h2> <div className="on"></div></div>,
    <div className="rm"><h2 className="chh">SUMMER</h2> <div className="on"></div></div>,
];
let rooms = [
  <Link to={"/bedroom"}><div className="rimg"  style={{backgroundImage: `url(${bedroom})`}}><h2 className='rit'>Bedroom</h2></div></Link>,
  <Link to={"/kitchenroom"}><div className="rimg"  style={{backgroundImage: `url(${kitchen})`}}><h2 className='rit'>Kitchen</h2></div></Link>,
  <Link to={"/livingroom"}> <div className="rimg"  style={{backgroundImage: `url(${living})`}} ><h2 className='rit'>Living Room</h2></div></Link>,
  <div className="rimg" style={{backgroundImage: `url(${balcony})`}} ><h2 className='rit'>Balcony</h2></div>,
];

let quick = [
  <div className="rm"><h2 className="chh">SLEEP</h2> <div className="on"></div></div>,
  <div className="rm"><h2 className="chh">ALARM SYSTEM</h2> <div className="on"></div></div>,
  <div className="rm"><h2 className="chh">LOCK</h2> <div className="on"></div></div>,
 
];

  const callback = function(index){
    console.log("callback",index);
}
  return (
    <div className='hm'>
      <Menu/>
      <div className="head" style={{backgroundImage: `url(${head})`}} >
      <div className="hl">
      <h2 className="h">HELLO,</h2>
      <h1 className="userr">David</h1>

      
      </div>
      <div className="rh">
        <h2 className="hk">Home-Kerala</h2>
      </div>
      </div>

      <div className="custom">
      <h2 className="cus"> MODE</h2>
      <Carousel slides={slides} autoplay={false} interval={3000} onSlideChange={callback} />
      </div>
    
      <div className="rooms">
      <h2 className="cus">ROOMS</h2>
      <Carousel slides={rooms} autoplay={false} interval={3000} onSlideChange={callback} />
      </div>

      <div className="quick">
      <h2 className="cus">QUICK ACTIONS</h2>
      <Carousel slides={quick} autoplay={false} interval={3000} onSlideChange={callback} />

      </div>

    </div>
  )
}

export default Home

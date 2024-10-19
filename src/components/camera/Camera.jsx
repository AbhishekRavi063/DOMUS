import React from 'react'
import './Camera.css'
import Menu from '../Menu'
import Kitchen from '../../assets/kitchen.jpg'
import {Carousel} from '3d-react-carousal';


function Camera() {
  let slides = [
    <div className="rmc"><h1 className="chc">camera 1</h1> <div className="on"></div></div>,
    <div className="rmc"><h1 className="chc">camera 2</h1><div className="on"></div></div>,
    <div className="rmc"><h1 className="chc">camera  3</h1><div className="on"></div></div>,
    <div className="rmc"><h1 className="chc">camera  4</h1><div className="on"></div></div>,];

    const callback = function(index){
      console.log("callback",index);
  }

  return (
    <div className='cmain'>
        
        <Menu/>
        <h1 className="ch">CAMERAS</h1>
        <img src={Kitchen} alt="" className="chi" />
        <h2 className="ch2">Devices</h2>

        <div className="cr">
      <Carousel slides={slides} autoplay={false} interval={2000} onSlideChange={callback}   />
      </div>
      
    </div>
  )
}

export default Camera

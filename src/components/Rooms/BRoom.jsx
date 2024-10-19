import React from 'react'
import './LRoom.css'
import {Carousel} from '3d-react-carousal';
import bedroom from '../../assets/bedr.jpg'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Menu from '../Menu';

function valuetext(value) {
    return value + "°C";
  }

function BRoom() {
    let slides = [
        <div className="rm"><h1 className="chh">AC</h1> <div className="on"></div></div>,
        <div className="rm"><h1 className="chh">Heater</h1><div className="on"></div></div>,
        <div className="rm"><h1 className="chh">Speakers</h1><div className="on"></div></div>,
        <div className="rm"><h1 className="chh">Fan</h1><div className="on"></div></div>,];
    
        const callback = function(index){
            console.log("callback",index);
        }
  return (
    <div className='rrmain'>
      <Menu/>
        <div className="rrimg" style={{backgroundImage: `url(${bedroom})`}}>
        <h2 className='rt'>BED ROOM</h2>
             
        </div>

        <div className="comp">
        <div className="ic">
      <h3 className="c">Main Lights</h3>
      <div className="on"></div>
      </div>
      <div className="b">
      <h3 className="rc">Intensity</h3>
      <Box sx={{ width: 230 }}>
      <Slider
        
        defaultValue={30}
        getAriaValueText={valuetext}
        color='success'
         aria-label="Default"
         valueLabelDisplay="auto"
      />
    </Box>

      </div>
      
      </div>
      <div className="outer">
      <div className="comp">
        <div className="ic">
      <h3 className="c">Counter Lights</h3>
      <div className="on"></div>
      </div>
      <div className="b">
      <h3 className="rc">Intensity</h3>
      <Box sx={{ width: 230 }}>
      <Slider
        
        defaultValue={30}
        getAriaValueText={valuetext}
        color='success'
         aria-label="Default"
         valueLabelDisplay="auto"
      />
    </Box>

      </div>
      </div>
      </div>

      <div className="cr">
      <Carousel slides={slides} autoplay={false} interval={2000} onSlideChange={callback}   />
      </div>
      <button className='add'>+ Add Device </button>
      
    </div>
  )
}

export default BRoom

import React from 'react'
import './Alarm.css'
import Menu from '../Menu'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {Carousel} from '3d-react-carousal';


function valuetext(value) {
    return value + "°C";
  }

function Alarm() {
  let slides = [
    <div className="rm"><h1 className="chh">Backyard</h1> <div className="on"></div></div>,
    <div className="rm"><h1 className="chh">Kitchen</h1><div className="on"></div></div>,
    <div className="rm"><h1 className="chh">Garrage</h1><div className="on"></div></div>,
    <div className="rm"><h1 className="chh">Balcony</h1><div className="on"></div></div>,];

  const callback = function(index){
    console.log("callback",index);
}
  return (
    <div className='Amain'>
        <Menu/>
        <h1 className="ch">ALARM SYSTEM</h1>
        <h2 className="ch2">Cameras</h2>

        <h1 className="Afence"> ELECTRIC FENCE</h1>
        <div className="dfence">
        
    </div>
    <div className="comp">
        <div className="ic">
      <h3 className="c">FENCE</h3>
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
    
      <div className="cr">
      <h2 className="ch2">Sensors</h2>
      <Carousel slides={slides} autoplay={false} interval={2000} onSlideChange={callback}   />
      </div>

      <div className="emergency">
        <h2 className="em">EMERGENCY</h2>
      </div>
    </div>
  )
}

export default Alarm

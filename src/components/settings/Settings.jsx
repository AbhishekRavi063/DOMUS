import React from 'react'
import './Settings.css'
import Menu from '../Menu'

function Settings() {
  return (
    <div className='Smain'>
        <Menu/>
        <h1 className="Mh">SETTINGS</h1>
        <h1 className="suser">USER</h1>
        <input type="text"  className="sinp" />

        <h1 className="suser">LOCATION</h1>
        <input type="text"  className="sinp" />

        <h1 className="suser">ADDRESS</h1>
        <input type="text"  className="sinp" />

        <h1 className="suser">EMERGENCY</h1>
        <input type="text"  className="sinp" />
        
      
    </div>
  )
}

export default Settings

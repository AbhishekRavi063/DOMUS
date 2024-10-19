import React from 'react'
import './Music.css'
import Menu from '../Menu'

function Music() {
  return (
    <div className='Mmain'>
      <Menu/>
      <h1 className="Mh">MUSIC</h1>
      <h1 className="app">APP</h1>
      <div className="spotify"><h2 className="spot">SPOTIFY</h2></div>
      <h1 className="app">LIBRARY</h1>
    
    <div className="lib">
     <div className="r">
     <div className="mb"></div>
     <h1 className="ls">Liked Songs</h1>
     </div>
     <div className="r">
     <div className="mb"></div>
     <h1 className="ls">90'S Easy Rock</h1>
     </div>
     <div className="r">
     <div className="mb"></div>
     <h1 className="ls">All Out 80'S</h1>
     </div>
     <div className="r">
     <div className="mb"></div>
     <h1 className="ls">Sunday BBQ</h1>
     </div>
    </div>
    <h1 className="Mh">Search</h1>
    <input type="text" className='minp' />
    </div>
  )
}

export default Music

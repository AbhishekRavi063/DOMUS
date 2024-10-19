import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './components/login/Login'

import Home from './components/Home/Home'
import LRoom from './components/Rooms/LRoom'
import KRoom from './components/Rooms/KRoom'
import BRoom from './components/Rooms/BRoom'
import Camera from './components/camera/Camera'
import Alarm from './components/Alarm/Alarm'
import Music from './components/music/Music'
import Users from './components/users/Users'
import Settings from './components/settings/Settings'
import Balcony from './components/Rooms/Balcony'

function App() {
  return (
    <Routes>
    
    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/kitchenroom' element={<KRoom/>} />
    <Route path='/livingroom' element={<LRoom/>} />
    <Route path='/bedroom' element={<BRoom/>} />
    <Route path='/balcony' element={<Balcony/>} />
    <Route path='/camera' element={<Camera/>} />
    <Route path='/alarm' element={<Alarm/>} />
    <Route path='/music' element={<Music/>} />
    <Route path='/users' element={<Users/>} />
    <Route path='/settings' element={<Settings/>} />

    </Routes>
  )
}

export default App


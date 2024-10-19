import React from 'react'
import './Users.css'
import Menu from '../Menu'

function Users() {
  return (
    <div className='umain'>
        <Menu/>
        <h1 className="Mh">USERS</h1>
        <div className="col">
         
         <input type="text" className="user" />
         <input type="text" className="user" />
         <input type="text" className="user" />
         <input type="text" className="user" />
         <input type="text" className="user" />

        </div>
      
    </div>
  )
}

export default Users

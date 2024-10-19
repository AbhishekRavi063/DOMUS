import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='lmain'>
        
        <h1 className="lh">DOMUS</h1>

        <h2 className='ln'>E-mail</h2>
        <input type="text" className="linp" />
        <h2 className='ln'>password</h2>
        <input type="text" className="linp" />
        <h2 className="lf">forgot your Pasword?</h2>
        
        <button className="lbtn">CONTINUE</button>
        
        <button className="lnew">CREATE A NEW ACCOUNT</button>
    </div>
  )
}

export default Login

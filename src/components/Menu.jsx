import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'
import Bars from '../assets/bars.png'


function Menu() {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <h1 className="logo">DOMUS</h1>
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <div className="lii">
            <Link
              onClick={() => setMenuOpen(false)}
              to="/home"
              span={true}
              smooth={true}
            >
              <h4 className="m">Home</h4>
            </Link>
            </div>
          </li>
          <li>
            <div className="lii">
            {" "}
            <Link
              onClick={() => setMenuOpen(false)}
              to="/camera"
              span={true}
              smooth={true}
            >
              <h4 className="m">Camera</h4>
            </Link>{" "}
            </div>
          </li>
          <li>
            <div className="lii">
            {" "}
            <Link
              onClick={() => setMenuOpen(false)}
              to="/alarm"
              span={true}
              smooth={true}
            >
              <h4 className="m">Alarm</h4>
            </Link>
            </div>
          </li>
         
          <li>
            
            {" "}
            <Link
              onClick={() => setMenuOpen(false)}
              to="/music"
              span={true}
              smooth={true}
            >
              <div className="lii">
              <h4 className="m">Music</h4>
              </div>
            </Link>{" "}
            
          </li>
       
          <li>
            <div className="lii">
            {" "}
            <Link
              onClick={() => setMenuOpen(false)}
              to="/users"
              span={true}
              smooth={true}
            >
              <h4 className="m">Users</h4>
            </Link>{" "}
            </div>
          </li>
          <li>
            <div className="lii">
            {" "}
            <Link
              onClick={() => setMenuOpen(false)}
              to="/settings"
              span={true}
              smooth={true}
            >
              <h4 className="m">Settings</h4>
            </Link>{" "}
            </div>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Menu

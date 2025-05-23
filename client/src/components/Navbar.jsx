import React from 'react'
import Logo from '../imgs/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
      <div className="Logo">
        <img src={Logo} alt="Logo"></img>
      </div>

      <div className="links">
        <Link className="links" to="/?cat=art"> <h6>ART</h6> </Link>
        <Link className="links" to="/?cat=art"> <h6>SCIENCE</h6> </Link>
        <Link className="links" to="/?cat=art"> <h6>TECHNOLOGY</h6> </Link>
        <Link className="links" to="/?cat=art"> <h6>CINEMA</h6> </Link>
        <Link className="links" to="/?cat=art"> <h6>DESGIN</h6> </Link>
        <Link className="links" to="/?cat=art"> <h6>FOOD</h6> </Link>
        <span>Prashant Singh</span>
        <span>Logout</span>
        <span className='write'>
          <Link className="link" to="/Write"> Write</Link>
        </span>
      </div>
      </div>
    </div>
  )
}

export default Navbar;
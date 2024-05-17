import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
      <nav>
        <div>
          <img src="/images/logo-dark.png" className='img_size' alt="" />
        </div>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li><Link className='active' to="/">Home</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/feature">Feature</Link></li>
            <li><Link to="#">Integration</Link></li>
            <li><Link to="#">Blog</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="https://web.betyphon.in/auth/register-page"><button className="btn btn-dark rounded-pill px-3" style={{marginRight: "0px", color: "white"}}>Sign Up</button></Link></li>
            <li><Link to="https://web.betyphon.in/auth/login-page"><button className="btn btn-primary rounded-pill px-3" style={{marginRight: "0px", color: "white"}}>Login</button></Link></li>            
          </ul>
            {/* <Link to="loginsignup" ><button className='btn btn-danger'>Login</button></Link> */}
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id='bar' className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
      </nav>
    </>
  );         
};

export default Navbar

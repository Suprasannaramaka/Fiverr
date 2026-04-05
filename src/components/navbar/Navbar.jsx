import React from 'react';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='container'>
        <div className='logo'>
            <span className='text'>Fiverr</span>
            <span className='dot'>.</span>
        </div>
        <div className='links'>
            <span>Fiver Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign In</span>
            <span>Become A Seller</span>
            <button type="button">Join</button>
        </div>
       </div>
       </div>
  )
}

export default Navbar
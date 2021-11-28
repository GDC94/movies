import React from 'react'
import logo from '../assets/logo.jpeg';
import icon from '../assets/icon.png';
import '../css/Nav.css';

export default function Nav() {
    return (
        <div className='nav'>
           
            <img 
                className='nav__logo'
                src={logo} 
                alt="netflix"
            />
             <img 
                className='nav__icon'
                src={icon} 
                alt="netflix"
            />
  
        </div>
    )
}

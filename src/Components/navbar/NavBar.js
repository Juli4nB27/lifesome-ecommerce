import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/logoSinFondo.png';



function NavBar() {
    return (
      <header className='App-header'>
        <nav className='nav'>
          <div className='logo-namePag'>
            <img alt='Logo' className='imgLogo' src={Logo}/>
          </div>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Information</li>
          </ul>      
        </nav>
      </header>
    );
  }
  
  export default NavBar;
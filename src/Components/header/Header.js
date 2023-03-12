import React from 'react';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import img from './assets/undraw_Scientist_klqc.png';
import imgAmpolla from './assets/Bote Inyectable.png';
import imgAltar from './assets/ImagenAltar.png';
import imgAmpollaPng from './assets/AmpollaPng.png'

function Header() {

    return (
      <div className="Header">
        <h1 className='SloganHead'>Prevention is better than cure.<span> &#160; </span> </h1>
        <img alt='imgslogan' src={img} className='imgslogan' />
      </div>
    );
  }
  
  export default Header;

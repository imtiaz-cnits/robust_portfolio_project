import React from 'react';
import { images } from '../../constants';
import './Navbar';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map( (item) => (
          <><li key={`link-${item}`}></li><div /><a href={`#${item}`}>{item}</a></>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;
import React from 'react';
import { images } from '../../constants';
import './Navbar';

const Navbar = () => {
  return (
    <nav>
      <img src={images.logo} alt="logo" />
      <ul>
        {['home', 'about', 'work', 'skills', 'contact'].map( (item) => (
          <><li key={`link-${item}`}></li><div /><a href={`#${item}`}>{item}</a></>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;
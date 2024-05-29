import './Navbar.css';
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Icon from '../icons/Icon.tsx';

const Navbar: React.FC = () => {
  const offset = ((3.4375 / 2) * parseFloat(getComputedStyle(document.documentElement).fontSize) - 1) * -1;
  return (
    <div className='navbar-container'>
      <nav className='col-16'>
        <ScrollLink href='#root' to='root' smooth={true} duration={400} className='home-link col-2'>
          <Icon path='Logo' />
        </ScrollLink>
        <div className='empty-block col-6'></div>
        <ul>
          <li className='col-2'><ScrollLink href='#work' to='work' spy={true} smooth={true} duration={400} offset={offset}>Work</ScrollLink></li>
          <li className='col-2'><ScrollLink href='#services' to='services' spy={true} smooth={true} duration={400} offset={offset}>Services</ScrollLink></li>
          <li className='col-2'><ScrollLink href='#team' to='team' spy={true} smooth={true} duration={400} offset={offset}>Team</ScrollLink></li>
          <li className='col-2'><a className='cta'>Get in touch</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
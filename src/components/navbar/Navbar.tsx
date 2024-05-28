import './Navbar.css';
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Icon from '../icons/Icon.tsx';

const Navbar: React.FC = () => {
  return (
    <div className='navbar-container'>
      <nav className='col-16'>
        <ScrollLink href='#root' to='root' smooth={true} duration={400} className='home-link col-2'>
          <Icon path='Logo' />
        </ScrollLink>
        <div className='empty-block col-6'></div>
        <ul>
          <li className='col-2'><ScrollLink href='#work' to='work' spy={true} smooth={true} duration={400}>Work</ScrollLink></li>
          <li className='col-2'><a>Services</a></li>
          <li className='col-2'><a>Team</a></li>
          <li className='col-2'><a className='cta'>Get in touch</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
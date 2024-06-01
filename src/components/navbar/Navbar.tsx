import './Navbar.css';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import NavbarMenu from './NavbarMenu.tsx';
import Icon from '../icons/Icon.tsx';
import Banner from '../banner/Banner.tsx';

const Navbar: React.FC = () => {  
  return (
    <div className='navbar-container'>
      <Banner />
      <div className='navbar-content'>
        <nav className='col-16'>
          <ScrollLink href='#root' to='root' smooth={true} duration={400} className='home-link col-2' aria-label='cōdio'>
            <Icon path='Logo' />
          </ScrollLink>
          <div className='empty-block col-6'></div>
          <NavbarMenu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import './Navbar.css';
import React from 'react';
import Icon from '../icons/Icon';

const Navbar: React.FC = () => {
  return (
    <div className='navbar-container'>
      <nav className='col-16'>
        <a className='home-link col-2'>
          <Icon name='Logo' />
        </a>
        <div className='empty-block col-6'></div>
        <ul>
          <li className='col-2'><a>Work</a></li>
          <li className='col-2'><a>Services</a></li>
          <li className='col-2'><a>Team</a></li>
          <li className='col-2'><a className='cta'>Get in touch</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
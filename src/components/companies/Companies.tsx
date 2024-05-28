import './Companies.css';
import React from 'react';
import Icon from '../icons/Icon';

const Companies: React.FC = () => {
  return (
    <div className='companies-container'>
      <div className='companies-content col-16'>
        <div className='companies-content-row'>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='companies/Cactus' />
          </a>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='companies/Flash' />
          </a>
          <a className='companies-content-row-item col-4 icon-sm' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='companies/Hitech' />
          </a>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='companies/Iceberg' />
          </a>
        </div>
        <div className='companies-content-row'>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='companies/Luminous' />
          </a>
          <a className='companies-content-row-item col-4 icon-sm' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='companies/Monaco' />
          </a>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='companies/Pinpoint' />  
          </a>
          <a className='companies-content-row-item col-4 icon-sm' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='companies/Snapshot' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Companies;
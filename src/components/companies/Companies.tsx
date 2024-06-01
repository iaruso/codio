import './Companies.css';
import React from 'react';
import Icon from '../icons/Icon.tsx';

const Companies: React.FC = () => {
  return (
    <section className='companies-container'>
      <div className='companies-content col-16'>
        <div className='companies-content-row'>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='Cactus' />
          </a>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='Flash' />
          </a>
          <a className='companies-content-row-item col-4 icon-sm' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='Hitech' />
          </a>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='Iceberg' />
          </a>
        </div>
        <div className='companies-content-row'>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='Luminous' />
          </a>
          <a className='companies-content-row-item col-4 icon-sm' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='Monaco' />
          </a>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='Pinpoint' />  
          </a>
          <a className='companies-content-row-item col-4 icon-sm' href='https://www.logotouse.com/' target='_blank'>
            <Icon path='Snapshot' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Companies;
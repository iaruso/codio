import './Companies.css';
import React from 'react';
import Icon from '../icons/Icon.tsx';

const Companies: React.FC = () => {
  return (
    <section className='companies-container'>
      <div className='companies-content col-16'>
        <div className='companies-content-row'>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank' aria-label='Cactus'>
            <Icon path='Cactus' />
          </a>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank' aria-label='Flash'>
            <Icon path='Flash' />
          </a>
          <a className='companies-content-row-item col-4 icon-sm' href='https://www.logotouse.com/' target='_blank' aria-label='Hitech'>
            <Icon path='Hitech' />
          </a>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank' aria-label='Iceberg'>
            <Icon path='Iceberg' />
          </a>
        </div>
        <div className='companies-content-row'>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank' aria-label='Luminous'>
            <Icon path='Luminous' />
          </a>
          <a className='companies-content-row-item col-4 icon-sm' href='https://www.logotouse.com/' target='_blank' aria-label='Monaco'>
            <Icon path='Monaco' />
          </a>
          <a className='companies-content-row-item col-4' href='https://www.logotouse.com/' target='_blank' aria-label='Pinpoint'>
            <Icon path='Pinpoint' />  
          </a>
          <a className='companies-content-row-item col-4 icon-sm' href='https://www.logotouse.com/' target='_blank' aria-label='Snapshot'>
            <Icon path='Snapshot' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Companies;
import './Services.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContainerServices: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id='services' className='services-container'>
      <div className='services-content col-16'>
        <div className='services-content-header'>
          <h2>{t('services.title')}</h2>
        </div>
        <div className='services-content-area'>
          <div className='services-content-area-grid-options col-12'>
            <button className='services-content-area-grid-options-item col-4'>Design</button>
            <button className='services-content-area-grid-options-item col-4'>Development</button>
            <button className='services-content-area-grid-options-item col-4'>Branding</button>
          </div>
          <div className='services-content-area-grid'>
            <div className='empty-block col-2'></div>
            <div className='services-content-area-grid-container col-12'>
              <div className='services-content-area-grid-container-description'>
                <p>Designing impactful online experiences that resonate with your audience</p>
              </div>
              <div className='services-content-area-grid-container-canvas'>
                <div className='bg'></div>
              </div>
            </div>
            <div className='empty-block col-2'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContainerServices;
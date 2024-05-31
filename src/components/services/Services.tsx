import './Services.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '../grid/Grid';

const ContainerServices: React.FC = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState('design');
  const handleServiceClick = (service: string) => {
    setActiveService(service);
  };

  return (
    <section id='services' className='services-container'>
      <div className='services-content col-16'>
        <div className='services-content-header'>
          <h2>{t('services.title')}</h2>
        </div>
        <div className='services-content-area'>
          <div className='services-content-area-grid-options col-12'>
            <button
              className={`services-content-area-grid-options-item col-4 ${
                activeService === 'design' ? 'active' : ''
              }`}
              onClick={() => handleServiceClick('design')}
            >
              {t('services.design.title')}
            </button>
            <button
              className={`services-content-area-grid-options-item col-4 ${
                activeService === 'development' ? 'active' : ''
              }`}
              onClick={() => handleServiceClick('development')}
            >
              {t('services.development.title')}
            </button>
            <button
              className={`services-content-area-grid-options-item col-4 ${
                activeService === 'seo' ? 'active' : ''
              }`}
              onClick={() => handleServiceClick('seo')}
            >
              {t('services.seo.title')}
            </button>
          </div>
          <div className='services-content-area-grid-container-description'>
            <div
              className='services-content-area-grid-container-description-area col-12'
            >
              <p>
                {t(`services.${activeService}.content`)}
              </p>
            </div>
          </div>
          <div className='services-content-area-grid'>
            <div className='empty-block col-2'></div>
            <div className='services-content-area-grid-container col-12'>
              <Grid activeService={activeService}/>
            </div>
            <div className='empty-block col-2'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerServices;

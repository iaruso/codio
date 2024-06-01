import './Work.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContainerWork: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id='work' className='work-container'>
      <div className='work-content col-16'>
        <div className='work-content-header'>
          <h2>{t('work.title')}</h2>
        </div>
        <div className='work-content-row'>
          <div className='empty-block col-2'></div>
          <a className='work-content-row-item' href='https://www.logotouse.com/' target='_blank'>
            <img src='./ab.png' alt='work'
              srcSet={`./ab_min.png 768w, ./ab.png 1080w`}
              sizes='(max-width: 1080px) 100vw, 1080px'
            />
            <div className='work-content-row-item-details'>
              <h3>Agile Blueprint</h3>
              <p>{t('work.types.development')}</p>
            </div>
          </a>
          <div className='empty-block col-1'></div>
          <a className='work-content-row-item' href='https://www.logotouse.com/' target='_blank'>
            <img src='./osaka.png' alt='work'
              srcSet={`./osaka_min.png 768w, ./osaka.png 1080w`}
              sizes='(max-width: 1080px) 100vw, 1080px'
            />
            <div className='work-content-row-item-details'>
              <h3>Osaka Skin Care</h3>
              <p>{t('work.types.design')}</p>
            </div>
          </a>
          <div className='empty-block col-2'></div>
        </div>
        <div className='empty-block horizontal col-16'>
          <div className='sub-empty-block col-2'></div>
          <div className='sub-empty-block'></div>
          <div className='sub-empty-block col-1'></div>
          <div className='sub-empty-block'></div>
          <div className='sub-empty-block col-2'></div>
        </div>
        <div className='work-content-row'>
          <div className='empty-block col-2'></div>
          <a className='work-content-row-item' href='https://www.logotouse.com/' target='_blank'>
            <img src='./rise.png' alt='work'
              srcSet={`./rise_min.png 768w, ./rise.png 1080w`}
              sizes='(max-width: 1080px) 100vw, 1080px'
            />
            <div className='work-content-row-item-details'>
              <h3>Rise Gaming</h3>
              <p>{t('work.types.design')}</p>
            </div>
          </a>
          <div className='empty-block col-1'></div>
          <a className='work-content-row-item' href='https://www.logotouse.com/' target='_blank'>
            <img src='./theo.png' alt='work'
              srcSet={`./theo_min.png 768w, ./theo.png 1080w`}
              sizes='(max-width: 1080px) 100vw, 1080px'
            />
            <div className='work-content-row-item-details'>
              <h3>theo - handmade clothes</h3>
              <p>{t('work.types.development')}</p>
            </div>
          </a>
          <div className='empty-block col-2'></div>
        </div>
      </div>
    </section>
  );
}

export default ContainerWork;
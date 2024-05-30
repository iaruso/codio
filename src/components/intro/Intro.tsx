import './Intro.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const ContainerIntro: React.FC = () => {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);

  const updateBannerHeight = useCallback(() => {
    const bannerElement = document.getElementById('banner');
    if (bannerElement) {
      const height = (3.4375 / 3) * parseFloat(getComputedStyle(document.documentElement).fontSize);
      setOffset((((3.4375 / 2) * parseFloat(getComputedStyle(document.documentElement).fontSize) + 1) + height) * -1);
    } else {
      setOffset((((3.4375 / 2) * parseFloat(getComputedStyle(document.documentElement).fontSize) - 1)) * -1);
    }
  }, []);

  useEffect(() => {
    updateBannerHeight();
    window.addEventListener('resize', updateBannerHeight);
    document.body.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('resize', updateBannerHeight);
      document.body.removeEventListener('click', handleClick);
    };
  }, [updateBannerHeight]);

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar-container')) {
      updateBannerHeight();
    }
  };

  return (
    <section className='intro-container'>
      <main className='col-16'>
        <div className='empty-block col-2'></div>
        <div className='empty-block col-2'></div>
        <div className='intro-content col-8'>
          <h1>{t('intro.title_1')}<br />{t('intro.title_2')}</h1>
          <p>{t('intro.subtitle')}</p>
          <div className='button-area'>
            <div className='empty-block'></div>
            <div className='empty-block'></div>
            <div className='cta'>
              <ScrollLink href='#contact' to='contact' spy={true} smooth={true} duration={400} offset={offset}>{t('intro.cta')}</ScrollLink>
            </div>
            <div className='empty-block'></div>
            <div className='empty-block'></div>
            <div className='button-area-overlay'></div>
          </div>
        </div>
        <div className='empty-block col-2'></div>
        <div className='empty-block col-2'></div>
      </main>
    </section>
  );
};

export default ContainerIntro;

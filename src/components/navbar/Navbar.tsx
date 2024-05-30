import './Navbar.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Icon from '../icons/Icon.tsx';
import Banner from '../banner/Banner.tsx';

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null;
  
  return function (...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout as ReturnType<typeof setTimeout>);
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(later, wait);
  };
}

const Navbar: React.FC = () => {
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

  const debouncedUpdateBannerHeight = useCallback(debounce(updateBannerHeight, 200), [updateBannerHeight]);

  useEffect(() => {
    updateBannerHeight();
    window.addEventListener('resize', debouncedUpdateBannerHeight);
    document.body.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('resize', debouncedUpdateBannerHeight);
      document.body.removeEventListener('click', handleClick);
    };
  }, [updateBannerHeight, debouncedUpdateBannerHeight]);

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar-container')) {
      updateBannerHeight();
    }
  };

  return (
    <div className='navbar-container'>
      <Banner />
      <div className='navbar-content'>
        <nav className='col-16'>
          <ScrollLink href='#root' to='root' smooth={true} duration={400} className='home-link col-2'>
            <Icon path='Logo' />
          </ScrollLink>
          <div className='empty-block col-6'></div>
          <ul>
            <li className='col-2'><ScrollLink href='#work' to='work' spy={true} smooth={true} duration={400} offset={offset}>{t('navbar.work')}</ScrollLink></li>
            <li className='col-2'><ScrollLink href='#services' to='services' spy={true} smooth={true} duration={400} offset={offset}>{t('navbar.services')}</ScrollLink></li>
            <li className='col-2'><ScrollLink href='#team' to='team' spy={true} smooth={true} duration={400} offset={offset}>{t('navbar.team')}</ScrollLink></li>
            <li className='col-2'><ScrollLink href='#contact' to='contact' spy={true} smooth={true} duration={400} offset={offset} className='cta'>{t('navbar.contact')}</ScrollLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

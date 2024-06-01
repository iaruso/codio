import React, { useState, useCallback, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Icon from '../icons/Icon.tsx';
import './Navbar.css';

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

const NavbarMenu: React.FC = () => {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('resize', debouncedUpdateBannerHeight);
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [updateBannerHeight, debouncedUpdateBannerHeight]);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar-container') && !target.closest('.menu-toggle')) {
      setMenuOpen(false);
    }
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <button className='menu-toggle col-2' onClick={handleToggleMenu}>
        <span>{t('navbar.menu')}</span><Icon path={menuOpen ? 'Close' : 'Menu'} />
      </button>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li className='col-2'><ScrollLink href='#work' to='work' spy={true} smooth={true} duration={400} offset={offset} onClick={handleMenuItemClick}>{t('navbar.work')}</ScrollLink></li>
        <li className='col-2'><ScrollLink href='#services' to='services' spy={true} smooth={true} duration={400} offset={offset} onClick={handleMenuItemClick}>{t('navbar.services')}</ScrollLink></li>
        <li className='col-2'><ScrollLink href='#team' to='team' spy={true} smooth={true} duration={400} offset={offset} onClick={handleMenuItemClick}>{t('navbar.team')}</ScrollLink></li>
        <li className='col-2'><ScrollLink href='#contact' to='contact' spy={true} smooth={true} duration={400} offset={offset} className='cta' onClick={handleMenuItemClick}>{t('navbar.contact')}</ScrollLink></li>
      </ul>
    </>
  );
};

export default NavbarMenu;

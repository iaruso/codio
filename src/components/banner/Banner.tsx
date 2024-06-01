import './Banner.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../icons/Icon.tsx';

const Banner: React.FC = () => {
  const { t } = useTranslation();
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div id='banner' className='banner-container'>
      <div className='banner-content col-16'>
        <p>{t('banner.content')}</p>
        <button onClick={handleClose} className='col-1'>{t('banner.close')}<Icon path='Close'/></button>
      </div>
    </div>
  );
};

export default Banner;
import './Footer.css';
import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import { useTranslation } from 'react-i18next';
import Icon from '../icons/Icon';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language.split('-')[0]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng') || 'en-US';
    i18n.changeLanguage(storedLanguage);
    setActiveLanguage(storedLanguage.split('-')[0]);
  }, [i18n.language, i18n]);

  const languages: { [key: string]: string } = {
    'en': 'en-US',
    'pt': 'pt-PT',
    'es': 'es-ES',
    'fr': 'fr-FR',
    'de': 'de-DE',
    'ru': 'ru-RU',
  };

  const handleSelectChange = (selectedOptions: { value: string; }[]) => {
    const selectedLanguage = selectedOptions[0].value;
    setActiveLanguage(selectedLanguage);
    i18n.changeLanguage(languages[selectedLanguage]);
  };

  return (
    <footer>
      <div className='footer-container col-16'>
        <Select
          className='language-select'
          options={[
            { value: 'en', label: t('footer.language.options.en') },
            { value: 'pt', label: t('footer.language.options.pt') },
            { value: 'es', label: t('footer.language.options.es') },
            { value: 'fr', label: t('footer.language.options.fr') },
            { value: 'de', label: t('footer.language.options.de') },
            { value: 'ru', label: t('footer.language.options.ru') }
          ]}
          values={[{ value: activeLanguage, label: t(`footer.language.options.${activeLanguage}`) }]}
          placeholder='Language'
          dropdownHandle={false}
          dropdownPosition='top'
          searchable={false}
          onChange={handleSelectChange}
        />
        <button className='theme-toggle'>
          <Icon path='Light' />
        </button>
        <p>{t('footer.content')}</p>
        <div className='footer-social'>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <Icon path='social/Instagram' />
          </a>
          <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
            <Icon path='social/LinkedIn' />
          </a>
          <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
            <Icon path='social/Twitter' />
          </a>
          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
            <Icon path='social/Youtube' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

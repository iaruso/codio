import './Contact.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContainerContact: React.FC = () => {
  const { t } = useTranslation();
  const email = 'hello@codio.com';

  return (
    <section id='contact' className='contact-container'>
      <div className='contact-content col-16'>
        <div className='empty-block col-2'></div>
        <a className='contact-link col-12' href={`mailto:${email}`} target='_blank'>
          <h2>{t('contact.title')}</h2>
          <p>{email}</p>
        </a>
        <div className='empty-block col-2'></div>
      </div>
    </section>
  );
};

export default ContainerContact;
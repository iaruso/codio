import { useState, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import './i18n/index.js'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Companies from './components/companies/Companies'
import Work from './components/work/Work'
import Services from './components/services/Services'
import Team from './components/team/Team'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Mouse from './components/mouse/Mouse'


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (!theme) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <html lang={i18n.language.split('-')[0]} data-color-scheme={theme}></html>
          <link rel='icon' type='image/svg+xml' href={theme == 'light' ? '/favicon-light.svg' : '/favicon-dark.svg'} />
          <title>{t('head.title')}</title>
          <meta name='description' content={t('head.description')} />
          <meta name='keywords' content={t('head.keywords')} />
          <meta name='theme-color' content={theme === 'light' ? '#ffffff' : '#121212'} />
        </Helmet>
      </HelmetProvider>
      <div className='opacity-box'></div>
      <div className='page-bg'></div>
      <div className='app'>
        <Navbar />
        <Intro />
        <Companies />
        <Work />
        <Services />
        <Team />
        <Contact />
        <Footer toggleTheme={toggleTheme} theme={theme || ''} />
      </div>
      <Mouse />
    </>
  )
}

export default App

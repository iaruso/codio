import { useState, useEffect } from 'react'
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
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  useEffect(() => {
    if (!theme) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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
          <html lang="en" data-color-scheme={theme}></html>
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

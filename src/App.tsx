import './App.css'
import './i18n/index.js'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Companies from './components/companies/Companies'
import Work from './components/work/Work'
import Services from './components/services/Services'
import Team from './components/team/Team'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <Companies />
      <Work />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App

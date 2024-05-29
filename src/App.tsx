import './App.css'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Companies from './components/companies/Companies'
import Work from './components/work/Work'
import Services from './components/services/Services'
import Team from './components/team/Team'

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <Companies />
      <Work />
      <Services />
      <Team />
    </>
  )
}

export default App

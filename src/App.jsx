import './App.css'
import About from './Pages/About/About'
import Banner from './Pages/Banner/Banner'
import Contact from './Pages/Contact/Contact'
import Nav from './Pages/Nav/Nav'
import Project from './Pages/Project/Project'
import Services from './Pages/Services/Services'
import Skill from './Pages/Skills/Skill'

function App() {

  return (
    <section className="main">
      <Nav></Nav>
      <Banner></Banner>
      <Skill></Skill>
      <About></About>
      <Project></Project>
      <Services></Services>
      <Contact></Contact>
    </section>
  )
}

export default App

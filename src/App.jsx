import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <div id="top" className='h-screen py-10'>
        <Navbar />
        <Header />
        <Features />
        <Projects />
        <AboutMe />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App

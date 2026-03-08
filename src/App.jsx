import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Calidad from './components/Calidad'
import Catalogo from './components/Catalogo'
import Experiencia from './components/Experiencia'
import Mapa from './components/Mapa'
import InfoEnvios from './components/InfoEnvios'
import Galeria from './components/Galeria'
import RedesSociales from './components/RedesSociales'
import ButtonWhatsApp from './components/ButtonWhatsApp'
import ButtonFlecha from './components/ButtonFlecha'
import Footer from './components/Footer'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
      mirror: true
    })
  },[])

  return (
    <>
      <Navbar/>
      <Hero/>
      <Calidad/>
      <Catalogo/>
      <Experiencia/>
      <Mapa/>
      <InfoEnvios/>
      <Galeria/>
      <RedesSociales/>
      <ButtonWhatsApp />
      <ButtonFlecha />
      <Footer/>
    </>
  )
}

export default App

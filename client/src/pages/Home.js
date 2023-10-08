import React from 'react'
import Hero from '../components/Hero'
import Sectors from '../components/Sectors'
import About from '../components/About'
import Clients from '../components/Clients'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Sectors/>
      <About/>
      <Clients/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home

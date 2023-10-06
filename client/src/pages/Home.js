import React from 'react'
import Hero from '../components/Hero'
import Sectors from '../components/Sectors'
import About from '../components/About'
import Clients from '../components/Clients'
import Team from '../components/Team'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Sectors/>
      <About/>
      <Clients/>
      <Team/>
      <Contact/>
    </div>
  )
}

export default Home

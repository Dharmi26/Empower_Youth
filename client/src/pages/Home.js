import React from 'react'
import Hero from '../components/Hero'
import Sectors from '../components/Sectors'
import About from '../components/About'
import Clients from '../components/Clients'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Sectors/>
      <About/>
      <Clients/>
    </div>
  )
}

export default Home

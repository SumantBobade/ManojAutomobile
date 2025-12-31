import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Contact from './Contact'
import Products from './Products'

function Home() {
  return (
    <div>
          <Hero />
          <About />
          <Products/>
          <Contact />
          
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/LandingPageComponents/Hero'
import Features from '../components/LandingPageComponents/Features'
import Footer from '../components/LandingPageComponents/Footer'
import Demo from '../components/LandingPageComponents/Demo'
import Working from '../components/LandingPageComponents/Working'
import Pricing from '../components/LandingPageComponents/Pricing'
import Banner from '../components/LandingPageComponents/Banner'
import FAQ from '../components/LandingPageComponents/FAQ'


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Demo/>
      <Working/>
      <FAQ/>
      <Pricing/>
      <Banner/>
      <Footer />
    </div>
  )
}

export default LandingPage
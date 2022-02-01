import React from 'react';
import Layout from "../components/layout/Layout"
import Hero from '../components/Hero/Hero';
import Offer from '../components/Sections/Offer/Offer';
import Team from '../components/Sections/Team/Team';
import About from '../components/Sections/About/About';
import Portfolio from '../components/Sections/Portfolio/Portfolio';
import Pricing from '../components/Sections/Pricing/Pricing';
import News from '../components/Sections/News/News';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Offer />
      <Team />
      <About />
      <Portfolio />
      <Pricing />
      <News />
      <Footer />
    </Layout>
  )
}

export default IndexPage

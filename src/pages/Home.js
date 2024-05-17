import React from 'react'
import HeroSection from '../components/Home/HeroSection';
import KeyCard from '../components/Home/KeyCard';
import VedioSection from '../components/Home/VedioSection';
import CrmPerview from '../components/Home/CrmPerview';
import OurFeatures from '../components/Home/OurFeatures';
import StepProcess from '../components/Home/StepProcess';
import ContactBoxSilder from '../components/Home/ContactBoxSlider';

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <KeyCard/>
        <VedioSection/>
        <CrmPerview/>
        <OurFeatures/>
        <StepProcess/>
        <ContactBoxSilder/>
    </div>
  )
}

export default Home
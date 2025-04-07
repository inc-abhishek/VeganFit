import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Recipes from '../components/Recipes';
import Community from '../components/Community';
import ChefZone from '../components/ChefZone';
import DeliverySection from '../components/DeliverySection';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Recipes />
      <Community />
      <ChefZone />
      <DeliverySection />
    </>
  );
};

export default Home;
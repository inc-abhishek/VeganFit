import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Life with Plant-Based Power
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Join the revolution of healthy living with personalized vegan meal plans,
            expert guidance, and a supportive community.
          </p>
          <div className="space-x-4">
            <a href="#" className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
              Start for ₹1
            </a>
            <a href="#" className="text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
              Explore Recipes
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="Healthy vegan food"
          className="object-cover h-full w-full opacity-20 md:opacity-30"
        />
      </div>
    </div>
  );
}

export default Hero;
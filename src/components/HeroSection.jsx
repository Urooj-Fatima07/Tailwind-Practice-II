import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center text-white flex items-center justify-center overflow-hidden" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503455637927-730bce8583c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjusted opacity */}
      <div className="relative z-10 text-center px-6 lg:px-12">
        <h1 className="text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white animate-fade-in">
          Experience <span className="text-yellow-400">Innovation</span> {/* Added color for emphasis */}
        </h1>
        <p className="text-xl lg:text-2xl mb-6 max-w-3xl mx-auto text-white animate-fade-in-text">
          Discover the latest technology and design in our newest products.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

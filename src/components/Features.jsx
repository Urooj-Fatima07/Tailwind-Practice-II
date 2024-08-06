import React from 'react';

const features = [
  { title: 'Stunning Design', description: 'Crafted with precision and elegance.' },
  { title: 'Advanced Technology', description: 'Powered by the latest innovations.' },
  { title: 'Unmatched Performance', description: 'Experience speed and efficiency like never before.' },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl group"
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1503455637927-730bce8583c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: 'cover',  // Ensure the image covers the entire div
                backgroundPosition: 'center',  // Center the image
                backgroundRepeat: 'no-repeat', // Avoid repeating the image
              }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-bold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-bold transition-colors duration-300">
                {feature.description}
              </p>
              <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

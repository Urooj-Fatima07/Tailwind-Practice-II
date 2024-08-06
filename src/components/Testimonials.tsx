import React from 'react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company Inc.',
    quote: 'This is the best service I have ever used! Highly recommended.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Marketing Director, Another Co.',
    quote: 'An amazing experience from start to finish. Will definitely use again.',
  },
  {
    id: 3,
    name: 'Samuel Johnson',
    position: 'Product Manager, TechCorp',
    quote: 'Exceptional quality and customer support. Worth every penny!',
  },
];

const TestimonialSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-pink-50 py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`w-full md:w-1/3 p-6 bg-white shadow-lg rounded-lg transform transition-opacity duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } hover:bg-gradient-to-r hover:from-pink-300 hover:to-pink-500`}
            >
              <p className="text-gray-600 text-lg mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-pink-200 mr-4"></div>
                <div>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

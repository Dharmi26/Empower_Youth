import React, { useState } from 'react';

const teamMembers = [
  {
    intro: '"Hi, I\'m a React developer with a passion for clean code and user-friendly interfaces."',
    name: 'Dharmi Kapadiya',
    role: 'Frontend Developer',
  },
  {
    intro: '"As a Data Analyst, I turn data into insights that drive informed decisions."',
    name: 'Chezal Shekhawat',
    role: 'Data Analyst',
  },
  {
    intro: '"I specialize in building robust backend systems to power your applications."',
    name: 'Badal Soni',
    role: 'Backend Developer',
  },
];

function Team() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    console.log('Prev arrow clicked'); // Add this line

    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? teamMembers.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
        <h2 className="text-navblue text-4xl font-semibold text-center uppercase mb-12">Our Team</h2>
        <div className="relative flex items-center justify-center">
          <div
            className="arrow left-arrow text-xl cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 lg:left-40"
            onClick={prevSlide}
          >
            ←
          </div>
          <div
            className="relative w-full flex items-center justify-center h-80 transition-opacity duration-300"
            style={{ opacity: 1 }}
          >
            <div className="bg-white rounded-lg shadow-lg px-10 py-8 w-80">
              <p className="text-justify text-gray-600 mb-5">{teamMembers[currentSlide].intro}</p>
              <p className="text-lg font-semibold mb-2">{teamMembers[currentSlide].name}</p>
              <p className="text-md text-gray-600 italic">{teamMembers[currentSlide].role}</p>
            </div>
          </div>
          <div
            className="arrow right-arrow text-xl cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 lg:right-40"
            onClick={nextSlide}
          >
            →
          </div>
        </div>
        <div className="flex justify-center mt-6">
          {teamMembers.map((_, index) => (
            <span
              key={index}
              className={`dot inline-block h-2 w-2 rounded-full mx-2 cursor-pointer ${
                index === currentSlide ? 'bg-navblue' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
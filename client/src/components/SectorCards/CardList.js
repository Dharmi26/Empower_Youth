import React, { useState } from 'react';
import { HiChevronDoubleRight } from "react-icons/hi";
import { IoIosPricetags } from "react-icons/io";
import { TiGlobe } from "react-icons/ti";
import { BiSolidCategory } from "react-icons/bi";

const Card = ({ training }) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncateCourseName = (name, maxLength) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + '...';
    }
    return name;
  };

  return (
    <div
      className="p-4 mb-4 w-full md:w-1/2 lg:w-1/3 relative overflow-hidden transition duration-500 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-blue-50 capitalize shadow-md rounded-lg px-6 py-10 text-start transition-transform transform hover:scale-105`}>
        <h2 className="text-xl mb-4">
          {isHovered ? training.courseName : truncateCourseName(training.courseName, 28)}
        </h2>
        <p className="text-gray-600 mb-2 flex items-center">
          <TiGlobe size="20" className="mr-2" /> {training.courseProvider}
        </p>
        <p className="text-gray-600 mb-2 flex items-center"><IoIosPricetags className="mr-2" /> {training.coursePrice}</p>
        <p className="text-gray-600 mb-2 flex items-center">
          <BiSolidCategory size="20" className="mr-2" /> {training.domainName}
        </p>        
        <a href={training.courseURL} target='_blank' rel='noopener noreferrer' className='text-blue-500 flex items-center pt-5'>
          <span className='mr-2'>Know more</span> <HiChevronDoubleRight />
        </a>
      </div>
    </div>
  );
};

const CardList = ({ trainings }) => {
  return (
    <div className="flex flex-wrap justify-center m-4">
      {trainings.map((training) => (
        <Card key={training.id} training={training} />
      ))}
    </div>
  );
};

export default CardList;

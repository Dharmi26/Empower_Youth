import React from 'react';
import udemy from '../assets/udemy.png';
import coursera from '../assets/coursera.png';
import gl from '../assets/gl.png';
import udacity from '../assets/udacity.png';

const Clients = () => {
  return (
    <div className='flex flex-col gap-20 justify-center items-center px-6 py-12 sm:px-12 md:px-36 lg:px-48 sm:py-20 md:py-24 lg:py-28'>
      <h1 className='text-navblue text-4xl font-semibold uppercase'>Our Clients</h1>
      <div className='flex flex-row gap-10 justify-center items-center'>
        <div>
            <img src={udemy} alt="udemy" width="300"/>
        </div>
        <div>
            <img src={coursera} alt="coursera"/>
        </div>
        <div>
            <img src={gl} alt="greatLearning"/>
        </div>
        <div>
            <img src={udacity} alt="udacity" width="400"/>
        </div>
      </div>
    </div>
  )
}

export default Clients

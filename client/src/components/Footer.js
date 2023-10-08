import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-darkblue text-white py-10 md:py-20 px-10 flex flex-col md:flex-row md:gap-20 justify-center'>
      <div className='md:w-1/3 mb-10'>
        <h1 className='uppercase text-xl mb-4 md:mb-10'>EmpowerYouth</h1>
        <div className='font-light'>
          <p>Swami Keshvanand Institute of Technology</p>
          <p>Ram Nagariya Rd, Shivam Nagar, Jagatpura,</p>
          <p>Jaipur, Rajasthan (302017)</p>
        </div>
      </div>
      <div className='md:w-1/3 mb-10'>
        <h1 className='uppercase text-xl mb-4 md:mb-10'>Menu</h1>
        <div className='font-light'>
          <p className='cursor-pointer'>About</p>
          <p className='cursor-pointer'>Sectors</p>
          <p className='cursor-pointer'>Government</p>
          <p className='cursor-pointer'>Private</p>
          <p className='cursor-pointer'>Entrepreneurship</p>
          <p className='cursor-pointer'>Clients</p>
          <p className='cursor-pointer'>Team</p>
          <p className='cursor-pointer'>Contact</p>
        </div>
      </div>
      <div className='md:w-1/3 mb-10'>
        <h1 className='uppercase text-xl mb-4 md:mb-10'>Socials</h1>
        <div className='font-light flex flex-row gap-5'>
          <p className='cursor-pointer'>
            <AiOutlineTwitter size="20"/>
          </p>
          <p className='cursor-pointer'>
            <FaLinkedin size="20"/>
          </p>
        </div>
        <div className='font-light mt-4 md:mt-16'>
          &copy; 2023 EmpowerYouth
        </div>
      </div>
    </div>
  );
};

export default Footer;

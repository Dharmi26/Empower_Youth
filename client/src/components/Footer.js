import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai'
import {Link} from 'react-scroll'

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
        <div className='font-light mt-5'>+91-0141- 3500300</div>
        <div className='font-light'>info@skit.ac.in</div>
      </div>
      <div className='md:w-1/3 mb-10'>
        <h1 className='uppercase text-xl mb-4 md:mb-10'>Menu</h1>
        <div className='font-light'>
          <Link to="About" smooth duration={500}><p className='cursor-pointer'>About</p></Link>
          <Link to="Sectors" smooth duration={500}><p className='cursor-pointer'>Sectors</p></Link>
          <Link to="Sectors" smooth duration={500}><p className='cursor-pointer'>Government</p></Link>
          <Link to="Sectors" smooth duration={500}><p className='cursor-pointer'>Private</p></Link>
          <Link to="Sectors" smooth duration={500}><p className='cursor-pointer'>Entrepreneurship</p></Link>
          <Link to="Clients" smooth duration={500}><p className='cursor-pointer'>Clients</p></Link>
          <Link to="Team" smooth duration={500}><p className='cursor-pointer'>Team</p></Link>
          <Link to="Contact" smooth duration={500}><p className='cursor-pointer'>Contact</p></Link>
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

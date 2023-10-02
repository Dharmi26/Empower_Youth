import React, {useEffect} from 'react'
import HeroImg from '../assets/HeroImg.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='relative z-0'>
      <div className='w-full'>
        <img src={HeroImg} className='w-full'/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-anchor-placement="center-bottom" className='absolute flex flex-col items-center px-4 py-4 md:px-32 md:py-12 lg:px-32 lg:py-12 bottom-0 left-1/2 transform -translate-x-1/2 sm:left-1/4 sm:translate-x-0 md:left-1/3 md:translate-x-0 lg:left-1/4 lg:translate-x-0 bg-white text-navblue text-center'>
        <p className='sm:text-xl md:text-2xl lg:text-2xl md:pb-4'>Empowering Youth For</p>
        <h1 className='sm:text-2xl md:text-5xl lg:text-5xl font-bold md:pb-4'>ACHIEVING GROWTH</h1>
        <button className='md:text-lg sm:text-xs cursor-pointer outline outline-1 outline-navblue p-1 mt-2 md:p-3 md:mt-3 lg:p-3 lg:mt-3 md:w-80 lg:w-80 sm:w-40 text-center hover:bg-navblue hover:text-white transition duration-300 ease-in-out transform hover:scale-105'>Take a Psychometric Test</button>
      </div>
    </div>
  )
}

export default Hero

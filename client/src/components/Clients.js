import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import udemy from '../assets/udemy.png';
import coursera from '../assets/coursera.png';
import gl from '../assets/gl.png';
import udacity from '../assets/udacity.png';

const Clients = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='flex flex-col gap-20 justify-center items-center h-full px-6 py-12 sm:px-12 md:px-36 lg:px-48 sm:py-20 md:py-24 lg:py-32'>
      <h1 data-aos="fade-up-zoom-in" data-aos-duration="1000" data-aos-delay="300" data-aos-anchor-placement="center-bottom" className='text-navblue text-4xl font-semibold uppercase'>Our Clients</h1>
      <div className='hidden md:flex flex-row gap-16 justify-center items-center'>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
            <img src={udemy} alt="udemy" width="300"/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-anchor-placement="center-bottom">
            <img src={coursera} alt="coursera"/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-anchor-placement="center-bottom">
            <img src={gl} alt="greatLearning"/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" data-aos-anchor-placement="center-bottom">
            <img src={udacity} alt="udacity" width="400"/>
        </div>
      </div>
      <div className='md:hidden flex flex-col gap-10'>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
            <img src={udemy} alt="udemy" width="100"/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-anchor-placement="center-bottom">
            <img src={coursera} alt="coursera" width="100"/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-anchor-placement="center-bottom">
            <img src={gl} alt="greatLearning" width="100"/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" data-aos-anchor-placement="center-bottom">
            <img src={udacity} alt="udacity" width="100"/>
        </div>
      </div>
    </div>
    
  )
}

export default Clients

import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div name="About" className='min-h-screen bg-bg1 bg-fixed'>
        <div className='bg-blue-100 bg-opacity-50 h-full flex flex-col gap-10 justify-center items-center px-6 py-12 sm:px-12 md:px-36 lg:px-48 sm:py-20 md:py-24 lg:py-28'>
            <h1 data-aos="fade-up-zoom-in" data-aos-duration="1000" data-aos-delay="100" className='text-navblue text-4xl font-semibold uppercase'>About</h1>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className='text-lg text-justify text-navblue'>
                In a world where a million youth enter the job market every month, empowering them to make informed career choices in the vocational sector is a critical imperative. The vocational pathway, often overshadowed by traditional academics, holds immense potential for employment and economic growth. However, the lack of accessible and reliable information has resulted in information asymmetry, leaving many young individuals in the dark when it comes to choosing the right vocational trade for their future.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className='text-lg text-justify text-navblue'>
                To address this challenge, we propose "EmpowerYouth," a comprehensive digital solution aimed at bridging the information gap and empowering young individuals to make informed decisions about their career paths within the vocational sector. This platform will serve as a one-stop resource for all things related to vocational training and careers.
            </p>
            <button data-aos="fade-up-zoom-in" data-aos-duration="1000" data-aos-delay="300" className='md:text-lg sm:text-xs cursor-pointer outline outline-1 outline-navblue p-1 mt-2 md:p-3 md:mt-3 lg:p-3 lg:mt-3 md:w-80 lg:w-80 sm:w-40 text-center hover:bg-navblue hover:text-white transition duration-300 ease-in-out transform hover:scale-105'>Learn More</button>
        </div>
    </div>
  );
};

export default About;

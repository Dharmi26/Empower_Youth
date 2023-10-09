import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

// import connect from '../assets/lets-connect.webp';

const Contact = () => {
    
  useEffect(() => {
    AOS.init({
      duration:"1000"
    });
  }, [])

  return (
    <div
      name="Contact"
      className="w-full pt-40 bg-navblue p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-20">
          <p data-aos="fade-up-zoom-in" data-aos-duration="1000" data-aos-delay="100" className="text-white text-center text-4xl font-semibold uppercase">
            Contact
          </p>
          {/* <p className="py-6 flex flex-row justify-center items-center gap-2 text-2xl"><MdOutlineContactMail/>Let's Get Connected !</p> */}
        </div>
        <div className="flex flex-col justify-center items-center gap-4">

          {/* <div data-aos="zoom-in-up" data-aos-delay="200" className="w-[60%] md:w-[40%]"><img src={connect}/></div> */}

          <div data-aos="fade-up-zoom-in" data-aos-delay="500" className="w-full flex justify-center items-center">
          <form
            action="https://getform.io/f/4682ebcf-5ccf-4f89-8d9c-5eb230f79e03"
            method="POST"
            className="flex flex-col justify-center w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-cyan border-2 text-blue-950 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-cyan border-2 text-blue-950 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-white border-2 text-blue-950 focus:outline-none"
            ></textarea>
            <div className="flex justify-center mt-5 mb-20">
                <button className="outline outline-1 outline-white bg-white text-navblue uppercase w-1/2 text-lg hover:bg-navblue hover:text-white py-3 px-4 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
                submit
                </button>
            </div>
          </form>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
import React,{useEffect} from 'react'
import {BsArrowRight} from 'react-icons/bs';
import AOS from "aos";
import "aos/dist/aos.css";

const Sectors = () => {
  const sectors = [
    {
        title: "Government",
        description: "Youth empowerment in the government sector involves strategies to engage and uplift young individuals in public service. Firstly, mentorship programs can be established within government agencies, pairing young professionals with experienced civil servants. ",
        link: "#",
    },
    {
        title: "Private",
        description: "In the private sector, youth empowerment is essential for fostering innovation and growth. Companies can take several approaches to achieve this. Firstly, investing in skill development initiatives benefits both the organization and the young employees.",
        link: "#",
    },
    {
        title: "Entrepreneurship",
        description: "Empowering youth in entrepreneurship is vital for economic growth and innovation. To achieve this, access to capital is crucial. Governments and organizations can provide low-interest loans, grants, and crowdfunding platforms to facilitate young entrepreneurs.",
        link: "#",
    }
  ]

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className='mt-10 px-20 sm:mt-20 md:mt-24 lg:mt-32 mb-20'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {sectors.map((sector) => (
            <div className='bg-white sm:p-1 md:p-6 lg:p-6 text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                <h1 className='font-semibold text-navblue uppercase text-xl md:text-3xl lg:text-3xl mb-10 mt-10'>{sector.title}</h1>
                <p className='text-base text-justify mb-10'>{sector.description}</p>
                <a
                  href={sector.link}
                  className='mb-10 outline outline-1 outline-navblue text-lg hover:bg-navblue hover:text-white py-3 px-4 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center'
                >
                  Explore <BsArrowRight className='ml-2' />
                </a>
                
            </div>
        ))}
    </div>
</section>

  )
}

export default Sectors
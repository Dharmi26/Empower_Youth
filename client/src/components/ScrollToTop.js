import React, { useState, useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className={`duration-100 fixed bottom-4 right-4 ${isVisible? 'opacity-100' : 'opacity-0'}`} onClick={goTop}>
            <span className='text-blue-500 hover:text-blue-400'><BsFillArrowUpCircleFill size="50px"/></span>
        </button>
    );
}

export default ScrollToTop;
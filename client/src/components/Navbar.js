import React, { useState } from 'react'
import logo from '../assets/logo.jpg';
// import { Link } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi';
import {FaUserCircle} from 'react-icons/fa';
import {HiBars3} from 'react-icons/hi2';
import {RxCross1} from 'react-icons/rx';
const Navbar = () => {

    const links = [
        {
            id:1,
            link:"Home",
        },
        {
            id:2,
            link:"About",
        },
        {
            id:3,
            link:"Team",
        },
        {
            id:4,
            link:"Contact",
        },
       ];
       const [nav,setnav]=useState(false);
  return (
    <div>
        <nav className="bg-navblue text-white w-full px-2 h-20 flex flex-row justify-between items-center fixed z-10">
            <div className='flex flex-row items-center'>
                <div className='cursor-pointer'>
                    <img src={logo} alt="EmpowerYouth" width="75"/>
                </div>
                <ul className='hidden md:flex'>
                    {links.map((link)=>(
                        <li
                        key={link.id} 
                        className='px-4 cursor-pointer capitalize'
                        >
                        <a href="#" smooth duration={500}>{link.link}</a>
                        </li>
                    ))}
                </ul>       
            </div>
            <div className='flex flex-row gap-5 justify-between items-center'>
                <div className='flex flex-row items-center'>
                    <div className='bg-white text-navblue w-25 p-2 rounded-l-sm'><BiSearch size="24"/></div>
                    <input
                    className="p-2 rounded-r-sm w-75 outline-none text-black"
                    type="text"
                    placeholder="Search"/>
                </div>
                <div className='hidden md:flex cursor-pointer'>
                    <FaUserCircle size="35"/>
                </div>
                <div className='md:hidden cursor-pointer' onClick={()=>setnav(!nav)}>
                    {nav?(<RxCross1 size="30"/>):(<HiBars3 size="35"/>)}
                </div>
            </div>
        </nav>

        {nav&&(
            <div className='md:hidden bg-navblue text-white h-screen w-full flex flex-col align-middle pt-24'>
                {/* <div className='flex flex-row justify-center align-center py-3'> */}
                    <div className='cursor-pointer flex flex-row gap-3 justify-center pb-5'>
                        <FaUserCircle size="20"/>
                        <p>Login</p>
                    </div>
                    <hr/>
                {/* </div>  */}
                <div className='flex flex-col justify-center pt-5'>
                    <ul className='flex flex-col gap-6 justify-center text-center'>
                            {links.map((link)=>(
                                <li
                                key={link.id} 
                                className='px-4 cursor-pointer capitalize'
                                >
                                <a href="#" smooth duration={500}>{link.link}</a>
                                </li>
                            ))}
                    </ul>
                </div> 
            </div>
            )}
    </div>
  )
}

export default Navbar

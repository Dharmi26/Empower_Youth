import React from 'react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import {BiSearch,BiUserCircle} from 'react-icons/bi';
import {FaUserCircle} from 'react-icons/fa';
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
  return (
    <div>
        <nav className="bg-navblue text-white px-2 h-20 flex flex-row justify-between items-center">
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
                <div className='cursor-pointer'>
                    <FaUserCircle size="35"/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineLogout } from "react-icons/ai";
import Cookies from "universal-cookie";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: 'Sectors',
      dropdownOptions: ['Government', 'Private', 'Entrepreneurship'], // Add dropdown options
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'Clients',
    },
    {
      id: 4,
      link: 'Team',
    },
    {
      id: 5,
      link: 'Contact',
    },
  ];

  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Manage dropdown visibility


  let name = localStorage.getItem("Name");
  console.log(name);

  const cookies = new Cookies();

  const logout = () => {
    cookies.remove("authToken");
    localStorage.clear();
    Navbar();
  };

  return (
    <div>
      <nav className="bg-navblue text-white w-full px-2 h-20 flex flex-row justify-between items-center fixed z-10">
        <div className="flex flex-row items-center">
          <div className="cursor-pointer">
            <Link to="/">
              <img src={logo} alt="EmpowerYouth" width="75" />
            </Link>
          </div>
          <ul className="hidden md:flex">
            {links.map((link) => (
              <li key={link.id} className="px-4 cursor-pointer capitalize">
                {/* Check if the link has dropdown options */}
                {link.dropdownOptions ? (
                  <div
                    onMouseEnter={() => setShowDropdown(true)} // Show dropdown on mouse enter
                    onMouseLeave={() => setShowDropdown(false)} // Hide dropdown on mouse leave
                    className="relative"
                  >
                    <span>{link.link}</span>
                    {showDropdown && (
                      <div className="absolute top-4 left-0 mt-2 bg-white text-black w-40 rounded-lg shadow-lg">
                        <ul>
                          {link.dropdownOptions.map((option, index) => (
                            <Link to={`/${option.toLowerCase()}`}>
                            <li
                              key={index}
                              className="px-4 py-2 cursor-pointer"
                            >
                              {option}
                            </li></Link>
                          ))}
                        </ul>
                        <Link to="/trainings"><li className='px-4 py-2 cursor-pointer'>View All</li></Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <ScrollLink to={link.link} smooth duration={500}>
                    {link.link}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-5 justify-between items-center">
          <div className="flex flex-row items-center">
            <div className="bg-white text-navblue w-25 p-2 rounded-l-sm">
              <BiSearch size="24" />
            </div>
            <input
              className="p-2 rounded-r-sm w-75 outline-none text-black"
              type="text"
              placeholder="Search"
            />
          </div>

          {name!=null?(
            <>
            <div className="hidden md:flex cursor-pointer uppercase font-semibold">
              {name.split(" ")[0]}
            </div>
            <Link onClick={logout}><div className='hidden md:flex cursor-pointer'><AiOutlineLogout size="30"/></div></Link>
            </>
          ):(
            <>
            <div className="hidden md:flex cursor-pointer">
              <Link to="/login">
                <FaUserCircle size="35" />
              </Link>
            </div>
            </>
          )}


          <div
            className="md:hidden cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            {nav ? <RxCross1 size="30" /> : <HiBars3 size="35" />}
          </div>
        </div>
      </nav>

      {nav && (
        <div className="md:hidden bg-navblue text-white h-screen w-full flex flex-col align-middle pt-24">
          {name!=null?(
            <div className="cursor-pointer flex flex-row gap-3 justify-center pb-5">
              <p className='uppercase font-semibold'>{name.split(" ")[0]}</p>
              <Link onClick={logout}><div className='cursor-pointer'><AiOutlineLogout size="20"/></div></Link>
          </div>
          ):(
            <div className="cursor-pointer flex flex-row gap-3 justify-center pb-5">
            <Link to="/login">
              <FaUserCircle size="20" />
              <p>Login</p>
            </Link>
          </div>
          )}
          
          <hr />
          <div className="flex flex-col justify-center pt-5">
            <ul className="flex flex-col gap-6 justify-center text-center">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="px-4 cursor-pointer capitalize"
                >
                  <ScrollLink to={link.link} smooth duration={500}>
                    {link.link}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

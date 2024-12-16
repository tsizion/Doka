import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleMenu = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 bg-white w-full h-24 mx-auto flex justify-between items-center px-4 ${
        scrolling ? "shadow-md" : ""
      }`}
    >
      <h1 className="text-3xl font-bold font-sans text-[#4b4b4b]">ICARE</h1>

      {/* Centered Search Bar */}
      <div className="hidden md:flex flex-grow justify-center">
        <div className="relative lg:left-36 w-3/6">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-9 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#baffe9]"
          />
          <FontAwesomeIcon
            icon={faSearch}
            size="md"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          />
        </div>
      </div>

      <ul className="hidden md:flex items-center">
        <li className="px-4 py-1 hover:bg-[#f7f7f7] hover:rounded-lg">
          Student
        </li>
        <li className="px-4 py-1 hover:bg-[#f7f7f7] hover:rounded-lg">
          Donate
        </li>
        <li className="px-4 py-1 hover:bg-[#f7f7f7] hover:rounded-lg">About</li>
        <li className="px-4 py-1 hover:bg-[#f7f7f7] hover:rounded-lg">
          <Link to="/referral">Referral</Link>
        </li>
        <li>
          <button className="bg-[#00df9a] hover:bg-[#007b56] hover:text-[#e0e0e0] px-3 py-1 rounded-lg">
            Login
          </button>
        </li>
        <li>
          <button className="ml-1 bg-[#dcdcdc] border-x-black hover:bg-[#007b56] hover:text-[#e0e0e0] px-3 py-1 rounded-lg">
            <Link to="/signup">SignUp</Link>
          </button>
        </li>
      </ul>

      <div onClick={handleMenu} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">ICARE</h1>
        <div className="px-4">
          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-9 py-2 pl-10 pr-4 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#baffe9]"
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="md"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            />
          </div>
        </div>
        <ul className="pt-2 uppercase">
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            Student
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            Donate
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            About
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            <Link to="/referral">Referral</Link>
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            <button>Login</button>
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 bg-white w-full h-24 mx-auto flex justify-between items-center px-4 ${
        scrolling ? "shadow-md" : ""
      }`}
    >
      <h1 className="text-3xl font-bold font-sans text-[#00df9a]">Doka</h1>
      <ul className="hidden md:flex items-center">
        <li className="px-4 py-1 hover:bg-[#f7f7f7] hover:rounded-lg">
          <div>
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              className="text-gray-600 mr-3"
            />{" "}
            <p className=" inline">Serach</p>
          </div>
        </li>
        <li className="px-4 py-1 hover:bg-[#f7f7f7]  hover:rounded-lg ">
          Fundraiser
        </li>
        <li className="px-4 py-1 hover:bg-[#f7f7f7] hover:rounded-lg">
          Donate
        </li>
        <li className="px-4 py-1 hover:bg-[#f7f7f7] hover:rounded-lg">About</li>
        <li className="">
          <button className="bg-[#00df9a] hover:bg-[#007b56] hover:text-[#e0e0e0] px-3 py-1 rounded-lg">
            SignUp
          </button>
        </li>
        <li className="">
          <button className=" ml-1 bg-[#dcdcdc] border-x-black hover:bg-[#007b56] hover:text-[#e0e0e0] px-3 py-1 rounded-lg">
            SignIn
          </button>
        </li>
      </ul>
      <div onClick={handleMenu} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">Doka</h1>
        <ul className="pt-10 uppercase">
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            <div>
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                className="text-gray-600 mr-3"
              />{" "}
              <p className=" inline">Serach</p>
            </div>
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#282828]">
            Fundraiser
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            Donate
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            About
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            <button>SignUp</button>
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#2828285d]">
            SignIn
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

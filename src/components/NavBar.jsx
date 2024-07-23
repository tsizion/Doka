/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setnav] = useState(false);
  const handlemenu = () => {
    setnav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto">
      <h1 className="w-full text-3xl font-bold font-sans text-[#00df9a] ">
        Doka
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Fundraiser</li>
        <li className="p-4">Donate</li>
        <li className="p-4">About</li>
        <li className="p-4">
          <button>SignUp</button>
        </li>
        <li className="p-4">SignIn</li>
      </ul>
      <div onClick={handlemenu} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r  border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Doka</h1>

        <ul className="pt-10 uppercase p4">
          <li className="p-4 border-b border-gray-600">Fundraiser</li>
          <li className="p-4 border-b border-gray-600">Donate</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">
            <button>SignUp</button>
          </li>
          <li className="p-4 border-b border-gray-600">SignIn</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

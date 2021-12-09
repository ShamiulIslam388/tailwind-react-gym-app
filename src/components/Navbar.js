import React, { useState } from "react";
import { BiRun } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

import SlideNavigation from "../utilities/SlideNavigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="shadow-sm sticky top-0 w-full bg-white">
      <div className="container py-6 flex items-center justify-between">
        <div className="flex items-center font-bold cursor-pointer">
          <BiRun className="text-lg mr-1 font-bold" />
          GYM REACT
        </div>
        <nav className="hidden md:flex flex-row flex-1 justify-end">
          <Link to="/" className="ml-4">
            Home
          </Link>
          <Link to="/about" className="ml-4">
            AboutProject
          </Link>
          <Link to="/gallery" className="ml-4">
            Gallery
          </Link>
          <Link to="/register" className="ml-4">
            Register
          </Link>
          <Link to="/contact" className="ml-4">
            Contact
          </Link>
          <Link to="/login" className="ml-4">
            Login
          </Link>
        </nav>
        {isOpen ? (
          <div
            className="font-bold text-3xl cursor-pointer md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <MdClose />
          </div>
        ) : (
          <div
            className="font-bold text-3xl cursor-pointer md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <BiMenu />
          </div>
        )}
      </div>
      <SlideNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;

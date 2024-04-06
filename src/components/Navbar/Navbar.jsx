import React from "react";
import { Link } from "react-router-dom";
// import icons
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar bg-neutral-800 h-8 flex items-center justify-between px-20 lg:hidden">
      {/* left side  */}
      <div className="social-media w-28 flex justify-between">
        <a href="mailto:karamizahra27k@gmail.com">
          <MdEmail className="text-white hover:text-gray-400" />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram className="text-white hover:text-gray-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/karamizahra"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn className="text-white hover:text-gray-400" />
        </a>
        <a href="https://www.pinterest.com">
          <FaPinterestP className="text-white hover:text-gray-400" />
        </a>
      </div>
      {/* right side  */}
      <div className="about-policy flex">
        <Link
          to="/Haru-Fashion"
          className="text-white text-sm mr-7 hover:text-gray-400"
        >
          About Us
        </Link>
        <Link
          to="/Haru-Fashion"
          className="text-white text-sm hover:text-gray-400"
        >
          Our Policy
        </Link>
      </div>
    </div>
  );
}

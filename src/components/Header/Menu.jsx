import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Login from "../Login/Login";
// import icons
import { LuSearch } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiMenu2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaPinterestP, FaInstagram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Menu() {
  // toggle menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // toggle sticky mode
  const [isSticky, setIsSticky] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  });

  // toggle search button
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // toggle login button
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <React.Fragment>
      {isMenuOpen ? (
        <div
          className={`menu bg-white w-[28rem] h-screen transition-all duration-600 fixed bottom-0 top-0 p-8 sm:w-80 ${
            isMenuOpen ? "left-0" : "-left-[28rem]"
          }`}
        >
          {/* logo and close icon  */}
          <div className="logo-close-menu flex justify-between items-center mb-8">
            <img src="./images/site-logo.svg" alt="logo" className="logo h-6" />
            <RxCross2
              className="text-2xl cursor-pointer transition-all duration-500"
              onClick={toggleMenu}
            />
          </div>

          {/* search bar  */}
          <div className="search-bar flex items-center border-b-2 border-gray-500 pb-1 mb-10">
            <Link to="/Haru-Fashion">
              <LuSearch className="text-gray-500 mr-3 cursor-pointer" />
            </Link>
            <input
              type="text"
              placeholder="Search ..."
              className="text-gray-500 bg-transparent outline-none"
            />
          </div>

          {/* items  */}
          <div className="products-menu border-b-2 border-gray-500 pb-4 cursor-pointer">
            <Link to="/Haru-Fashion/Men" className="text-xl block mb-6 hover:text-gray-400">
              Men
            </Link>
            <Link
              to="/Haru-Fashion/Women"
              className="text-xl block mb-6 hover:text-gray-400"
            >
              Women
            </Link>
            <Link
              to="/Haru-Fashion/Accessories"
              className="text-xl block mb-6 hover:text-gray-400"
            >
              Accessories
            </Link>
            <Link to="/Haru-Fashion/New" className="text-xl block mb-6 hover:text-gray-400">
              New
            </Link>
            <Link to="/Haru-Fashion" className="text-xl block mb-6 hover:text-gray-400">
              About Us
            </Link>
            <Link to="/Haru-Fashion" className="text-xl block mb-6 hover:text-gray-400">
              Contact Us
            </Link>
          </div>

          {/* login  */}
          <div
            onClick={() => {
              toggleLogin();
              toggleMenu();
            }}
            className="login flex justify-between items-center border-b-2 border-gray-500 py-5 cursor-pointer hover:text-gray-400"
          >
            <p>Login</p>
            <FaRegUser className="ml-10 text-xl" />
          </div>
          {isLoginOpen && <Login toggleLogin={toggleLogin} />}

          {/* wishlist  */}
          <Link
            to="/Haru-Fashion/Wishlist"
            className="wishlist flex justify-between items-center border-b-2 border-gray-500 py-5 mb-6 cursor-pointer hover:text-gray-400"
          >
            <p>Wishlist</p>
            <FaRegHeart className="ml-10 text-xl" />
          </Link>

          {/* social media  */}
          <div className="social-media flex justify-evenly cursor-pointer">
            <a
              href="mailto:karamizahra27k@gmail.com"
              className="bg-gray-500 rounded-md p-4 hover:bg-gray-600"
            >
              <MdEmail className="text-white" />
            </a>
            <a
              href="https://www.instagram.com"
              className="bg-gray-500 rounded-md p-4 hover:bg-gray-600"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/karamizahra"
              rel="noreferrer"
              target="_blank"
              className="bg-gray-500 rounded-md p-4 hover:bg-gray-600"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="https://www.pinterest.com"
              className="bg-gray-500 rounded-md p-4 hover:bg-gray-600"
            >
              <FaPinterestP className="text-white" />
            </a>
          </div>
        </div>
      ) : (
        <div
          className={`menu h-20 flex items-center justify-between mx-auto px-32 lg:px-14 sm:px-4 ${
            isSticky ? "fixed top-0 left-0 z-40 bg-white w-full shadow" : ""
          }`}
        >
          {/* left side  */}
          <div className="products-menu flex lg:hidden">
            <Link to="/Haru-Fashion/Men" className="mr-5 hover:text-gray-500">
              Men
            </Link>
            <Link to="/Haru-Fashion/Women" className="mr-5 hover:text-gray-500">
              Women
            </Link>
            <Link to="/Haru-Fashion/Accessories" className="mr-5 hover:text-gray-500">
              Accessories
            </Link>
            <Link to="/Haru-Fashion/New" className="mr-5 hover:text-gray-500">
              New
            </Link>
          </div>
          {/* lg size menu  */}
          <div className="open-menu-btn hidden lg:flex">
            <RiMenu2Fill
              className="text-2xl font-black mr-24 sm:mr-16"
              onClick={toggleMenu}
            />
          </div>
          {/* logo - middle part  */}
          <div>
            <img src="./images/logo.svg" alt="logo" className="logo h-7" />
          </div>
          {/* right side  */}
          {/* search  */}
          <div className="flex cursor-pointer">
            <div onClick={toggleSearch}>
              <LuSearch className="ml-10 text-xl hover:text-gray-500 lg:hidden" />
            </div>
            {isSearchOpen && <Search toggleSearch={toggleSearch} />}
            {/* login  */}
            <div onClick={toggleLogin}>
              <FaRegUser className="ml-10 text-xl hover:text-gray-500 lg:hidden" />
            </div>
            {isLoginOpen && <Login toggleLogin={toggleLogin} />}
            {/* wishlist  */}
            <Link to="/Haru-Fashion/Wishlist">
              <FaRegHeart className="ml-10 text-xl hover:text-gray-500 sm:hidden" />
            </Link>
            {/* cart  */}
            <Link to="/Haru-Fashion/Cart">
              <HiOutlineShoppingBag className="ml-10 text-xl hover:text-gray-500 sm:text-2xl" />
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

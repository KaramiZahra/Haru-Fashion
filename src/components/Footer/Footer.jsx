import React from "react";
import { Link } from "react-router-dom";
// import icons
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer">
      {/* footer  */}
      <div className="footer-container grid grid-cols-4 justify-between items-start py-14 mx-32 lg:mx-14 md:grid-cols-2 sm:grid-cols-1 sm:mx-7">
        <div className="company">
          <p className="text-gray-500 text-lg my-3">Company</p>
          <Link
            to="/Haru-Fashion"
            className="block mb-3 hover:underline sm:text-sm"
          >
            About Us
          </Link>
          <Link
            to="/Haru-Fashion"
            className="block mb-3 hover:underline sm:text-sm"
          >
            Contact Us
          </Link>
          <Link
            to="/Haru-Fashion"
            className="block mb-3 hover:underline sm:text-sm"
          >
            Store Location
          </Link>
          <Link
            to="/Haru-Fashion"
            className="block mb-3 hover:underline sm:text-sm"
          >
            Careers
          </Link>
        </div>
        <div className="help">
          <p className="text-gray-500 text-lg my-3">Help</p>
          <Link
            to="/Haru-Fashion"
            className="block mb-3 hover:underline sm:text-sm"
          >
            Order Tracking
          </Link>
          <Link
            to="/Haru-Fashion"
            className="block mb-3 hover:underline sm:text-sm"
          >
            FAQs
          </Link>
          <Link
            to="/Haru-Fashion"
            className="block mb-3 hover:underline sm:text-sm"
          >
            Privacy & Policy
          </Link>
          <Link
            to="/Haru-Fashion"
            className="block mb-3 hover:underline sm:text-sm"
          >
            Terms & onditions
          </Link>
        </div>
        <div className="store">
          <p className="text-gray-500 text-lg my-3">Store</p>
          <Link
            to="/Haru-Fashion/Women"
            className="block mb-3 hover:underline sm:text-sm"
          >
            Women
          </Link>
          <Link
            to="/Haru-Fashion/Men"
            className="block mb-3 hover:underline sm:text-sm"
          >
            Men
          </Link>
          <Link
            to="/Haru-Fashion/Accessories"
            className="block mb-3 hover:underline sm:text-sm"
          >
            Accessories
          </Link>
        </div>
        <div className="contact">
          <p className="text-gray-500 text-lg my-3">Keep In Touch</p>
          <p className="mb-3 sm:text-sm">
            No(7), Ground Floor, Malikha Building, Yadanar Road, Thingangyun,
            Yangon
          </p>
          <p className="mb-3 sm:text-sm">+95 95 096 051</p>
          <p className="mb-3 sm:text-sm">
            Open All Days <br />- 9:00 AM ~ 11:00 PM
          </p>
        </div>
      </div>
      {/* social media  */}
      <div className="footer-social-media flex justify-center mb-4">
        <a href="mailto:karamizahra27k@gmail.com">
          <MdEmail className="text-gray-400 text-lg mr-4 hover:text-gray-500" />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram className="text-gray-400 text-lg mr-4 hover:text-gray-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/karamizahra"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn className="text-gray-400 text-lg mr-4 hover:text-gray-500" />
        </a>
        <a href="https://www.pinterest.com">
          <FaPinterestP className="text-gray-400 text-lg hover:text-gray-500" />
        </a>
      </div>
      {/* copyright  */}
      <div className="copyright text-center border-t-2">
        <p className="text-sm py-2 mx-3 sm:text-xs">
          &copy;2024 All rights reserved | made with{" "}
          <FaRegHeart className="inline-block" /> by{" "}
          <span className="text-gray-500">ZK</span>
        </p>
      </div>
    </div>
  );
}

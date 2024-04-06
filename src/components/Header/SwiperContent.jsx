import React from "react";
import { Link } from "react-router-dom";
import { Resize } from "../../Utils";

export default function SwiperContent({ img, imgM, title, content }) {
  return (
    <React.Fragment>
      {/* background image */}
      <div
        className="header-background-container w-full h-[96vh] bg-center bg-cover flex justify-start items-center lg:h-screen md:h-[78vh] sm:bg-top sm:justify-center sm:items-end"
        style={{ backgroundImage: `url(${Resize(window) > 576 ? img : imgM})` }}
      >
        {/* text container  */}
        <div className="header-text-container w-1/3 z-20 ml-32 sm:bg-[rgba(255,255,255,0.7)] sm:w-48 sm:text-center sm:p-6 sm:mb-14 sm:ml-0">
          {/* title  */}
          <p className="header-title bg-black text-white text-sm inline-block rounded-lg px-1 sm:bg-[rgba(0,0,0,0.8)] sm:text-[0.7rem] sm:rounded-sm">
            {title}
          </p>
          {/* content  */}
          <h1 className="header-content font-medium text-6xl leading-[4rem] my-4 sm:text-2xl sm:my-7">
            {content}
          </h1>
          {/* button  */}
          <button className="header-shop-btn w-24 relative cursor-pointer after:inline-block after:bg-black after:w-0 after:h-0.5 after:-mb-1.5 after:ml-2 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-20 sm:text-sm">
            <Link to="/">Shop Now</Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

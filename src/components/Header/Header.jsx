import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import SwiperContent from "./SwiperContent";
import { swiperContentDB } from "../../Data";
import { Resize } from "../../Utils";
import "./Header.css";
// import swiper
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

export default function Header() {
  return (
    <div className="header relative">
      {/* top nav menu  */}
      <div className="menu absolute top-0 left-0 right-0 z-10">
        <Menu />
      </div>
      {/* header swiper  */}
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        freeMode={true}
        loop={true}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <SwiperContent {...swiperContentDB[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent {...swiperContentDB[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent {...swiperContentDB[2]} />
        </SwiperSlide>
      </Swiper>

      {/* collections' banner  */}
      <div className="collection-banners-container border-b-2 border-gray-200 mb-14">
        <div className="collection-banners- grid items-center justify-between grid-cols-4 gap-8 my-14 mx-32 lg:grid-cols-2 md:mx-14 sm:grid-cols-1">
          <Link
            to="/Haru-Fashion/New"
            className="collection-banner col-span-2 relative overflow-hidden cursor-pointer sm:col-span-1"
          >
            <img
              src={
                Resize(window) > 576
                  ? "./images/banner_minipage1.jpg"
                  : "./images/banner_minipage1-tablet.jpg"
              }
              alt="banner"
              className="transition-all duration-700 hover:brightness-50 hover:scale-110"
            />
            <div className="overlayBorder1 w-0 h-0 absolute right-10 bottom-10"></div>
            <div className="overlayBorder2 w-0 h-0 absolute left-10 top-10"></div>
            <p className="text-overlay bg-white inline-block p-3 absolute right-2 bottom-2 hover:bg-black hover:text-white sm:text-sm">
              New Arrivals
            </p>
          </Link>
          <Link
            to="/Haru-Fashion/Women"
            className="collection-banner relative cursor-pointer overflow-hidden"
          >
            <img
              src="./images/banner_minipage2.jpg"
              alt="banner"
              className="transition-all duration-700 hover:brightness-50 hover:scale-110"
            />
            <div className="overlayBorder1 w-0 h-0 absolute right-10 bottom-10"></div>
            <div className="overlayBorder2 w-0 h-0 absolute left-10 top-10"></div>
            <p className="text-overlay bg-white inline-block p-3 absolute right-2 bottom-2 hover:bg-black hover:text-white sm:text-sm">
              Women Collection
            </p>
          </Link>
          <Link
            to="/Haru-Fashion/Men"
            className="collection-banner relative cursor-pointer overflow-hidden"
          >
            <img
              src="./images/banner_minipage3.jpg"
              alt="banner"
              className="transition-all duration-700 hover:brightness-50 hover:scale-110"
            />
            <div className="overlayBorder1 w-0 h-0 absolute right-10 bottom-10"></div>
            <div className="overlayBorder2 w-0 h-0 absolute left-10 top-10"></div>
            <p className="text-overlay bg-white inline-block p-3 absolute right-2 bottom-2 hover:bg-black hover:text-white sm:text-sm">
              Men Collection
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

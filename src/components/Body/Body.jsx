import React from "react";
import { Link } from "react-router-dom";
import Items from "../Store/Items/Items";
import { bestSellingsDB } from "../../Data";
import { featuredProductsDB } from "../../Data";

export default function Body() {
  return (
    <div className="body">
      {/* best sellings */}
      <div className="best-selling-container mx-32 mb-20 lg:mx-14 sm:mx-7">
        <div className="best-selling-text-container text-center mb-8">
          <h1 className="text-3xl font-medium mb-4">Best Selling</h1>
          <p>
            Here are some of our best selling products. Explore <br /> yourself
            in the latest trends.
          </p>
        </div>
        <div className="items-container grid grid-cols-4 gap-11 md:grid-cols-2 sm:gap-5">
          {bestSellingsDB.map((item) => (
            <Items key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* testimonial  */}
      <div className="testimonial-container bg-slate-200 h-96 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-medium">Testimonial</h1>
        <p className="testimonial-desc text-gray-700 max-w-[37rem] my-7 mx-3 sm:text-sm">
          provident neque obcaecati, quo consequatur delectus s ullam iusto,
          maiores facere consecte natus ullam iusto.
        </p>
        <h3 className="testimonial-name text-gray-600">David</h3>
        <p className="testimonial-position text-gray-500">(Business Owner)</p>
      </div>

      {/* featured products  */}
      <div className="featured-products-container border-b-2 text-center py-12">
        <h1 className="text-2xl font-medium">Featured Products</h1>
        <div className="featured-products mx-32 lg:mx-14 sm:mx-7">
          <div className="products-item-container text-left grid grid-cols-5 gap-8 mt-10 mb-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-5">
            {featuredProductsDB.map((item) => (
              <Items key={item.id} {...item} />
            ))}
          </div>
          <Link to="/Haru-Fashion/New">
            <button className="featured-products-btn bg-black text-white px-4 py-2 hover:bg-gray-800">
              See More ...
            </button>
          </Link>
        </div>
      </div>

      {/* our shop  */}
      <div className="our-shop-container border-b-2 py-12">
        <div className="our-shop-text-img-container flex flex-col text-center justify-center items-center mx-32 lg:mx-14 sm:mx-7">
          <h1 className="text-2xl font-medium">Our Shop</h1>
          <p className="py-7 max-w-[40rem] sm:text-sm">
            Stop by our stores to learn the stories behind our products, get a
            personal styling session, or shop the latest in person. See our
            store locations.
          </p>
          <img
            src="./images/ourshop.png"
            alt="our shop"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

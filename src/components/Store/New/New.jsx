import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { featuredProductsDB } from "../../../Data";
import Items from "../Items/Items";

export default function New() {
  let navigate = useNavigate();

  return (
    <div className="New">
      <h1 className="text-3xl font-bold text-center my-20 sm:text-2xl">
        New Fashion
      </h1>
      {/* back button  */}
      <div
        className="new-back w-4/5 text-left cursor-pointer mb-3 ml-32 md:ml-20 sm:ml-7"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack className="inline-block text-lg mb-0.5" />
        <p className="inline-block ml-2">Back</p>
      </div>

      {/* new container */}
      <div className="new-container grid grid-cols-5 gap-10 text-left mx-32 lg:grid-cols-4 md:grid-cols-3 md:mx-20 sm:grid-cols-2 sm:mx-7">
        {featuredProductsDB.map((newProduct) => (
          <Items key={newProduct.id} {...newProduct} />
        ))}
      </div>
    </div>
  );
}

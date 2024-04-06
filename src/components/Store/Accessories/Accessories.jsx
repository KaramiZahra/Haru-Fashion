import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { accessoriesDB } from "../../../Data";
import Items from "../Items/Items";

export default function Accessories() {
  let navigate = useNavigate();

  return (
    <div className="Accessories">
      <h1 className="text-3xl font-bold text-center my-20 sm:text-2xl">
        Accessories
      </h1>
      {/* back button  */}
      <div
        className="accessories-back w-4/5 text-left cursor-pointer mb-3 ml-32 md:ml-20 sm:ml-7"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack className="inline-block text-lg mb-0.5" />
        <p className="inline-block ml-2">Back</p>
      </div>

      {/* accessories container */}
      <div className="accessories-container grid grid-cols-5 gap-10 text-left mx-32 lg:grid-cols-4 md:grid-cols-3 md:mx-20 sm:grid-cols-2 sm:mx-7">
        {accessoriesDB.map((accessory) => (
          <Items key={accessory.id} {...accessory} />
        ))}
      </div>
    </div>
  );
}

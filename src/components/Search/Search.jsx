import React from "react";
import { RxCross2 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";

export default function Search({ toggleSearch }) {
  return (
    <div className="Search w-full bg-white shadow absolute -top-10 left-0 z-50">
      <div className=" w-3/6 mx-auto pt-10 pb-14">
        <div className="flex justify-end text-2xl">
          <RxCross2 className="text-gray-600" onClick={toggleSearch} />
        </div>
        <div className="search-container flex items-center border-b-2 border-gray-400 pb-2 mt-9">
          <LuSearch className="text-gray-400 text-2xl mr-2" />
          <input
            type="text"
            placeholder="Search ..."
            className="text-2xl outline-none"
          />
        </div>
      </div>
    </div>
  );
}

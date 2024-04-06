import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlistItem } from "../Cart/cartContext";
// import icons
import { IoIosArrowBack } from "react-icons/io";

export default function Wishlist() {
  // handle back button
  let navigate = useNavigate();

  // handle items
  const { wishlistItem, removeWishlistItem, clearWishlistItems } =
    useWishlistItem();
  // remove items
  const removeFromWishlist = (id) => {
    removeWishlistItem(id);
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItem));
  };

  return (
    <div className="Wishlist flex flex-col justify-center items-center w-full pt-20">
      <h1 className="text-4xl font-bold mb-10 sm:text-3xl">Wishlist</h1>
      {/* wishlist back  */}
      <div
        className="wishlist-back w-4/5 cursor-pointer mb-3 sm:text-xs"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack className="inline-block text-lg mb-0.5" />
        <p className="inline-block ml-2">Continue Shopping</p>
      </div>
      {/* wishlist title  */}
      <div className="wishlist-title w-4/5 flex justify-between border-b-2 border-t-2 p-3 sm:text-sm">
        <div className="md:hidden">Product Image</div>
        <div className="md:hidden">Product Name</div>
        <div className="md:hidden">Unit Price</div>
        <div className="hidden md:inline-block">Product Details</div>
        <div className="">Actions</div>
      </div>
      {/* wishlist container  */}
      <div className="wishlist-container w-4/5">
        {wishlistItem.map((item) => (
          <div
            key={item.id}
            className="wishlist-item flex justify-between items-center border-b-2 p-5"
          >
            <div className="md:flex md:items-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-28 h-32 md:w-10 md:h-16"
              />
              {/* md size and smaller name and price  */}
              <div className="wishlist-name-price md:ml-3 md:text-sm sm:text-xs">
                <div className="hidden md:block">{item.name}</div>
                <div className="hidden md:block">$ {item.price}</div>
              </div>
            </div>
            {/* lg size and bigger name and price  */}
            <div className="md:hidden">{item.name}</div>
            <div className="md:hidden">$ {item.price}</div>
            <div className="wishlist-add-remove flex flex-col items-center justify-center">
              <button className="w-28 border border-black bg-black text-white text-sm py-1 mb-3 hover:text-gray-400 md:w-16 md:text-xs sm:py-0.5 sm:w-14">
                Add
              </button>
              <button
                className="w-28 border border-black bg-black text-white text-sm py-1 hover:text-gray-400 md:w-16 md:text-xs sm:py-0.5 sm:w-14"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* wishlist button  */}
      <div className="wishlist-btn w-4/5 sm:text-sm">
        <button
          className="border border-black py-2 px-5 mt-7 hover:bg-black hover:text-white sm:py-1 sm:px-3"
          onClick={clearWishlistItems}
        >
          Clear Wishlist
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useWishlistItem } from "../../Cart/cartContext";
import { useCartItem } from "../../Cart/cartContext";
import { FaRegHeart } from "react-icons/fa6";

export default function Items(item) {
  const { id, name, price, img, imgH } = item;

  // handle images hover effect
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // handle add to wishlist button
  const { addWishlistItem } = useWishlistItem();

  const handleAddToWishlist = () => {
    const wishlistItem = { id, name, price, img, imgH };
    addWishlistItem(wishlistItem);
  };

  // handle add to cart button
  const { addCartItem } = useCartItem();

  const handleAddToCart = () => {
    const cartItem = { id, name, price, img, imgH };
    addCartItem(cartItem);
  };

  return (
    <React.Fragment>
      <div className="item-container mb-8" id={id}>
        {/* image container  */}
        <div
          className={`item-image-container relative overflow-hidden mb-4 ${isHovered ? 'border border-gray-300' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={isHovered ? imgH : img}
            alt={name}
            className="w-full h-full transition-transform duration-1000 transform hover:scale-105"
          />
          {/* wishlist icon  */}
          <FaRegHeart
            className="absolute top-3 right-3 text-lg cursor-pointer"
            onClick={handleAddToWishlist}
          />
          {/* cart button  */}
          <div
            className={`item-cart-btn absolute z-10 transition-all duration-700  ${
              isHovered ? "bottom-4 sm:bottom-2" : "translate-y-12"
            }`}
          >
            <button
              className="bg-white text-gray-500 py-3 px-5 hover:bg-black hover:text-white sm:text-[0.6rem] sm:px-2"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        {/* text area  */}
        <div className="item-name-price-container">
          <p className="name sm:text-sm">{name}</p>
          <p className="price text-gray-500 text-sm mt-1 sm:text-xs">
            $ {price}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

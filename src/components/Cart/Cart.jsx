import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartItem } from "../Cart/cartContext";
// import icons
import { IoIosArrowBack } from "react-icons/io";

export default function Cart() {
  // handle back button
  let navigate = useNavigate();

  // handle items
  const {
    cartItem,
    removeCartItem,
    clearCartItems,
    updateCartItemQuantity,
    calculateTotalSum,
  } = useCartItem();
  // remove items
  const removeFromCart = (id) => {
    removeCartItem(id);
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  };

  // handle item quantity
  const handleDecrement = (id) => {
    const item = cartItem.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(id, item.quantity - 1);
    }
  };

  const handleIncrement = (id) => {
    const item = cartItem.find((item) => item.id === id);
    if (item) {
      updateCartItemQuantity(id, item.quantity + 1);
    }
  };

  return (
    <div className="Cart flex flex-col justify-center items-center w-full pt-20">
      <h1 className="text-4xl font-bold mb-10 sm:text-3xl">Shopping Cart</h1>
      {/* cart back  */}
      <div
        className="cart-back w-4/5 cursor-pointer mb-3 sm:text-xs"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack className="inline-block text-lg mb-0.5" />
        <p className="inline-block ml-2">Continue Shopping</p>
      </div>
      {/* cart title  */}
      <div className="cart-title w-4/5 flex justify-between border-b-2 border-t-2 p-3 sm:text-sm">
        <div>Product Details</div>
        <div className="sm:hidden">Quantity</div>
        <div className="sm:hidden">Remove</div>
        <div className="hidden sm:inline-block">
          <div>Quantity</div>
          <div>Remove</div>
        </div>
      </div>
      {/* cart container  */}
      <div className="wishlist-container w-4/5">
        {cartItem.map((item) => (
          <div
            key={item.id}
            className="cart-item flex justify-between items-center border-b-2 p-5"
          >
            <div className="flex items-center">
              {/* cart image  */}
              <img
                src={item.img}
                alt={item.name}
                className="w-28 h-32 md:w-10 md:h-16"
              />
              {/* cart name and price  */}
              <div className="cart-name-price ml-3 sm:text-xs">
                <div className="block">{item.name}</div>
                <div className="block">
                  $ {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
            {/* cart quantity - remove button  */}
            <div className="cart-quantity-remove-btn">
              <div className="cart-quantity flex cursor-pointer">
                <div
                  className="border py-1 px-2 sm:py-0 sm:px-1"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </div>
                <div className="border py-1 px-2 sm:py-0 sm:px-1.5">
                  {item.quantity}
                </div>
                <div
                  className="border py-1 px-2 sm:py-0 sm:px-1"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </div>
              </div>

              {/* sm size remove button  */}
              <button
                className="cart-remove-btn border border-black bg-black text-white hover:text-gray-400 text-xs w-16 py-0.5 mt-4 hidden sm:block"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
            {/* lg size remove button  */}
            <button
              className="cart-remove-btn w-28 border border-black bg-black text-white text-sm py-2 hover:text-gray-400 sm:hidden"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {/* cart button - total price */}

      <div className="cart-total w-4/5 border border-black p-5 mt-10">
        {/* cart price  */}
        <div className="flex justify-between items-center text-xl sm:text-lg sm:block">
          <h2>Cart Total</h2>
          <h2>$ {calculateTotalSum().toFixed(2)}</h2>
        </div>
        {/* cart buttons  */}
        <div className="cart-btn">
          <button className="cart-total-btn w-full text-white bg-black border border-black p-2 mt-10 hover:bg-gray-700 hover:border-gray-700 hover:text-gray-200 sm:text-sm sm:mt-7">
            Proceed to Checkout
          </button>
          <button
            className="cart-clear-btn w-full border border-black py-2 px-5 mt-4 hover:bg-gray-300 hover:border-gray-300 hover:text-gray-600 sm:text-sm"
            onClick={clearCartItems}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export default function Login({ toggleLogin }) {
  return (
    <div className="Login bg-white shadow w-[27rem] h-96 absolute top-32 left-1/3 z-50 p-4 md:-ml-32 sm:w-80 sm:-ml-24 sm:text-xs">
      <div className="close-login-btn flex justify-end text-2xl">
        <RxCross2 className="text-gray-600 mb-4" onClick={toggleLogin} />
      </div>
      <div className="login-container text-center">
        <h1 className="text-2xl font-medium mb-8">Login</h1>
        <input
          type="email"
          placeholder="Email Address"
          required
          className="border-2 border-gray-400 outline-none w-full h-10 p-3 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="border-2 border-gray-400 outline-none w-full h-10 p-3 mb-4"
        />
        <div className="remember-password flex justify-between items-center text-sm mb-4 sm:text-xs">
          <div className="remember-me">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="text-gray-400 ml-2">
              Remember me?
            </label>
          </div>
          <Link
            to="/Haru-Fashion"
            className="forgot-password text-gray-500 hover:text-gray-400"
          >
            Forgot your password?
          </Link>
        </div>
        <Link to="/Haru-Fashion">
          <button className="login-btn bg-black text-white w-full h-10 mb-4">
            Login
          </button>
        </Link>
        <div className="login-register flex items-center justify-center">
          <p className="text-gray-500 mr-2">Not a member?</p>
          <Link to="/Haru-Fashion" className="hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

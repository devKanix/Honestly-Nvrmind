import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex justify-around mt-5 mb-5">
      <h1 className="text-xs font-bold text-white mt-7 sm:mt-4 sm:text-4xl">
        <a href="/">Honestly-Nvrmind</a>
      </h1>
      <div className="flex gap-2 sm:gap-9 mt-5">
        <div className="flex text-xs sm:text-lg text-white list-none gap-2 sm:gap-9 mt-2 sm:mt-0.5 ">
          <li className="transition-text duration-200 hover:text-yellow-300 cursor-pointer"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}>
            CATEGORIES
            {showDropdown && (
                <div className="absolute mt-2">
                  <div className="absolute -top-2 left-4 w-0 h-0 
                    border-l-[8px] border-l-transparent 
                    border-b-[8px] border-b-white/30 
                    border-r-[8px] border-r-transparent">
                  </div>
                  <ul className="backdrop-blur-md bg-white/30 w-[100px] p-1 rounded-lg">
                    <li className="text-white transition-text duration-200 hover:text-yellow-400">
                      <Link to="mens">Mens</Link>
                    </li>
                    <li className="text-white transition-text duration-200 hover:text-yellow-400">
                      <Link to="womens">Womens</Link>
                    </li>
                    <li className="text-white transition-text duration-200 hover:text-yellow-400">
                      <Link to="kids">Kids</Link>
                    </li>
                  </ul>
                </div>
            )}
          </li>
          <li className="transition-text duration-200 hover:text-yellow-300">
            <Link to="fashion">FASHION</Link>
          </li>
        </div>
        <div>
        <Link to="/signin">
          <button className="bg-white text-xs w-20 rounded h-7 transition-bg duration-200 hover:bg-yellow-300">
          SIGN IN
          </button>
          </Link>
        </div>
        <div>
        <Link to="/signup">
          <button className="bg-white text-xs w-20 rounded h-7 transition-bg duration-200 hover:bg-yellow-300">
          SIGN UP
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
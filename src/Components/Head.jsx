import React from "react";
import {
  HAMBURGER,
  SEARCH_ICON,
  USER_ICON,
  YOU_TUBE_LOGO,
} from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  const despatch = useDispatch();
  const handleIsMenuOpen = () => {
    despatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col items-center shadow-lg py-2 px-4 bg-gray-100">
      <div className="col-span-1 flex">
        <img
          className="h-8 mr-3 cursor-pointer"
          src={HAMBURGER}
          alt="Hamburger"
          onClick={() => handleIsMenuOpen()}
        />
        <img
          className="h-8 cursor-pointer"
          src={YOU_TUBE_LOGO}
          alt="youtube Logo"
        />
      </div>
      <div className="col-span-10 justify-center items-center flex">
        <input
          className="border outline-none border-gray rounded-l-full w-[500px] py-2 px-8"
          type="text"
          placeholder="Search"
        />
        <button className="border border-l-0 outline-none border-gray rounded-r-full py-2 px-6 bg-gray-200">
          <img className="h-6" src={SEARCH_ICON} alt="Search" />
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="User" />
      </div>
    </div>
  );
};

export default Head;

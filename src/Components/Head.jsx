import React, { useEffect, useState } from "react";
import {
  HAMBURGER,
  SEARCH_ICON,
  USER_ICON,
  YOUTUBE_SEARCH_API,
  YOU_TUBE_LOGO,
} from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchData, setShowSearchData] = useState(null);
  // console.log(showSearchData);
  useEffect(() => {
    fetchSearchApi();
  }, [searchQuery]);

  const fetchSearchApi = async () => {
    const searchApiData = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await searchApiData.json();
    // console.log(json[1]);
    setShowSearchData(json[1]);
  };
  const despatch = useDispatch();
  const handleIsMenuOpen = () => {
    despatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col items-center shadow-lg py-2 px-4 bg-gray-100">
      <div className="col-span-1 flex items-center">
        <img
          className="h-8 mr-3 cursor-pointer"
          src={HAMBURGER}
          alt="Hamburger"
          onClick={() => handleIsMenuOpen()}
        />
        <a href="http://localhost:3000/">
          <img
            className="h-6 cursor-pointer"
            src={YOU_TUBE_LOGO}
            alt="youtube Logo"
          />
        </a>
      </div>

      <div className="col-span-10 justify-center items-center flex relative">
        <input
          className="border outline-none border-gray rounded-l-full py-2 px-8 w-[500px]"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-l-0 outline-none border-gray rounded-r-full py-2 px-6 bg-gray-200">
          <img className="h-6" src={SEARCH_ICON} alt="Search" />
        </button>
        <div className="absolute top-11 z-10 bg-gray-100 rounded-lg shadow-md w-6/12">
          <ul>
            {searchQuery &&
              showSearchData.map((x) => {
                return (
                  <li
                    key={x}
                    className="flex flex-row items-center py-2 px-4 hover:bg-gray-200 "
                  >
                    <img className="w-3 mr-2" src={SEARCH_ICON} alt="search" />{" "}
                    {x}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="User" />
      </div>
    </div>
  );
};

export default Head;

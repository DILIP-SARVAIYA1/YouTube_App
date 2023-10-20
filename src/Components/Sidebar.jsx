import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="col-span-2 p-4 max-h-full bg-gray-100 shadow-lg mt-1">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <div>
        <ul>
          <li>Library</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Watch later</li>
          <li>Liked videos</li>
        </ul>
      </div>
      <div>
        <h1>Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Learning</li>
        </ul>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default Sidebar;

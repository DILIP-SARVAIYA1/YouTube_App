import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //   const { id } = searchParams;
  // console.log(searchParams.get("v"));
  const despatch = useDispatch();
  useEffect(() => {
    despatch(closeMenu());
  });
  return (
    <div className="p-4">
      <iframe
        className="shadow-md"
        width="902"
        height="508"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?si=dVOqK9oxzLSDxkWO"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;

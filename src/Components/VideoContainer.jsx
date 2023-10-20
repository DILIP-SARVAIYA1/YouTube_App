import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../Utils/Constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideoData(json.items);
  };
  return (
    <div className="flex flex-wrap justify-between m-4">
      {videoData.map((x) => {
        return (
          <Link key={x.id} to={"/watch?v=" + x.id}>
            <VideoCard videoInfo={x} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

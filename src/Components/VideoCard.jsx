import React from "react";

const VideoCard = ({ videoInfo }) => {
  // console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <div className="max-w-[300px] shadow-xl rounded-lg bg-gray-200 m-2">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="Thumbnails"
      />
      <div className="p-3">
        <h4 className="font-bold">{title}</h4>
        <p className="text-gray-700">{channelTitle}</p>
        <p className="text-gray-700">
          {statistics.viewCount}●{publishedAt}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

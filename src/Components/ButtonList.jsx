import React from "react";
import Button from "./Button";

const ButtonArray = [
  "All",
  "Gaming",
  "News",
  "Programming",
  "Computer",
  "React",
  "Web Development",
];
const ButtonList = () => {
  return (
    <div className="flex mx-4">
      {ButtonArray.map((x, index) => {
        return <Button key={index} btnData={x} />;
      })}
    </div>
  );
};

export default ButtonList;

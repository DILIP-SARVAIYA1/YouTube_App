import React from "react";

const Button = ({ btnData }) => {
  //   console.log(btnData);
  return (
    <button className="border text-sm border-gray-300 bg-gray-100 py-2 px-4 mx-2 rounded-lg">
      {btnData}
    </button>
  );
};

export default Button;

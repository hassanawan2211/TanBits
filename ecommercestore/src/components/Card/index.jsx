import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white border border-gray-300 p-5 rounded-lg shadow-md w-64 mb-8">
      <img className="w-full h-48 object-contain" src={props.img} alt="" />
      <h5 className="text-lg font-semibold mt-4">{props.title}</h5>
      <p className="text-gray-600 mt-2">Price: {props.price}$</p>
    </div>
  );
};

export default Card;

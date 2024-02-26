import React from "react";

const Card = (props) => {
  return (
    <>
    
      <div className="bg-white text-black w-[285px] h-[446px] shadow-lg rounded-md overflow-hidden">
        <img
          className="w-[285px] h-[301px] object-contain"
          src={props.img}
          alt="cloth images"
        />
        <div className="p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
              stokc ready
            </span>
            <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
              official store
            </span>
          </div>

          <h2 className="font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap">
            {props.title}
          </h2>

           <div>
           <span className="font-bold text-xl">Price: {props.price}$</span>
           </div>

        </div>
      </div>
      
    </>
  );
};

export default Card;

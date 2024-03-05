import React from "react";

const Card = (props) => {
  return (
    <>
    
      <div className="bg-[#F4F5F7] text-black w-[285px] h-[446px] shadow-lg rounded-md overflow-hidden">
        <img
          className="w-[285px] h-[301px] object-contain bg-white"
          src={props.img}
          alt="cloth images"
        />
        <div className="p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs bg-[#D3D3D3]">
              stokc ready
            </span>
            <span className="px-3 py-1 rounded-full text-xs bg-[#D3D3D3]">
              official store
            </span>
          </div>

          <h2 className="font-medium text-xl overflow-ellipsis overflow-hidden whitespace-nowrap">
            {props.title}
          </h2>

           <div>
           <span className="font-normal text-xl">Price: {props.price}$</span>
           </div>

        </div>
      </div>
      
    </>
  );
};

export default Card;

import React from 'react'
import background from "../../assest/background.jpg"
import greatoricon from "../../assest/greatoricon.svg"

const Header = () => {
  return (
    <>
      <div className="h-316 bg-gray-200 relative">
       
        
        <img src={background} alt="backgroung image" className="bg-auto h-[316px] w-full"/>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl font-medium text-black">Shop</h1>
          <div className="flex justify-center items-center mt-4">
            <span className="text-black font-medium text-base mr-2">Home</span>
            <img src={greatoricon} alt="Logo" className="w-5 h-5"/>
            <span className="text-black font-light text-base ml-2">Shop</span>
          </div>
        </div>
      </div>
    

    </>
  )
}

export default Header;

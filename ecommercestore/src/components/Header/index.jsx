import React from 'react'
import image from "../../assest/ferniture.jpg"
import greatoricon from "../../assest/greatoricon.svg"


const Header = () => {
  return (
    <>
    <div className='h-[calc(100vh-200px)] bg-cover bg-center opacity-90' style={{backgroundImage: "url("+ image +")"}}>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-7xl font-medium text-black">Shop</h1>
          <div className="flex justify-center items-center mt-4">
            <span className="text-black font-medium text-2xl mr-2">Home</span>
            <img src={greatoricon} alt="Logo" className="w-6 h-6"/>
            <span className="text-black font-light text-2xl ml-2">Shop</span>
          </div>
        </div>
    </div>
    </>
  )
}

export default Header;

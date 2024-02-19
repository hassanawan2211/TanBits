import React from 'react';
import logo from '../../assest/logo.svg';
import account from "../../assest/account.svg";
import search from '../../assest/search.svg';
import hearticon from '../../assest/heart.svg';
import addcart from '../../assest/addcart.svg';

const Navbar = () => {
  return (
     <>
      <div className="mx-auto h-[100px] w-full flex items-center box-border">
      <nav className="flex justify-between items-center w-[1286px] h-[41px] mx-20">
        <div className="flex items-center">
          <img src={logo} alt="Furniro Logo" className="w-12 h-8 mr-2" />
          <span className="text-2xl font-bold">Furniro</span>
        </div>
        <ul className="flex space-x-14">
          <li><a href="#" className="text-base font-medium">Home</a></li>
          <li><a href="#" className="text-base font-medium">Shop</a></li>
          <li><a href="#" className="text-base font-medium">About</a></li>
          <li><a href="#" className="text-base font-medium">Contact</a></li>
        </ul>
        <div className="flex items-center space-x-10">
          <img src={account} alt="Icon 1" className="w-7 h-7" />
          <img src={search} alt="Icon 2" className="w-7 h-7" />
          <img src={hearticon} alt="Icon 3" className="w-7 h-7" />
          <img src={addcart} alt="Icon 4" className="w-7 h-7" />
        </div>
      </nav>
    </div>
     </>
  );
};

export default Navbar;

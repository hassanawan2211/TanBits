import React from "react";
const Footer = () => {
  return (
    <> 
    <footer className="mx-28 max-md:mx-16 max-md:flex max-md:flex-wrap max-md:justify-center max-md:text-center">
      <div
        className="flex justify-between max-lg:justify-center items-center gap-32 max-lg:gap-4 mt-[45px] mb-4 max-lg:items-center max-lg:flex-col"
      >
        <div className="">
          <h1 className="leading-10 font-bold text-2xl max-lg:text-center">Funiro.</h1>
          <p className="leading-10 text-base font-medium text-[#9F9F9F] max-md:leading-6 max-lg:text-center">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>
        <div className="flex flex-wrap gap-12 max-lg:gap-12 max-md:gap-4 max-md:flex-col">
          <ul className=" max-md:px-5 font-medium text-base text-[#9F9F9F]">
            <li className="leading-10 text-black">Links</li>
            <li className="leading-10  max-sm:leading-6">Homes</li>
            <li className="leading-10 max-sm:leading-8">Shop</li>
            <li className="leading-10 max-sm:leading-8">About</li>
            <li className="leading-10 max-sm:leading-8">Contact</li>
          </ul>
          <ul className=" max-md:px-5 font-medium text-base text-[#9F9F9F]">
            <li className="leading-10 text-black">Help</li>
            <li className="leading-10 max-sm:leading-8">Payment Options</li>
            <li className="leading-10 max-sm:leading-8">Returns</li>
            <li className="leading-10 max-sm:leading-8">Privacy Policies</li>
          </ul>
          <ul className=" max-md:px-5 font-medium text-base">
            <li className="leading-10 text-black">Newsletter</li>
            <li className="leading-10 max-sm:leading-8">
              <input
                className="text-left max-md:text-center max-sm:w-[100px] max-sm:h-[30px] w-24"
                type="text"
                placeholder="Enter Email"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
     <div className="border-t-2 max-lg:text-center items-center">
     <p className="text-[#000000] font-normal text-base py-4 mb-4 flex justify-center">2023 furino. All rights reverved</p>
   </div>
   </>
  );
};
export default Footer;

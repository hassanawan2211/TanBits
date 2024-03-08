import React from "react";
import img1 from "../../src/assests/iteam1.svg";
import img2 from "../../src/assests/item2.svg";
import img3 from "../../src/assests/iteam3.svg";
import img4 from "../../src/assests/iteam4.svg";
import mainimg from "../../src/assests/mainIteam.svg";
import fbicon from "../../src/assests/facebookicon.svg";
import instaicon from "../../src/assests/instaicon.svg";
import twittericon from "../../src/assests/twittericon.svg";
import Star from "../components/Star";
import ColorOptions from "../components/ColourOption";

const ProductPage = () => {
  return (
    <div className="p-4 my-8">
      <div className="flex justify-around mx-10 ">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            <div className="h-20 bg-[#F9F1E7] rounded-md flex items-center">
              <img src={img1} alt="" className="" />
            </div>
            <div className="h-20 bg-[#F9F1E7] rounded-md flex items-center">
              <img src={img2} alt="" className="" />
            </div>
            <div className="h-20 bg-[#F9F1E7] rounded-md flex items-center">
              <img src={img3} alt="" className="" />
            </div>
            <div className="h-20 bg-[#F9F1E7] rounded-md flex items-center">
              <img src={img4} alt="" className="" />
            </div>
          </div>
          <div className="bg-[#F9F1E7] rounded-md flex items-center">
            <img src={mainimg} alt="" className="" />
          </div>
        </div>
        <div className="border-b-2 pb-8">
          <div className="">
            <h1 className="font-normal text-5xl pb-2 leading-normal">
              Asgaard sofa
            </h1>
            <p className="font-medium text-2xl">Rs. 250,000.00</p>
          </div>
          <div className="flex gap-2 py-3">
            <Star />
            <p className="font-normal text-base border-l-2 border-black pl-2 text-[#9F9F9F]">
              {" "}
              5 Customer Review
            </p>
          </div>
          <div className="w-[350px] ">
            <p className="text-sm font-normal">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          </div>
          <div className=" ">
            <p className="font-normal text-sm leading-loose py-2 text-[#9F9F9F]">
              Size
            </p>
            <div className="flex gap-3">
              <button className="border rounded-md px-2 py-1 bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]">
                L
              </button>
              <button className="border rounded-md px-2 py-1 bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]">
                XL
              </button>
              <button className="border rounded-md px-2 py-1 bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]">
                XS
              </button>
            </div>
          </div>
          <div>
            <p className="font-normal text-sm leading-loose text-[#9F9F9F]">
              Color
            </p>
            <ColorOptions />
          </div>
          <div className="flex gap-3 pt-2 bg-[#FFFFFF]">
            <div>
              <button className="border border-black px-3 py-2 rounded-md">
                1
              </button>
            </div>
            <div>
              <button className="border border-black px-3 py-2 rounded-md">
                Add To Cart
              </button>
            </div>
            <div>
              <button className="border border-black px-3 py-2 rounded-md">
                + Compare
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-4 mt-4 pr-40">
        <ul className="flex flex-col gap-2 text-[#9F9F9F]">
          <li>SKU</li>
          <li>Category</li>
          <li>Tags</li>
          <li>Share</li>
        </ul>
        <ul className="flex flex-col gap-2 ml-4 text-[#9F9F9F]">
          <li>
            <span>:</span> SS001
          </li>
          <li>
            <span>:</span> Sofas
          </li>
          <li>
            <span>:</span> Sofa, Chair, Home, Shop
          </li>
          <li className="flex gap-4">
            <span>:</span>
            <img src={fbicon} alt="" />
            <img src={instaicon} alt="" />
            <img src={twittericon} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;

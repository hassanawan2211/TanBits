import React from 'react'
import trophy_icon from "../../assest/trophy 1.svg";
import warrenty_icon from "../../assest/guarantee.svg";
import shipping_icon from "../../assest/shipping.svg";
import support_icon from "../../assest/customer-support.svg"

const Services = () => {
  return (
    <>
      <div className='w-full flex max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 items-center justify-around p-8'
      style={{ backgroundColor: "rgba(249, 241, 231, 1)" }}>
        <div className='flex'>
        <img src={trophy_icon} alt="trophy icon" className='w-[50px] max-lg:w-[40px] max-md:w-[35px] max-sm:w-[30px] h-[50px] max-lg:h-[40px] max-md:h-[35px] max-sm:h-[30px]'/>
        <div className='px-2'>
            <h1 className='font-semibold max-lg:font-medium text-xl max-lg:text-lg'>High Quality</h1>
            <p className='text-base max-sm:text-sm'>crafted from top materials</p>
        </div>
        </div>
        <div className='flex'>
            <img src={warrenty_icon} alt="warrenty icon" className='w-[50px] max-lg:w-[40px] max-md:w-[35px] max-sm:w-[30px] h-[50px] max-lg:h-[40px] max-md:h-[35px] max-sm:h-[30px]'/>
        <div className='px-2'>
            <h1 className='font-semibold max-lg:font-medium text-xl max-lg:text-lg'>Warranty Protection</h1>
            <p className='text-base max-sm:text-sm'>Over 2 years</p>
        </div>
        </div>
        <div className='flex'>
        <img src={shipping_icon} alt="shipping icon" className='w-[50px] max-lg:w-[40px] max-md:w-[35px] max-sm:w-[30px] h-[50px] max-lg:h-[40px] max-md:h-[35px] max-sm:h-[30px]'/>
        <div className='px-2'>
            <h1 className='font-semibold max-lg:font-medium text-xl max-lg:text-lg'>Free Shipping</h1>
            <p className='text-base max-sm:text-sm'>Order over 150 $</p>
        </div>
        </div>
        <div className='flex'>
        <img src={support_icon} alt="support icon" className='w-[50px] max-lg:w-[40px] max-md:w-[35px] max-sm:w-[30px] h-[50px] max-lg:h-[40px] max-md:h-[35px] max-sm:h-[30px]'/>
        <div className='px-2'>
            <h1 className='font-semibold max-lg:font-medium text-xl max-lg:text-lg'>24 / 7 Support</h1>
            <p className='text-base max-sm:text-sm'>Dedicated support</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Services;

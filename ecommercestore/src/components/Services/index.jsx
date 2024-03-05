import React from 'react'
import trophy_icon from "../../assest/trophy 1.svg";
import warrenty_icon from "../../assest/guarantee.svg";
import shipping_icon from "../../assest/shipping.svg";
import support_icon from "../../assest/customer-support.svg"

const Services = () => {
  return (
    <>
      <div className='w-full flex items-center justify-around p-8 max-md:grid max-md:grid-cols-2 gap-4 max-sm:p-2'
      style={{ backgroundColor: "rgba(249, 241, 231, 1)" }}>
        <div className='flex'>
        <img src={trophy_icon} alt="trophy icon" className='w-[50px] max-lg:w-[40px] max-md:w-[35px] max-sm:w-[30px] h-[50px] max-lg:h-[40px] max-md:h-[35px] max-sm:h-[30px]'/>
        <div className='px-2'>
            <h1 className='font-semibold max-lg:font-medium max-md:font-normal text-xl max-lg:text-lg max-md:text-base max-sm:text-sm'>High Quality</h1>
            <p className='text-base max-sm:text-xs'>crafted from top materials</p>
        </div>
        </div>
        <div className='flex'>
            <img src={warrenty_icon} alt="warrenty icon" className='w-[50px] max-lg:w-[40px] max-md:w-[35px] max-sm:w-[30px] h-[50px] max-lg:h-[40px] max-md:h-[35px] max-sm:h-[30px]'/>
        <div className='px-2'>
            <h1 className='font-semibold max-lg:font-medium max-md:font-normal text-xl max-lg:text-lg max-md:text-base max-sm:text-sm'>Warranty Protection</h1>
            <p className='text-base max-sm:text-xs'>Over 2 years</p>
        </div>
        </div>
        <div className='flex'>
        <img src={shipping_icon} alt="shipping icon" className='w-[50px] max-lg:w-[40px] max-md:w-[35px] max-sm:w-[30px] h-[50px] max-lg:h-[40px] max-md:h-[35px] max-sm:h-[30px]'/>
        <div className='px-2'>
            <h1 className='font-semibold max-lg:font-medium max-md:font-normal text-xl max-lg:text-lg max-md:text-base max-sm:text-sm'>Free Shipping</h1>
            <p className='text-base max-sm:text-xs'>Order over 150 $</p>
        </div>
        </div>
        <div className='flex'>
        <img src={support_icon} alt="support icon" className='w-[50px] max-lg:w-[40px] max-md:w-[35px] max-sm:w-[30px] h-[50px] max-lg:h-[40px] max-md:h-[35px] max-sm:h-[30px]'/>
        <div className='px-2'>
            <h1 className='font-semibold max-lg:font-medium max-md:font-normal text-xl max-lg:text-lg max-md:text-base max-sm:text-sm'>24 / 7 Support</h1>
            <p className='text-base max-sm:text-xs'>Dedicated support</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Services;

import React from 'react'
import trophy_icon from "../../assest/trophy 1.svg";
import warrenty_icon from "../../assest/guarantee.svg";
import shipping_icon from "../../assest/shipping.svg";
import support_icon from "../../assest/customer-support.svg"

const Services = () => {
  return (
    <>
      <div className='h-[200px] flex items-center justify-around'
      style={{ backgroundColor: "rgba(249, 241, 231, 1)" }}>
        <div className='flex'>
        <img src={trophy_icon} alt="trophy icon" className='w-[50px] h-[50px]'/>
        <div className='px-2'>
            <h1 className='font-semibold text-xl'>High Quality</h1>
            <p className='text-base'>crafted from top materials</p>
        </div>
        </div>
        <div className='flex'>
            <img src={warrenty_icon} alt="warrenty icon" className='w-[50px] h-[50px]'/>
        <div className='px-2'>
            <h1 className='font-semibold text-xl'>Warranty Protection</h1>
            <p className='text-base'>Over 2 years</p>
        </div>
        </div>
        <div className='flex'>
        <img src={shipping_icon} alt="shipping icon" className='w-[50px] h-[50px]'/>
        <div className='px-2'>
            <h1 className='font-semibold text-xl'>Free Shipping</h1>
            <p className='text-base'>Order over 150 $</p>
        </div>
        </div>
        <div className='flex'>
        <img src={support_icon} alt="support icon" className='w-[50px] h-[50px]'/>
        <div className='px-2'>
            <h1 className='font-semibold text-xl'>24 / 7 Support</h1>
            <p className='text-base'>Dedicated support</p>
        </div>
        </div>

      </div>
    </>
  )
}

export default Services;

import React from 'react'
import greatericon from "../../assest/greatoricon.svg"
import lineicon from "../../assest/Line 5.svg"

const Track = () => {
  return (
     <div className='max-md:justify-center max-md:w-full'> 
    <div className='py-4 bg-[#F9F1E7] pl-14'>
      <div className='flex items-center gap-5'>
        <p className='text-base font-normal text-[#9F9F9F]'>Home</p>
        <img src={greatericon} alt="" className=''/>
        <p className='text-base font-normal text-[#9F9F9F]'>Shop</p>
        <img src={greatericon} alt="" className=''/>
        <img src={lineicon} alt=""/>
        <p className='text-base font-normal'>Asgaard sofa</p>
      </div>
    </div>
    </div>
     
  )
}

export default Track;
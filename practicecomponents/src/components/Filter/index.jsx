import React from 'react'
import filtering from "../../assests/filtering.svg"
import round from "../../assests/ci_grid-big-round.svg"
import veiwlist from "../../assests/bi_view-list (1).svg"
import line from "../../assests/Line 5.svg"

const Filter = () => {
  return (
    <>
     <div className='h-[80px] bg-pink-300 flex justify-between items-center'>
        <div className='flex items-center'>
            <img src={filtering} alt="" className='ml-9'/>
            <h3 className='px-3'>Filter</h3>
            <img src={round} alt=""  className='px-3'/>
            <img src={veiwlist} alt="" className='px-3'/>
            <img src={line} alt="" className='px-3'/>
            <p className='px-3'>Showing 1–16 of 32 results</p>
        </div>
        <div className='flex items-center'>
            <p className='px-2'>Show</p>
            <input type="text" className='w-[55px] h-[30px] px-2 text-black bg-gray-100 text-center'/>
            <p className='px-2'>Sort by</p>
            <input type="text" className='w-[188px] h-[30px] text-left'/>
        </div>
        <div className='flex items-center'>
            <input type="text" placeholder='Enter product Name' className='w-[188px] h-[30px] mr-9 text-left'/>
        </div>
     </div>
    </>
  )
}

export default Filter;

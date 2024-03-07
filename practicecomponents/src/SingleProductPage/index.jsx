import React from 'react'
import img1 from "../../src/assests/iteam1.svg"
import img2 from "../../src/assests/item2.svg"
import img3 from  "../../src/assests/iteam3.svg"
import img4 from "../../src/assests/iteam4.svg"
import mainimg from "../../src/assests/mainIteam.svg"
import Line from "../../src/assests/Line 5.svg"

const ProductPage = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-between mx-10'>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-3'>
                <div className='h-20 bg-[#F9F1E7] rounded-md flex items-center'><img src={img1} alt="" className='' /></div>
                <div className='h-20 bg-[#F9F1E7] rounded-md flex items-center'><img src={img2} alt="" className='' /></div>
                <div className='h-20 bg-[#F9F1E7] rounded-md flex items-center'><img src={img3} alt="" className='' /></div>
                <div className='h-20 bg-[#F9F1E7] rounded-md flex items-center'><img src={img4} alt="" className='' /></div>
            </div>
            <div className='bg-[#F9F1E7] rounded-md flex items-center'>
                <img src={mainimg} alt=""  className=''/>
            </div>
        </div>
        <div>
            <div>
                <h1 className='font-normal text-5xl'>Asgaard sofa</h1>
                <p className='font-medium text-2xl'>Rs. 250,000.00</p>
            </div>
            <div>
                <img src="" alt="" />
                <img src={Line} alt="" />
                <p>customer</p>
            </div>
            <div className='w-[350px]'>
                <p className='text-sm'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

</p>
            </div>
            <div className='flex gap-1'>
                 <button className='border rounded-sm px-2 py-1 bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]'>L</button>
                 <button className='border rounded-sm px-2 py-1 bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]'>XL</button>
                 <button className='border rounded-sm px-2 py-1 bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F]'>XS</button>
            </div>
            <div>
                <p>color</p>
            </div>
            <div className='flex gap-3 bg-[#FFFFFF]'>
                <div><button className='border-2 px-3 py-2 rounded-md'>1</button></div>
                <div><button className='border-2 px-3 py-2 rounded-md'>Add To Cart</button></div>
                <div><button className='border-2 px-3 py-2 rounded-md'>Compare</button></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;

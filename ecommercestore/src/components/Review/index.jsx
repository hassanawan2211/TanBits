import React from 'react'
import img1 from '../../assest/reviewiteam1.svg'
import img2 from '../../assest/reviewiteam2.svg'

const CustomerReview = () => {

  return (
      <div className='flex flex-wrap justify-center pt-8 border-t-2 max-md:items-center max-md:px-10'>
        <div className='flex justify-around gap-6 max-sm:gap-3 mb-8 text-[#9F9F9F] font-medium max-ms:font-normal text-2xl max-sm:text-base'>
            <h1 className='hover:text-black'>Description</h1>
            <h1 className='hover:text-black'>Additional Information</h1>
            <h1 className='hover:text-black'>Reviews [5]</h1>
        </div>
        <div className='flex max-md:flex flex-col max-md:flex-wrap gap-6 w-[80%] justify-center m-auto'>
            <p className='text-[#9F9F9F] font-normal text-base'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p className='text-[#9F9F9F] font-normal text-base'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className='flex justify-center mt-10 gap-4 max-md:flex max-md:flex-wrap '>
          <div className='bg-[#F9F1E7] rounded-md flex items-center h-[348px] max-md:h-[200px] w-[605px] max-md:w-[380px]'><img src={img1} alt="" /></div>
          <div className='bg-[#F9F1E7] rounded-md flex items-center h-[348px] max-md:h-[200px] w-[605px] max-md:w-[380px]'><img src={img2} alt="" /></div>
        </div>
      </div>
  )
}

export default CustomerReview;


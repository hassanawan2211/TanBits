import React from 'react'
const Footer = () => {
  return (
    <footer className='flex flex-wrap justify-around w-full'>
    <div className='flex flex-wrap justify-around mt-[45px]  max-lg:p-6 max-md:p-4 max-sm:p-2' style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className='max-md:p-10'>
        <h1 className='leading-10 font-bold text-2xl'>Funiro.</h1>
        <p className='leading-10 text-base font-medium'>400 University Drive Suite 200 Coral Gables,
FL 33134 USA</p>
      </div>
      <div className='flex flex-wrap'>
        <ul className='px-10 max-md:px-5 font-medium text-base text-purple-400'>
          <li className='leading-10 text-black'>Links</li>
          <li className='leading-10'>Homes</li>
          <li className='leading-10'>Shop</li>
          <li className='leading-10'>About</li>
          <li className='leading-10'>Contact</li>
        </ul>
        <ul className='px-10 max-md:px-5 font-medium text-base text-purple-400'>
          <li className='leading-10 text-black'>Help</li>
          <li className='leading-10'>Payment Options</li>
          <li className='leading-10'>Returns</li>
          <li className='leading-10'>Privacy Policies</li>
        </ul>
        <ul className='px-10 max-md:px-5 font-medium text-base'>
          <li className='leading-10 text-black'>Newsletter</li>
          <li className='leading-10'><input className='text-left p-2 max-sm:w-[100px] max-sm:h-[30px]' type="text" placeholder='Enter your email'/></li>
        </ul>
      </div>
    </div>
    </footer>
  )
}
export default Footer;
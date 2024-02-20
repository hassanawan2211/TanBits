import React from 'react'
const Footer = () => {
  return (
    <>
    <div className='flex justify-around h-[400px] mt-[45px]' style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div>
        <h1 className='leading-10 font-bold text-2xl'>Funiro.</h1>
        <p className='leading-10 text-base font-normal'>400 University Drive Suite 200 Coral Gables,
FL 33134 USA</p>
      </div>
      <div className='flex'>
        <ul className='px-10 font-medium text-base'>
          <li className='leading-10 text-purple-400'>Links</li>
          <li className='leading-10'>Homes</li>
          <li className='leading-10'>Shop</li>
          <li className='leading-10'>About</li>
          <li className='leading-10'>Contact</li>
        </ul>
        <ul className='px-10 font-medium text-base'>
          <li className='leading-10 text-purple-400'>Help</li>
          <li className='leading-10'>Payment Options</li>
          <li className='leading-10'>Returns</li>
          <li className='leading-10'>Privacy Policies</li>
        </ul>
        <ul className='px-10 font-medium text-base'>
          <li className='leading-10 text-purple-400'>Newsletter</li>
          <li className='leading-10'><input type="text" placeholder='Enter your email'/></li>
        </ul>
      </div>
    </div>
    </>
  )
}
export default Footer
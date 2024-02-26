import React from 'react'
import img1 from "../../src/assests/iteam1.svg"
import img2 from "../../src/assests/iteam2.svg"
import img3 from "../../src/assests/iteam3.svg"
import img4 from "../../src/assests/iteam4.svg"
import mainiteam from "../../src/assests/mainIteam.svg"

const Singlrproductpage = () => {
  return (
    <>
      <div className='flex justify-around'>
        <div className='flex'> 
        <div className=' '>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <div>
            <img src={mainiteam} alt="" />
        </div>
        </div>
        <div>
            <h1>Asgaard sofa</h1>
            <p>Rs. 250,000.00</p>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <p></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Singlrproductpage;

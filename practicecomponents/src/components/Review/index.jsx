import React from 'react'
import img1 from '../../assests/reviewiteam1.svg'
import img2 from '../../assests/reviewiteam2.svg'

const CustomerReview = () => {

  return (
      <div className='flex flex-wrap justify-center '>
        <div className='flex justify-around gap-4 mb-8'>
            <h1>Description</h1>
            <h1>Additional Information</h1>
            <h1>Reviews [5]</h1>
        </div>
        <div className='flex flex-col gap-6 w-[80%] justify-center m-auto'>
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className='flex justify-center'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
        </div>
      </div>
  )
}

export default CustomerReview;


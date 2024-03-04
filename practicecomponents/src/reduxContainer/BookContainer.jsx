import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import parchase_book from "./BookAction"

const BookContainer = () => {
  const noOfBooks =  useSelector(state => state.NumberofBooks)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Book Container</h1>
      <p>No of Books = {noOfBooks}</p>
      <button className='bg-red-800 text-white' onClick={()=>{dispatch(parchase_book())}}>Buy Book</button>
    </>
  )
}

export default BookContainer;

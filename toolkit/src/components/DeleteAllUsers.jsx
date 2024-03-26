import React from 'react'
import { deleteUsers } from '../Store/Slices/Userslice'
import { UseDispatch, useDispatch } from 'react-redux'



const DeleteAllUsers = () => {

  const dispatch = useDispatch();

  const removeUsers = () => {
    dispatch(deleteUsers())

  }
  return (
    <div>
      <button className='bg-red-700 text-white' onClick={() => removeUsers()}>DeleteAllUsers</button>
    </div>
  )
}

export default DeleteAllUsers;

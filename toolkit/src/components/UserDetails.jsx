import React from 'react'
import DeleteAllUsers from './DeleteAllUsers';
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../Store/Slices/Userslice';
import DisplayUsers from './DisplayUsers';

const UserDetails = () => {

  const dispatch = useDispatch();

  const addNewUser =(name) =>{
    dispatch(addUser(name))
  }
  return (
    <> 
    <div className=' justify-center'>
       <div className='text-red-700 text-2xl font-medium'>List of User Details</div>
       <button className='bg-blue-300 text-white' onClick={() => addNewUser(fakeUserData())}>Add New User</button>
    </div>
    <ul>
    <DisplayUsers/>
    </ul>
    <hr />
    <DeleteAllUsers/>
    </>
  )
}

export default UserDetails;

import React from 'react'
import DeleteAllUsers from './DeleteAllUsers';

const UserDetails = () => {
  return (
    <> 
    <div className=' justify-center'>
       <div className='text-red-700 text-2xl font-medium'>List of User Details</div>
       <button className='bg-blue-300'>Add New User</button>
    </div>
    <ul>
    <li>hi</li>
    <li>hi</li>
    </ul>
    <hr />
    <DeleteAllUsers/>
    </>
  )
}

export default UserDetails;

import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import deleteIcon from "../deleteicon.svg"
import { removeUser } from '../Store/Slices/Userslice'

const DisplayUsers = () => {

  const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.users
    });

    const deleteUser = (id) => {
     dispatch(removeUser(id))
    }

    
  return (
    <>

      {
        data.map((user, id)=>{
            return <li> key={id} 
            {user}
            <button onClick={() => deleteUser()}>
              <img src={deleteIcon} alt="" className='px-10'/>
            </button>
            
            </li>
            
             
        })
      }
    </>
  )
}

export default DisplayUsers

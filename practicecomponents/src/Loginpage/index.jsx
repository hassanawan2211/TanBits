import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center bg-white'>
      <form className='flex flex-col items-center'>
       <h1>Login in to your store</h1>
       <div className='flex flex-col items-center'>
        <label htmlFor="">Store address</label>
        <input type="text" className='border-solid'/>
        <label htmlFor="">Email adress</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
       </div>
      </form>
     
    </div>
  )
}

export default Login;

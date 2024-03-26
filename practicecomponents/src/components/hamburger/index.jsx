import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assests/logo.svg"

const navIteam = () => {
  return (
    <>
      <Link to={`#logo`}><img src={logo} alt="" />Furniro</Link>
    </>
  )
}

export default navIteam;

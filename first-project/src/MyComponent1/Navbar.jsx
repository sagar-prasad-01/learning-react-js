import React from 'react'

const Navbar = (props) => {
  return (
    <>

        <h1>navbar here</h1>
        <h1>  {props.name}</h1>
        <h1>  {props.age}</h1>
    </>
  )
}

export default Navbar
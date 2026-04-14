import React from 'react'
import "./HomeCard.css"

const HomeCard = (props) => {
  return (
    <div className="homecard">
        <img src={props.img} alt="not found" />
        <h1>name:{props.name}</h1>
    </div>
  )
}

export default HomeCard
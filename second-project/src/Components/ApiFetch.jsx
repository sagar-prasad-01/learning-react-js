import React from 'react'
import { useEffect,useState } from 'react'
const ApiFetch = () => {
  const [data,setData]=useState([]);



      useEffect(
            ()=>{
    
          fetch("https://fakestoreapi.com/products").then(
            (data)=>(data.json()).then(
                (i)=>(setData(i))
            )
          ).catch(
            (error)=>{
                console.log(error)
            }
          )
    
            },[]
        )
    
        console.log(data)
  return (
  <div>
    <h1>Products</h1>

    {data.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>₹{item.price}</p>
        <img src={item.image} width="100" />
      </div>
    ))}
    
  </div>
)
}

export default ApiFetch
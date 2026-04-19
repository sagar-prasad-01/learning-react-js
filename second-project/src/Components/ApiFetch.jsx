import React from 'react'

const ApiFetch = () => {


      useEffect(
            ()=>{
    
          fetch("http://localhost:3000").then(
            (data)=>(data.json()).then(
                (i)=>(setData(i))
            )
          ).catch(
            (error)=>{
                console.log(error)
            }
          )
    
            },[data]
        )
    
        console.log(data)
  return (
    <div>ApiFetch</div>
  )
}

export default ApiFetch
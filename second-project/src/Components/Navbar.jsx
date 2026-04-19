import {useState,useEffect} from "react"

export default function(){
    const [count,setCount]=useState(0);
    const [data,setData]=useState();

    useEffect(
        ()=>{

      fetch("http://localhost:3000/users").then(
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

    return(
        <div>
       <h1>hello navbar</h1>
       <h1>counter={count}</h1>
       <button onClick={()=>{setCount(count+1)}}>click me</button>
 <h1>
        {data.map(
            (i)=>(

                <>
                <h1>{i.name}</h1>
                <h1>{i.email}</h1>
                <h1>{i.mobile}</h1>
                </>


            )

        )}
       </h1>
      

        </div>
    );
}
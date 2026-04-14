import React,{useState} from "react";
import "./Home.css";
// import {react} from "../assets/react.svg";
import HomeCard from "./HomeCard";
const Home = () => {

  const [initialState,setState]=useState(0);
  const [Name,setName]=useState("");
  const [Email,setEmail]=useState("");
  const [Mobile,setMobile]=useState("");
  return (
    <div className="home">
      <h2>Homepage designs</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam
        iusto harum debitis eum at!
      </p>
      <div className="card">
        <img src="./public/vite.svg" alt="" />

        <h1>initial state{initialState}</h1>
        <button onClick={()=>setState(initialState+1)}>click</button>

        {/* <HomeCard name="pen" img="./public/vite.svg" />
        <HomeCard name="laptop" img="./public/vite.svg" />
        <HomeCard name="lcd" img="./public/vite.svg" />
        <HomeCard name="mouse" img="./public/vite.svg" />
        <HomeCard name="mobile" img="./public/vite.svg" /> */}

        <h1>{Name}</h1>
        <input placeholder="enter name" 
        onChange={(e)=>setName(e.target.value)}
        />
        <h1>{Email}</h1>
        <input placeholder="enter email" 
        onChange={(e)=>setEmail(e.target.value)}
        />
        <h1>{Mobile}</h1>
        <input placeholder="enter mobile" 
        onChange={(e)=>setMobile(e.target.value)}
        />

        
      </div>
    </div>
  );
};

export default Home;

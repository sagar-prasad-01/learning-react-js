import React from "react";
import "./Home.css";
import HomeCard from "./HomeCard";
const Home = () => {
  return (
    <div className="home">
      <h2>Homepage designs</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam iusto harum debitis eum at!</p>
      <div className="card">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;

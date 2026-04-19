import React, { useState } from "react";
import "./about.css";

const About = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };
  return (
    <div className="about">
      <h1>taking multiple input data handle with single useState</h1>
      <h1>name:{FormData.name}</h1>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        onChange={handleChange}
        value={FormData.name}
      />
      <h1>email:{FormData.email}</h1>

      <input
        type="text"
        name="email"
        placeholder="enter email"
        value={FormData.email}
        onChange={handleChange}
        
      />

      <h1>password:{FormData.password}</h1>

      <input
        type="text"
        name="password"
        placeholder="enter password"
        value={FormData.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default About;

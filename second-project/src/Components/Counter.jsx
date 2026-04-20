import React, { useState } from "react";

export const Counter = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setData({
        name: "",
        email: "",
        mobile: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>add data to json server</h1>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleInput}
      />{" "}
      <br />
      <input
        type="text"
        name="email"
        value={data.email}
        onChange={handleInput}
      />{" "}
      <br />
      <input
        type="text"
        name="mobile"
        value={data.mobile}
        onChange={handleInput}
      />{" "}
      <br />
      <input
        type="text"
        name="password"
        value={data.password}
        onChange={handleInput}
      />{" "}
      <br />
      <button onClick={handleSubmit}>addData</button>
    </div>
  );
};

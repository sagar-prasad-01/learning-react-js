import React from "react";
import { useState } from "react";

const Login = () => {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    console.log(fieldName);

    setFormData((currData) => {
      return {
        ...currData,
        [fieldName]: newValue,
      };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          placeholder="enter full name"
          id="fullname"
          value={formData.fullName}
          name="fullName"
          onChange={handleInputChange}
        />
        <label htmlFor="userName">userName</label>
        <input
          type="text"
          placeholder="enter full name"
          id="userName"
          value={formData.userName}
          name="userName"
          onChange={handleInputChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Login;

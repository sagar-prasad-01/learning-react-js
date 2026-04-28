import React, { useState } from "react";

const Login = () => {
  [FormData, setFormData] = useState({
    fullName: "",
    userName: "",
  });
  return (
    <div>
      <label htmlFor="Fullname">Fullname</label>
      <input
        type="text"
        placeholder="enter full name"
        id="Fullname"
        value={FormData.fullName}
      />
      <label htmlFor="userName">userName</label>
      <input
        type="text"
        placeholder="enter full name"
        id="userName"
        value={FormData.userName}
      />
    </div>
  );
};

export default Login;

import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        <form className="flex flex-col gap-4">
          
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-500">
          Don't have an account? <span className="text-blue-500 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
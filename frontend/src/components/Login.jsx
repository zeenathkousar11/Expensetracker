
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"


function Login() {
const [formData,setFormData]=useState({
  name:"",
  email:"",
  password:"",
  
});

const handleChange=(e) => {
  setFormData({
    ...formData,[e.target.name]:e.target.value
  });
};
const handleSubmit = async (e)=>{
  e.preventDefault()
  console.log(formData)
  try {
  const {data} = await axios.post(
    "http://localhost:8085/api/users/login",formData
  
  )
  console.log(data)
} catch (error){
  console.error("there was an error",error)
}
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form  onSubmit={handleSubmit}className="bg-white p-6 rounded shadow-md w-full max-w-sm border border-zinc-950">
        <h2  className="text-2xl mb-4 text-center">Login</h2>
        
        {/* <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
          <input className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" id="name" name="name" />
        </div> */}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="email" id="email" name="email" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input   onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="password" id="password" name="password" />
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input  onChange={handleChange} type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
            <span className="ml-2 text-sm text-gray-600">I accept the terms and conditions</span>
          </label>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          No account? <Link to ={'/Signup'}> <span className="text-blue-500 hover:text-blue-700">signup</span>
          </Link>
        </p>
        
      </form>
    </div>
  );
}

export default Login;

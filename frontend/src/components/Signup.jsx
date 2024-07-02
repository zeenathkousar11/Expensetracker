import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
const [formData,setFormData]=useState({
  name:"",
  email:"",
  password:"",
  password2:"",
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
    "http://localhost:8085/api/users/register",formData
  
  )
  console.log(data)
} catch (error){
  console.error("there was an error",error)
}
}
  return (
    <>
   <div className="bg-gray-100 flex items-center justify-center h-screen">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center" >Sign Up</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">Name</label>
        <input onChange={handleChange}  type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></input>
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">Email</label>
        <input  onChange={handleChange} type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></input>
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">Password</label>
        <input  onChange={handleChange} type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></input>
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">password2</label>
        <input onChange={handleChange}  type="password" id="confirm-password" name="confirm-password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></input>
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign Up
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already a user ? <Link to={"/Login"} >  <span className="text-blue-500 hover:text-blue-700">Login</span>
          </Link>
        </p>
        
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default Signup

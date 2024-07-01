// // import React from 'react'
// // import Signup from './Signup'

// // function Login() {
// //   return (
// //     <div>
// //       <form>
// //         <label>
// //           name
// //         </label>
// //         <input className='border-black border-2 ' type="text" name="name"></input><br/>
        
// //         <label>email</label>
// //         <input className="border-black border-2 m-5" type ="text"></input><br/>
// //         <label>password</label>
// //         <input className="border-black border-2" type ="password"></input>
       
// //       </form>
// //     </div>
// //   )
// // }

// // export default Login
// import React from 'react';
// import Signup from './Signup';

// function Login() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form className="bg-white p-6 rounded shadow-md w-full max-w-sm border border-black">
//         <h2 className="text-2xl mb-4 text-center">Login</h2>
        
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//           <input className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" id="name" name="name" />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="email" id="email" name="email" />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="password" id="password" name="password" />
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
//           Login
//         </button>

//       </form>
//     </div>
//   );
// }

// export default Login;

import React from 'react';
import Signup from './Signup';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm border border-zinc-950">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
          <input className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" id="name" name="name" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="email" id="email" name="email" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="password" id="password" name="password" />
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
            <span className="ml-2 text-sm text-gray-600">I accept the terms and conditions</span>
          </label>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already a user? <a href="/login" className="text-blue-500 hover:text-blue-700">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Login;

import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      {/* Login Form Container */}
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-white-500">
        {/* Heading */}
        <h1 className="max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white text-center">
          <span className="underline">Login</span>
          <span className="no-underline font-bold text-green-500"> ChatApp</span>
        </h1>

        {/* Username Input */}
        <div>
          <span className="text-base">Username</span>
          <label className="input input-bordered flex items-center gap-2 mb-3 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Enter username" />
          </label>

          {/* Password Input */}
          <span className="text-base">Password</span>
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" placeholder="Enter password" />
          </label>
        </div>

        {/* Login Button */}
        <div className="pl-24">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <span className="text-blue-950">Don't have an account?</span>
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;





//Finalized

// import React from 'react';

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       {/* Login Form Container */}
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-white-500">
//         {/* Heading */}
//         <h1 className="max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white text-center">
//           <span className="underline">Login</span>
//           <span className="no-underline font-bold text-green-500"> ChatApp</span>
//         </h1>

//         {/* Username Input */}
//         <div>
//           <span className="text-base">Username</span>
//           <label className="input input-bordered flex items-center gap-2 mb-3 mt-1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70"
//             >
//               <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//             </svg>
//             <input type="text" className="grow" placeholder="Enter username" />
//           </label>

//           {/* Password Input */}
//           <span className="text-base">Password</span>
//           <label className="input input-bordered flex items-center gap-2 mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="h-4 w-4 opacity-70"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <input type="password" className="grow" placeholder="Enter password" />
//           </label>
//         </div>

//         {/* Login Button */}
//         <div className="pl-24">
//           <button
//             type="button"
//             className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 mb-2"
//           >
//             Login
//           </button>
//         </div>

//         {/* Register Link */}
//         <div className="text-center">
//           <span className="text-blue-950">Don't have an account?</span>
//           <a
//             href="#"
//             className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
//           >
//             Register
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

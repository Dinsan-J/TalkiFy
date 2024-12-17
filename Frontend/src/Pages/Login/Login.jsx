import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
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
              <input
                type="text"
                className="grow"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            {/* Password Input */}
            <span className="text-base">Password</span>
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <input
                type="password"
                className="grow"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          {/* Login Button */}
          <div className="pl-24">
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 mb-2"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <span className="text-blue-950">Don't have an account?</span>
            <Link
              to={"/Signup"}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;

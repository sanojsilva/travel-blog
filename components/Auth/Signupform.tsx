import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

function Signupform() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async () => {
    const result = await axios.post("http://localhost:4200/api/user/signup", {
      name: username,
      email: email,
      password: pass,
    });
    console.log(result.data);
  };

  return (
    <div>
      <div className="w-full max-w-xl ">
        <h1 className="flex justify-center p-5 text-2xl">Sign Up</h1>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Username
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPass(e.target.value)}
            />
            <p className="text-xs italic text-red-500">
              Please choose a password. e
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <Link href="/login">
              <a
                className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                href="#"
              >
                Already a member?
              </a>
            </Link>
          </div>
        </form>
        <p className="text-xs text-center text-gray-500">
          &copy;2021 All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Signupform;

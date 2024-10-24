import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="max-w-[330px] mx-auto px-3 shadow-2xl py-3 rounded">
        <h2 className="font-bold text-black text-xl leading-normal my-3 text-center">
          User Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="font-bold text-black placeholder:text-black outline-none border-2 border-black rounded mt-2 w-full px-2 py-1 "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="font-bold text-black placeholder:text-black outline-none border-2 border-black rounded mt-2 w-full px-2 py-1"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="mt-3">
          <Link
            to="/updateLogin"
            className={
              location.pathname === "/updateLogin"
                ? "font-bold text-green-500 "
                : "font-normal text-blue-600"
            }
          >
            Forget Password?
          </Link>
        </div>
        <button
          className=" font-bold text-white bg-blue-500 rounded px-4 py-2 border-2 border-transparent mt-5 w-full hover:bg-blue-900 duration-300"
          type="submit"
          onClick={async () => {
            const result = await axios.post(
              "http://localhost:3000/user/login",
              {
                email,
                password,
              }
            );
            console.log(result.data);
            navigate("/homePage");
            alert("login successfull");
          }}
        >
          Login
        </button>
        <div className="flex items-center gap-1 mt-3">
          <p className="text-gray-600 text-base font-medium leading-normal">
            Don't have an account?
          </p>
          <Link
            to="/signup"
            className={
              location.pathname === "/user/signup"
                ? "font-bold text-green-500"
                : "font-normal text-blue-600"
            }
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

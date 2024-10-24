import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || phone === "") {
      alert("Please fill all the fields");
      return;
    }

    axios
      .post("http://localhost:3000/user/signup", {
        name: name,
        email: email,
        password: password,
        phone: phone,
      })
      .then((res) => {
        alert("Signup Successfully!");
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        navigate("/user/login");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          alert(err.response.data.message || "Signup Failed");
        } else {
          alert("Signup Failed. Please try again.");
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">User Sign Up</h1>
      <form
        className="flex bg-gray-200 p-4 rounded-lg flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 bg-white outline-none rounded-lg"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-2 bg-white outline-none rounded-lg"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 bg-white outline-none rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="p-2 bg-white outline-none rounded-lg"
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Link to="/login">
          Already have an account? <span className="text-blue-500">Login</span>
        </Link>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 p-2 rounded-lg text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

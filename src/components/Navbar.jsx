import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login status from localStorage
    setIsLoggedIn(false); // Update state to reflect logout
  };

  return (
    <nav className="flex bg-gray-100 justify-between items-center p-4">
      <a href="/">logo</a>
      <div className="flex gap-4">
        {/* If the user is logged in, show Logout, History, and Book Appointment */}
        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="text-blue-500 bg-blue-500/20 px-2 py-1 rounded-md"
            >
              Logout
            </button>
            <Link
              className="text-blue-500 bg-blue-500/20 px-2 py-1 rounded-md"
              to="/history"
            >
              History
            </Link>
            <Link
              className="text-blue-500 bg-blue-500/20 px-2 py-1 rounded-md"
              to="/bookAppointment"
            >
              Book Appointment
            </Link>
          </>
        ) : (
          /* If the user is not logged in, show Login and Signup */
          <>
            <Link
              className="text-blue-500 bg-blue-500/20 px-2 py-1 rounded-md"
              to="/"
            >
              Logout
            </Link>
            <Link
              className="text-blue-500 bg-blue-500/20 px-2 py-1 rounded-md"
              to="/bookAppointment"
            >
              Book Appointment
            </Link>
            <Link
              className="text-blue-500 bg-blue-500/20 px-2 py-1 rounded-md"
              to="/history"
            >
              History
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

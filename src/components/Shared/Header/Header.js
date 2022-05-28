import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);

  };
  const navbarItems = (
    <>
      <li>
        <Link to="home">Home</Link>
      </li>
      
      <li>
        <Link to="blog">Blog</Link>
      </li>
      <li>
        <Link to="portfolio">My portfolio </Link>
      </li>

      {user && (
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="about">About</Link>
      </li>

      {user ? (
        <li>
          <button onClick={handleSignout} className="  box-none text-black">
            <h4>Log out</h4>
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {user ? (
        <li>
          <button className="  box-none text-black">
            <Link to="/dashboard">{user.displayName}</Link>
          </button>
        </li>
      ) : (
        <li></li>
      )}
    </>
  );
  return (
    <div className="text-black">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Electro
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navbarItems}</ul>
        </div>
        <div className="navbar-end">
          <label
            htmlFor="my-drawer-2"
            className="  drawer-button lg:hidden mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;

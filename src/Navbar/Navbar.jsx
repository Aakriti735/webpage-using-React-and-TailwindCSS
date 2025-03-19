import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="nav flex h-25 w-screen bg-white fixed mt-0">
        <h2 className="text-black text-3xl mt-10 ml-20">
          List<span className="text-red-700">Race</span>
        </h2>
        <ul className="tasks flex justify-between ml-170">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mr-10 text-black mt-10 ${
                isActive
                  ? "text-orange-700 underline underline-offset-8"
                  : "text-gray-500"
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `mr-10 text-black mt-10 ${
                isActive
                  ? "text-orange-700 underline underline-offset-8"
                  : "text-gray-500"
              }`
            }
          >
            HOW IT WORKS
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `mr-10 text-black mt-10 ${
                isActive
                  ? "text-orange-700 underline underline-offset-8"
                  : "text-gray-500"
              }`
            }
          >
            EXPLORE
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              `mr-10 text-black mt-10 ${
                isActive
                  ? "text-orange-700 underline underline-offset-8"
                  : "text-gray-500"
              }`
            }
          >
            REVIEW
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `mr-10 text-black mt-10 ${
                isActive
                  ? "text-orange-700 underline underline-offset-8"
                  : "text-gray-500"
              }`
            }
          >
            BLOG
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `mr-10 text-black mt-10 ${
                isActive
                  ? "text-orange-700 underline underline-offset-8"
                  : "text-gray-500"
              }`
            }
          >
            CONTACT US
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
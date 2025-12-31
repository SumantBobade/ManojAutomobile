import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Shop Logo"
              className="h-11 w-11 object-contain"
            />
            <div className="leading-tight">
              <h1 className="font-extrabold text-xl tracking-wide">
                Manoj <span className="text-green-400">Automobile</span>
              </h1>
              <p className="text-xs text-gray-400">
                Batteries & Genuine Tractor Parts
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10 font-semibold">
            <li>
              <Link
                to="/"
                className="text-gray-200 hover:text-green-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-200 hover:text-green-400 transition"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="text-gray-200 hover:text-green-400 transition"
              >
                Products
              </Link>
            </li>

            {/* Contact Button */}
            <li>
              <Link
                to="/contact"
                className="bg-green-500 text-black px-5 py-2 rounded-full hover:bg-green-400 transition font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 border-t border-gray-700 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 space-y-4 text-lg font-semibold">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setOpen(false)}>
              About Us
            </Link>
          </li>

          <li>
            <Link to="/products" onClick={() => setOpen(false)}>
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-green-500 text-black px-4 py-2 rounded-md inline-block font-bold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

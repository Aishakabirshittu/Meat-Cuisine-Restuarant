import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex items-center justify-between flex-wrap">
        {/* Logo */}
        <h1 className="text-xl font-bold">Meat Cuisine</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/menu" className="hover:underline">
            Menu
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => toggleMenu()}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="hidden w-full mt-4 md:hidden flex flex-col space-y-2 text-center"
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/menu" className="hover:underline">
            Menu
          </Link>
        </div>
      </nav>
    </header>
  );

  function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  }
};

export default Header;

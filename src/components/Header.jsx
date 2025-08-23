import React from 'react';

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 container mx-auto px-4">
        {/* Left Side: Dropdown + Logo */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a href="#whymindery">Why</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#for-parents">For Parents</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li>
                <a className="btn primary-bg shadow-md rounded-md text-white w-full">
                  Start Free
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img
              className="w-16 sm:w-20 mr-2"
              src="https://i.postimg.cc/0jtm8yvk/reallogo.png"
              alt="Topmind Care Logo"
            />
            <a className="text-xl sm:text-2xl font-semibold">
              Topmind Care
            </a>
          </div>
        </div>

        {/* Right Side: Desktop Menu */}
        <div className="navbar-end flex-1 justify-end hidden lg:flex">
          <div className="flex items-center space-x-4 primary font-semibold">
            <a href="#whymindery" className="hover:primary transition">Why</a>
            <a href="#programs" className="hover:primary transition">Programs</a>
            <a href="#features" className="hover:primary transition">Features</a>
            <a href="#faq" className="hover:primary transition">FAQ</a>
            <a href="#for-parents" className="hover:primary transition">For Parents</a>
          </div>
          <a className="btn primary-bg shadow-md rounded-md text-white ml-4">
            Start Free
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
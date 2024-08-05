import React from "react";
import { Link, NavLink } from "react-router-dom";


function navClick() {
   let navList = document.getElementById('navbar-solid-bg');
  if (navList.style.height === '0rem' || navList.style.height === '') {
    navList.style.height = '8rem';
  } else {
    navList.style.height = '0rem';
  }
};


export default function Navbar() {
  return (
    <>
      <nav className="bg-[var(--dark-color)] overflow-hidden ">
        <div className="h-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-8">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
            START FRAMEWORK
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center mr-5 p-3 w-12 h-10 justify-center text-sm text-black rounded-lg md:hidden focus:border-2  border border-black"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
            onClick={navClick}
            
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-7 w-9"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="h-[0rem]  w-full md:h-auto md:w-auto duration-300"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-bold mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to="about"
                  className="block py-1 px-2 text-white my-1 w-fit rounded-md text-xl font-bold  transition-all focus:bg-[--green-color] "
                  aria-current="page"
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="portfolio"
                  className="block py-1 px-2 text-white my-1 w-fit rounded-md text-xl font-bold  transition-all focus:bg-[--green-color] "
                  aria-current="page"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="block py-1 px-2 text-white my-1 w-fit rounded-md text-xl font-bold  transition-all focus:bg-[--green-color] "
                  aria-current="page"
                >
                  CONTACT
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

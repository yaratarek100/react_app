import React from "react";
import Star from "../Star/Star";
import { changeTitle } from "../../App";

export default function Contact() {
  changeTitle("contact");
  return (
    <div className=" main-box-1 bg-white ">
      <div className="container mx-auto h-full ">
        <Star color={"var(--dark-color)"} title="CONTACT SECTION" />

        <form className="w-2/4 mx-auto py-8 ">

          <div className="relative z-0 w-full mb-5 group my-4 mt-12">
            <input
              type="text"
              className=" block py-2.5  w-full text-base text-gray-900 relative z-10  rounded-2xl border border-transparent border-b-gray-200 focus:outline-none px-4 peer"
              placeholder="user name"
            />
            <label
              htmlFor="floating_password"
              className="absolute text-lg  duration-500  -top-0 text-[--green-color]  peer-focus:-top-7  "
            >
              user name :
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group my-4 mt-12">
            <input
              type="text"
              className=" block py-2.5  w-full text-base text-gray-900 relative z-10  rounded-2xl border border-transparent border-b-gray-200 focus:outline-none px-4 peer"
              placeholder="user age"
            />
            <label
              htmlFor="floating_password"
              className="absolute text-lg  duration-500  -top-0 text-[--green-color]  peer-focus:-top-7  "
            >
              user age :
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group my-4 mt-12">
            <input
              type="text"
              className=" block py-2.5  w-full text-base text-gray-900 relative z-10  rounded-2xl border border-transparent border-b-gray-200 focus:outline-none px-4 peer"
              placeholder="user email"
            />
            <label
              htmlFor="floating_password"
              className="absolute text-lg  duration-500  -top-0 text-[--green-color]  peer-focus:-top-7  "
            >
              user email :
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group my-4 mt-12">
            <input
              type="text"
              className=" block py-2.5  w-full text-base text-gray-900 relative z-10  rounded-2xl border border-transparent border-b-gray-200 focus:outline-none px-4 peer"
              placeholder="user password"
            />
            <label
              htmlFor="floating_password"
              className="absolute text-lg  duration-500  -top-0 text-[--green-color]  peer-focus:-top-7  peer"
            >
              user password :
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-[--green-color]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

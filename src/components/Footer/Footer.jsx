import React from "react";
export default function Footer() {
  return (
    <div className=" bottom-0 w-full text-white">
      <div className="p-5 higher   bg-[var(--dark-color)] py-24">
      <div className="container flex justify-evenly">
        <div className="w-1/4">
          <h3 className="text-center mb-1 text-2xl font-bold">LOCATION</h3>
          <p className="text-center">2215 John Daniel Drive</p>
          <p className="text-center mt-2">Clark, MO 65243</p>
        </div>

        <div className="w-1/4">
          <h3 className="text-center mb-1 text-2xl font-bold">AROUND THE WEB</h3>
          <div className=" flex mt-1 gap-1 justify-center items-center">
            <i className="p-2 border border-white fa-brands fa-facebook mx-1 size-9 rounded-full text-white"></i>
            <i className="p-2 border border-white fa-brands fa-twitter mx-1 size-9 rounded-full text-white"></i>
            <i className="p-2 border border-white fa-brands fa-linkedin-in mx-1 size-9 rounded-full text-white"></i>
            <i className="p-2 border border-white fa-solid fa-globe mx-1 size-9 rounded-full text-white"></i>
          </div>
        </div>
        <div className="w-1/4">
          <h3 className="text-center mb-1 text-2xl font-bold">ABOUT FREELANCER</h3>
          <p className="text-center">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      </div>
      <div className="p-6 lower  bg-[var(--dark2-color)]">
      <div className="container">

      <p className="text-center" >Copyright © Your Website 2021</p>
      </div>
      </div>
    </div>
  );
}

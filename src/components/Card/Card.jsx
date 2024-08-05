import React, { useState } from "react";



export default function Card({ src ,setClickedSrc }) {
  return (
    <div className=" w-full p-5 sm:w-1/2 md:w-1/3 ">
      <div className="card relative hover:*:opacity-90 cursor-pointer" onClick={()=>{setClickedSrc(src)}} >
        <img src={src} className="w-full rounded-md" />
        <div className=" absolute top-0 bottom-0 flex justify-center items-center layer w-full h-full bg-[--green-color] opacity-0 rounded-md duration-500">
          <span className="block">
            <i className="text-7xl fa-solid fa-plus text-white "></i>
          </span>
        </div>
      </div>
    </div>
  );
}

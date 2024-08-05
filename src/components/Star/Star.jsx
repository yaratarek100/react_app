import React from "react";
export default function Star({color,title}) {

  return (
    <>
      <h2 className={`uppercase text-center font-bold text-4xl mt-7  `}  style={{ color }}>
        {title}
      </h2>
      <div className="mx-auto my-2 w-fit ">
        <span className={`inline-block  w-24 h-1   `} style={{ backgroundColor: color }}></span>
        <i className={` fa-solid fa-star mx-3 size-5 inline-block `} style={{  color }}></i>
        <span className={`inline-block w-24 h-1 `} style={{ backgroundColor: color }}></span>
      </div>
    </>
  );
}

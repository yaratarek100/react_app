import React from "react";

export default function PopUp({ clickedSrc, setClickedSrc }) {
  return (
    <div
      className="popup absolute top-0 right-0 w-full h-full bg-blue-500 bg-opacity-30  flex justify-center items-start pt-32"
      onClick={(e) => {
        if (e.target !== document.querySelector(".imgDiv img")) {
          setClickedSrc(null);
        }
      }}
    >
      <div className="imgDiv w-1/2">
        <img src={clickedSrc} className="w-1/2 p-10 fixed" />
      </div>
    </div>
  );
}

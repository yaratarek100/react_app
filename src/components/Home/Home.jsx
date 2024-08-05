import React from "react";
import Star from "../Star/Star";
import myImg from "../../assets/images/avataaars.svg" ;
import { changeTitle } from "../../App";

export default function Home() {

  changeTitle("home");

  return (
    <div className="main-box  bg-[var(--green-color)] ">
      <div className="container mx-auto  text-white">
      <img src={myImg} className="w-64 mb-10 mx-auto " />

      <Star title="START FRAMEWORK" color="white" />

      <p className=" text-center">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}

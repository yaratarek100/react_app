import React from "react";
import Star from "../Star/Star";
import { changeTitle } from "../../App";

export default function About() {
  changeTitle("about");
  return (
    <div className=" main-box bg-[var(--green-color)] ">
      <div className="container mx-auto  text-white">
        
        <Star color="white" title="about component"  />
        <div className="flex gap-3 w-4/5 mt-3 mx-auto">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}

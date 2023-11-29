import "./Banner.css";
import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">movie name</h1>
        <div className="banner-buttons">
          <button className="btn">Play</button>
          <button className="btn">My list</button>
        </div>
        <h1 className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolor
          dolore debitis vitae fugiat tempora ducimus aliquid exercitationem
          dolores nemo cupiditate voluptatibus ut, temporibus eveniet
          perferendis neque possimus qui? Eaque.
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;

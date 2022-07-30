import React from "react";
import "./Banner.css";

const Banner = () => (
  <div className="banner text-center d-flex align-items-center justify-content-center">
    <p className="m-0">
      Click on an image to earn points. <br />
      Don't click on the same image twice.
      <br /> The max score is 12.
    </p>
  </div>
);

export default Banner;

import React from "react";
import "../assets/css/Gallery.css";
import above from "../assets/img/1.jpg";
import left from "../assets/img/2.jpg";
import right from "../assets/img/3.jpg";
const Gallery = () => {
  return (
    <div className="wrapper_gallery">
      <div className="d-flex  main ">
        <p className="h3  gallery_heading1 my-3">Onze realisaties</p>
        <p className="h4 gallery_heading m-auto mt-3 text-white">
          Enkel het beste is goed genoeg
        </p>
        <p className="gallery_para text-white text-justify">
          Each breakpoint was chosen to comfortably hold containers whose widths
          are multiples of 12. Breakpoints are also representative of a subset
          of common device sizes and <br />
         
        </p>
       <img src={above} alt="" className="above_image" />
        <div className="left_right_image mb-5">
          <img src={left} className="left" />
          <img src={right} className="right" />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
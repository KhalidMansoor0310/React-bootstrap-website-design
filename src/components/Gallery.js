import React from "react";
import img1 from "../assets/img/3.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/1.jpg";
import "../assets/css/Gallery.css";
function Gallery() {
  return (
    <div className="container-fluid section_gallery">
      <div className="container">
        <div className="row">
          <h1 className="text-center text-white p-4 text-secondary">
            Onze realisaties
          </h1>
          <h4 className="text-center m-auto text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <span className="text-white text-center py-3 w-50 m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            temporibus voluptates aut illo, doloremque odio reiciendis quidem
            commodi eum ea soluta
          </span>
        </div>
        <div className="row my-4 m-auto">
          <img src={img3} className="img_top" alt="" />
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-4 col-lg-4 col-md-12  col-sm-12 p-2  my-2 gallery_img_1 ">
            <img src={img2} alt="" />
          </div>
          <div className="col-8 col-lg-8 col-sm-12 p-2 my-2  gallery_img_2">
            <img src={img1} alt="" />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Gallery;

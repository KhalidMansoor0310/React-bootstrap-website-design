import React from "react";
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import welk_img from "../assets/img/WelkePremies-right.png";
import "../assets/css/Services.css";
function Services() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 col-sm-12 my-5 left_services_col">
          <h2 className="text-success">
            Welke premise zijn er voor gevelrenovatie
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            deleniti quisquam eaque similique eveniet atque mollitia tempora
            incidunt eius maxime?
          </p>
          <div className="row">
            <div className="col-2 number_img p-3">
              <img src={one} alt="" />
            </div>
            <div className="col-10">
              <h3>heading</h3>
              <p align="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                minima, quo ipsa hic dolorem quisquam laborum consequuntur velit
                sed sit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 number_img  p-3">
              <img src={two} alt="" />
            </div>
            <div className="col-10">
              <h3>heading </h3>
              <p align="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                minima, quo ipsa hic dolorem quisquam laborum consequuntur velit
                sed sit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 number_img p-3">
              <img src={three} alt="" />
            </div>
            <div className="col-10">
              <h3>heading </h3>
              <p align="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                minima, quo ipsa hic dolorem quisquam laborum consequuntur velit
                sed sit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6  col-sm-12 service_img d-flex justify-content-center align-items-center my-5 p-2">
          <img src={welk_img} className="" alt="" />
          <button className="img_button">See More</button>
          {/* <button className="btn btn-warning services_btn">Click</button> */}
        </div>
      </div>
    </div>
  );
}

export default Services;

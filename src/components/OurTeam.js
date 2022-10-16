import React from "react";
import circle from "../assets/img/circle.png";
import img1 from "../assets/img/OnzeTroeven.jpg";
import "../assets/css/ourteam.css";
function Courses() {
  return (
    <section className="container my-5 ">
      <div className="row">
        {/* columns for right side */}
        <div className="col-12 col-lg-6 col-sm-12 team_left_col">
          <h1 className="my-3 text-success">Onze Troeven</h1>
          <p align="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse
            deleniti facilis.
          </p>

          <div className="row">
            <div className="col-2 circle_img p-3">
              <img src={circle} alt="" />
            </div>
            <div className="col-10">
              <h3>heading 1</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                minima, quo ipsa hic dolorem quisquam laborum consequuntur velit
                sed sit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 circle_img p-3">
              <img src={circle} alt="" />
            </div>
            <div className="col-10">
              <h3>heading 1</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                minima, quo ipsa hic dolorem quisquam laborum consequuntur velit
                sed sit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 circle_img p-3">
              <img src={circle} alt="" />
            </div>
            <div className="col-10">
              <h3 align="justify">heading 1</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                minima, quo ipsa hic dolorem quisquam laborum consequuntur velit
                sed sit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2  circle_img">
              <img src={circle} alt="" />
            </div>
            <div className="col-10">
              <h3>heading 1</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                minima, quo ipsa hic dolorem quisquam laborum consequuntur velit
                sed sit.
              </p>
            </div>
          </div>
        </div>
        {/* columns for an image */}
        <div className="col-12 col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center align-items-center">
          <img src={img1} alt="" className="team_img" />
          <button className="ourteam_btn">Click</button>
        </div>
      </div>
    </section>
  );
}

export default Courses;

import React from "react";
import circle from "../assets/img/circle.png";
import OnsAanbod from "../assets/img/OnsAanbod.jpg";
import "../assets/css/Offer.css";
function Offer() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className=" my-2 col-lg-6 col-sm-12 left_img_col d-flex align-items-center justify-content-center ">
          <img src={OnsAanbod} className="col-sm-12" alt="" />
          <button className="left_img_button">See More</button>
        </div>
        <div className="col-12 my-5 col-lg-6 col-sm-12 right_side_col">
          <h2 className="text-success">Ons Aanbod</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo id qui
            dolorum accusamus nostrum temporibus.
          </p>
          <div className="row">
            <div className="col-2 p-3">
              <img src={circle} className="img_of_circle" alt="" />
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
            <div className="col-2 p-3">
              <img src={circle} className="img_of_circle" alt="" />
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
            <div className="col-2 p-3">
              <img src={circle} className="img_of_circle" alt="" />
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
      </div>
    </div>
  );
}

export default Offer;

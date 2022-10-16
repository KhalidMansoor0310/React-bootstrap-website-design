import React from "react";
import "../assets/css/footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid  text-white m-auto main_container">
        <div className="container">
          <div className="row d-flex justify-content-space align-items-center">
            <div className="col-md-6 footer_text my-5">
              <h1>Gevel renoveren?</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, facere excepturi quidem perferendis repellendus
                sint!
              </p>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
              <button className=" footer_button py-3 ">Show more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-3">
        <div className="bg-white text-dark d-flex justify-content-center align-items-center">
          <span>copyright &copy; 2022 </span>
        </div>
        <div className="d-flex justify-content-center bg-white text-dark align-items-center">
          <a href="">Home {"  "}</a>|<a href="">About {"  "}</a>|
          <a href="">Services</a>
        </div>
      </div>
    </>
  );
}

export default Footer;

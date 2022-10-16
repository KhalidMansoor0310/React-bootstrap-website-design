import React from "react";
import "../assets/css/lorem.css";
import img from "../assets/img/team.jpg";
function Lorem() {
  return (
    <div className="container-fluid bg-light">
      <div className="row col-md-6 m-auto">
        <h1 className="text-center text-success my-4">Onze Team</h1>
        <p className="text-center text-dark">
          cralux: partner uw voor elke renovatie
        </p>
        <p className="text-center text-justify my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, quam
          tempora totam libero commodi ipsum quae voluptatem, voluptas
          cupiditate ut ipsa dignissimos id corporis perspiciatis.
        </p>
        <p className="text-center text-justify my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ea
          tenetur est quidem earum, iste numquam molestias, dicta dolorem rem,
          sequi quasi ipsum illum officia
        </p>
      </div>

      <div className="col-md-8  m-auto d-flex justify-content-center align-items-center">
        <img src={img} alt="" className="my-5 w-100" />
      </div>
    </div>
  );
}

export default Lorem;

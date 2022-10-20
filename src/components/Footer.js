import React from "react";
import "../assets/css/footer.css";

function Footer() {
  return (
    <>
      <div className="pb-3 pt-3 renovern">
        <div className="my-5 text-white container">
          <div className="row">
            <div className="col-md-5 offset-md-2">
              <h3 >Gevel renoveren?</h3>
              <p>
                {" "}
                Cralux staat voor u klaar. Krijg persoonlijk advies en info over
                alle premies en ontvang uw gratis prijsofferte, inclusief onze{" "}
              </p>
              <b> tijdelijke actie!</b>
            </div>
            <div className="col-md-3 offset-md-1 text-center">
              <a
                href=""
                className="btn btnBg p-3 px-5 px-md-3 text-dark mt-5 btn-warning rounded-pill"
              >
                <span>Krijg uw korting »</span>
              </a>
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

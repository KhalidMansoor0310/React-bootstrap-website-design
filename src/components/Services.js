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
        <div className="row my-5">
          <div className="text-success col-md-11">
            <div className="container">
              <h3>Welke premies zijn er voor gevelrenovatie?</h3>
            </div>
          </div>
        </div>
        <div className="my-5 container">
          <div className="row">
            <div className="mb-5 col-md-5 offset-md-1 ">
              <div className="row mb-4">
                <div className="col-3">
                  <img src={one} className="number_img" alt="" />
                </div>
                <div className="col-9">
                  <h6 className="fw-bold">
                    Premie voor gevelisolatie (Fluvius)
                  </h6>
                  <p className="Services-text__paragraph text-muted">
                    {" "}
                    De netbeheerder Fluvius reikt een premie uit voor
                    buitenmuurisolatie (langs buiten) van € 30 per m². Heb je
                    uitsluitend nachttarief? Dan loopt dit op tot maar liefst €
                    45 per m².{" "}
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-3">
                  <img src={two} className="number_img" alt="" />
                </div>
                <div className="col-9">
                  <h6 className="fw-bold">
                    Premie voor gevelisolatie (Fluvius)
                  </h6>
                  <p className="Services-text__paragraph text-muted">
                    De Vlaamse renovatiepremie deelt een gevelrenovatie in onder
                    Categorie 1 (de structurele elementen). Dankzij deze premie
                    wordt 20% of 30% van je uitgaven terugbetaald
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-3">
                  <img src={three} className="number_img" alt="" />
                </div>
                <div className="col-9">
                  <h6 className="fw-bold">
                    Premie voor gevelisolatie (Fluvius)
                  </h6>
                  <p className="Services-text__paragraph text-muted">
                    Combineer je gevel- of spouwmuurisolatie met 2 andere
                    energiebesparende maatregelen? Dan kom je in aanmerking voor
                    de Totaalrenovatiebonus. Die kan oplopen tot € 4.750.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <img src={welk_img} style={{ width: "80%" }} alt="" />
              <button className="btn p-3 px-5 btnBg text-dark mt-4 btn-warning rounded-pill">
                <span>Krijg tot 4 premies »</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

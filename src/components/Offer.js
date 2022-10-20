import React from "react";
import circle from "../assets/img/circle.png";
import OnsAanbod from "../assets/img/OnsAanbod.jpg";
import "../assets/css/Offer.css";
function Offer() {
  return (
    <>
      <div className="my-5 container">
        <div className="row">
          <div className="mt-4 col-md-4 offset-md-2">
            <div className="text-center">
              <img
                src={OnsAanbod}
                style={{ width: "85%", height: "335px" }}
                alt=""
              />
              <button className="btn p-3 px-5 px-md-3 btnBg text-dark mx-5 btn-warning rounded-pill">
                <span>Ontvang uw offerte »</span>
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <h3 className="heading">Ons aanbod</h3>
              <p className="underHeading text-muted">
                Onze vakmannen werken enkel met topproducten. Daarnaast hebben
                we vanuit onze expertise een eigen productielijn voor
                siliconencrepi ontwikkeld. Omdat we 100% vertrouwen op onze
                kwaliteit, geniet jij als klant van 10 jaar garantie op
                structurele gebreken.
              </p>
            </div>
            <div className="row">
              <div className="col-2 text-center circle_img">
                <img src={circle} alt="" />
              </div>
              <div className="col-10 p-0">
                <h5 className="leftTextheading">Capaciteit</h5>
                <p className="underHeading text-muted">
                  {" "}
                  Aan onze toegewijde werknemers bieden we een open werkomgeving
                  die creativiteit, tolerantie, professionele ontwikkeling en
                  zekerheid aanmoedigt. Op die manier leveren wij
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-center circle_img">
                <img src={circle} alt="" />
              </div>
              <div className="col-10 p-0">
                <h5 className="leftTextheading">Kwaliteit</h5>
                <p className="underHeading text-muted">
                  Dankzij onze grote stock en onze ervaren plaasters, realiseren
                  wij iedere maand minstens 30 projecten en renoveren we zon
                  5000m2 aan gevel- en dakoppervlakte. Heb je een nieuwbouw- of
                  renovatieproject voor Cralux? Wij kunnen snel schakelen in
                  onze planning.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-center circle_img">
                <img src={circle} alt="" />
              </div>
              <div className="col-10 p-0">
                <h5 className="leftTextheading">Oplevertijd </h5>
                <p className="underHeading text-muted">
                  Onze vakmannen werken enkel met topproducten. Daarnaast hebben
                  we vanuit onze expertise een eigen productielijn voor
                  siliconencrepi ontwikkeld. Omdat we 100% vertrouwen op onze
                  kwaliteit, geniet jij als klant van 10 jaar garantie op
                  structurele gebreken.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-center circle_img">
                <img src={circle} alt="" />
              </div>
              <div className="col-10 p-0">
                <h5 className="leftTextheading">Service </h5>
                <p className="underHeading text-muted">
                  n elke provincie in Belgie heeft Cralux lokale bouwadviseurs
                  die hun tijd nemen voor een goed gesprek en een grondige
                  gevelinspectie. Ook onze bouwteams beschikken over eigen
                  stellingen, professionele producten en de nieuwste machines om
                  de werken uit te voeren. Topservice gegarandeerd!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;

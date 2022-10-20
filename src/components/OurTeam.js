import React from "react";
import circle from "../assets/img/circle.png";
import img1 from "../assets/img/OnzeTroeven.jpg";
import "../assets/css/ourteam.css";
function Courses() {
  return (
    <section className="container py-5">
      <div className="row mt-5">
        {/* columns for right side */}
        <div className="col-md-5 offset-md-2">
          <div>
            <h3 className="heading">onzetroeven</h3>
            <p className="paragraph__underHeading">
              Bij Cralux wordt elk project gewaardeerd. Van het eerste contact
              tot de oplevering maken wij het verschil dankzij onze toegewijde
              vakmannen en onklopbare prijs-kwaliteit!
            </p>
          </div>
          <div className="row">
            <div className="col-2 text-center circle_img">
              <img src={circle} alt="" />
            </div>
            <div className="col-10 p-0">
              <h5 className="TextHeading">Toegewijde vakmannen</h5>
              <p className="paragraph__underHeading">
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
              <h5 className="TextHeading">Uitgebreid aanbod</h5>
              <p className="paragraph__underHeading">
                {" "}
                We voorzien van een groot aanbod van diensten in de bouw. We
                gebruiken onze jarenlange ervaring en technische kennis om{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 text-center circle_img">
              <img src={circle} alt="" />
            </div>
            <div className="col-10 p-0">
              <h5 className="TextHeading">
                <u>Actie</u>: 50% korting op blauwsteen gevelplint{" "}
              </h5>
              <p className="paragraph__underHeading">
                {" "}
                Cralux staat niet alleen voor kwaliteit: wij denken ook aan je
                budget. Daarom geven wij nu de{" "}
                <b>gevelplint in kwalitatieve blauwsteen aan halve prijs!</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 align-self-center">
          <div className="text-center">
            <img src={img1} className="team_img" alt="" />
            <button className="btn p-2 px-4 btnBg mx-4 btn-warning rounded-pill">
              <span>Ontvang uw offerte »</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;

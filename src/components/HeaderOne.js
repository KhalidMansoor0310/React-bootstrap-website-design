import React from "react";
import "../assets/css/HeaderOne.css";
import onbanner from "../assets/img/onBannerTag.png";
import formArrow from "../assets/img/formArrow.gif";
function HeaderOne() {
  return (
    <div className="hero">
      <div className="container">
        <div className="pt-4 col-md-5 offset-md-6 ">
          <h1 className="hero__heading">Gevelrenovatie? Cralux!</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-0">
            <div className="mt-0 ">
              <img src={onbanner} width="100%" className="mt-0 " alt="" />

              <div className="my-3 my-5">
                <h4 className="text-success">
                  <i class="fa fa-check text-green " aria-hidden="true"></i>{" "}
                  Duurzamheid
                </h4>
                <p align="justify" className="text-muted hero__paragraph">
                  Meer geld en energie besparen? Dat start bij de plaatsing van
                  thermische isolatie op je buitenmuur in combinatie met
                  hoogwaardige crepi. Onze aanpak: analyseren, adviseren en
                  realiseren.
                </p>
                <h4 className="text-success">
                  <i class="fa fa-check" aria-hidden="true"></i> Maatwerk
                </h4>
                <p align="justify" className="text-muted hero__paragraph">
                  Onze bouwexperts komen langs voor een gratis gevelinspectie en
                  stellen een oplossing op maat voor die naadloos inspeelt op
                  jouw noden en de hoogste isolatienormen. Wij berekenen ter
                  plaatse een offerte en maken je meteen wegwijs in de
                  verschillende isolatie- en renovatiepremies!
                </p>
                <h4 className="text-success">
                  <i class="fa fa-check" aria-hidden="true"></i> vakManschap
                </h4>
                <p align="justify" className="text-muted hero__paragraph">
                  Ervaring is troef bij Cralux! Onze werkploegen plaatsen elke
                  maand meer dan 5000m2 crepi in heel Vlaanderen en Brussel. Wij
                  werken snel, netjes en met de puntjes op de afwerking. Onze
                  bonus? In combinatie met het plaatsen van crepi nemen we ook
                  alle kleine klusjes voor een volledige afwerking op!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h5 className="hero__subheading">
              {" "}
              Geniet nu van{" "}
              <span className="hero__subheaing--span text-white p-1">
                50% korting
              </span>{" "}
              op gevelplint in blauwe steen en granietkorrel!{" "}
            </h5>

            <div className="container">
              <div className="my-5 hero__form">
                <div className="container text-white">
                  <h4 className="pt-3 text-center">
                    Ontvang uw gratis offerte
                  </h4>
                  <div className="text-center">
                    <img src={formArrow} width="25%" />
                  </div>
                  <p className="text-center">
                    Waarover wilt u meer informatie?
                  </p>
                  <form className="right_div_para  p-2">
                    <div className="form-check text-white">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Crepi
                      </label>
                    </div>
                    <div className="form-check text-white">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Gevelisolatie
                      </label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter your name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter your phone"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter your address"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-8">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="street"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="city"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="postal code"
                      />
                    </div>
                    <div className="form-check text-white">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />{" "}
                      Ja, ik wens de nieuwsbrief te ontvangen
                    </div>

                    <button className="rounded-pill yellow_btn fw-bold btn btn-warning btn-block text-center py-3 my-3">
                      Aanbbrag Verstuvern
                    </button>
                    <div className="hero-btn__text text-white my-3">
                      <span>
                        Alle gegevens zijn vertrouwelijk en worden behandeld in
                        overeenstemming met de Europese wetgeving inzake de
                        bescherming van de persoonlijke levenssfeer. Lees meer
                        in ons privacybeleid.
                      </span>
                      <br />
                      <br />
                      <span className="mb-0">
                        Door vrijblijvend dit formulier in te vullen gaat u
                        akkoord met de algemene voorwaarden.
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderOne;

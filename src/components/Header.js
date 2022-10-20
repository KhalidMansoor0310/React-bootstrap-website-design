import React from "react";
import banner1 from "../assets/img/banner1.jpg";
import onbanner from "../assets/img/onBannerTag.png";
import arrow from "../assets/img/formArrow.gif";
import "../assets/css/Header.css";
function Header() {
  return (
    <>
      {/* <div className="container-fluid "> */}

      <img src={banner1} alt="" className="background_img" />
      <img src={onbanner} className="onbanner_img" alt="" />

      {/* </div> */}

      <div className="container left_para_div">
        <div className="row form_row">
          <div className="col-12 col-lg-6 left_div_para my-5  col-sm-12 ">
            <h4>
              <i class="fa fa-check " aria-hidden="true"></i> Duurzamheid
            </h4>
            <p align="justify" className="text-muted">
              Meer geld en energie besparen? Dat start bij de plaatsing van
              thermische isolatie op je buitenmuur in combinatie met
              hoogwaardige crepi. Onze aanpak: analyseren, adviseren en
              realiseren.
            </p>
            <h4>
              <i class="fa fa-check" aria-hidden="true"></i> Maatwerk
            </h4>
            <p align="justify" className="text-muted">
              Onze bouwexperts komen langs voor een gratis gevelinspectie en
              stellen een oplossing op maat voor die naadloos inspeelt op jouw
              noden en de hoogste isolatienormen. Wij berekenen ter plaatse een
              offerte en maken je meteen wegwijs in de verschillende isolatie-
              en renovatiepremies!
            </p>
            <h4>
              <i class="fa fa-check" aria-hidden="true"></i> vakManschap
            </h4>
            <p align="justify" className="text-muted">
              Ervaring is troef bij Cralux! Onze werkploegen plaatsen elke maand
              meer dan 5000m2 crepi in heel Vlaanderen en Brussel. Wij werken
              snel, netjes en met de puntjes op de afwerking. Onze bonus? In
              combinatie met het plaatsen van crepi nemen we ook alle kleine
              klusjes voor een volledige afwerking op!
            </p>
          </div>
          <div className="col-12 col-lg-5  col-sm-12 right_form_div p-0">
            <div className="hero_section_text mt-2">
              <h1>Gevelrenovatie? Cralux!</h1>
              <p>
                Geniet nu van <span>50% korting </span>op gevelplint in blauwe
                steen en granietkorrel!
              </p>
            </div>
            <form className="right_div_para  p-4">
              <h3 className="text-center text-white p-2">
                Ontvang uw gratis offerte
              </h3>
              <div className="m-auto d-flex justify-content-center align-items-center form_down_arrow">
                <img src={arrow} alt="" />
              </div>
              <p className="text-white">Waarover wilt u meer informatie?</p>
              <div className="form-check text-white">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
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
                <label className="form-check-label" for="flexCheckChecked">
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

              <button className="yellow_btn fw-bold btn btn-warning btn-block text-center py-3 my-3">
                Aanbbrag Verstuvern
              </button>
              <div className="under-btn__text text-white my-3">
                <span>
                  Alle gegevens zijn vertrouwelijk en worden behandeld in
                  overeenstemming met de Europese wetgeving inzake de
                  bescherming van de persoonlijke levenssfeer. Lees meer in ons
                  privacybeleid.
                </span>
                <br />
                <br />
                <span className="mb-0">
                  Door vrijblijvend dit formulier in te vullen gaat u akkoord
                  met de algemene voorwaarden.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

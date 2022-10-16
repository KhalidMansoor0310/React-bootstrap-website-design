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
      <div className="hero_section_text mt-2">
        <h2>
          Gevelnerovatie ? Cralux! <br></br>on 50% discount{" "}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet .Consequatur <span>50% discount</span>{" "}
          <br></br>fugit sapiente?
        </p>
      </div>
      {/* </div> */}

      <div className="container left_para_div">
        <div className="row form_row">
          <div className="col-12 col-lg-6 left_div_para my-5  col-sm-12 ">
            <h4>
              <i class="fa fa-check" aria-hidden="true"></i> Duurzamheid
            </h4>
            <p align="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              praesentium iusto itaque illum minus saepe, earum iure quaerat
              tempora nostrum voluptatibus perferendis architecto.
            </p>
            <h4>
              <i class="fa fa-check" aria-hidden="true"></i> javascript
            </h4>
            <p align="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              praesentium iusto itaque illum minus saepe, earum iure quaerat
              tempora nostrum voluptatibus perferendis architecto.
            </p>
            <h4>
              <i class="fa fa-check" aria-hidden="true"></i> HTML
            </h4>
            <p align="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              praesentium iusto itaque illum minus saepe, earum iure quaerat
              tempora nostrum voluptatibus perferendis architecto.
            </p>
          </div>

          <div className="col-12 col-lg-5  col-sm-12 right_form_div">
            <form className="right_div_para  p-5">
              <h3 className="text-center text-white p-2">
                Ontvang uwgratis offerte
              </h3>
              <div className="m-auto d-flex justify-content-center align-items-center form_down_arrow">
                <img src={arrow} alt="" />
              </div>
              <div className="form-check text-white">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Default checkbox
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
                  Checked checkbox
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
                Accept our policies
              </div>

              <button className="yellow_btn btn btn-warning btn-block text-center py-3 my-3">
                Click
              </button>
              <div className="text-justify text-white my-3">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  ea inventore nulla?
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

import React from "react";
import "../assets/css/lorem.css";
import img from "../assets/img/team.jpg";
function Lorem() {
  return (
    <div className="team py-4">
      <div className="my-5 text-center container">
        <div className=" col-md-6 offset-md-3">
          <h1 className="heading mb-0">Ons team</h1>
          <h5 className="mb-4">cralux: partner uw voor elke renovatie</h5>
          <div className="text-muted paragraph__underHeading">
            <p>
              Cralux is uw partner voor alle renovatiewerken: crepi,
              buitenmuurisolatie, totaalrenovatie, ... Dankzij hun jarenlange
              ervaring in de bouw- en renovatiesector ligt uw project in
              professionele handen.
            </p>
            <p>
              De specialiteit van Cralux? Dat is het realiseren van uw droomhuis
              binnen de grenzen van uw budget. Cralux luistert, adviseert en
              inspireert u van bij het eerste gesprek tot het leggen van de
              laatste steen.
            </p>
            <img src={img} className="my-3" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lorem;

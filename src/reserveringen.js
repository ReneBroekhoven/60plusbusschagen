import React, { Component } from "react";
import "./reserveringen.css";

class Reserveringen extends Component {
  render() {
    return (
      <div>
        <h1>Reserveringen ( 0224-272888 )</h1>
        <div className="content-reserveringen">
          <div className="ILB" />
          <div className="reserveringen-tekst">
            <p>
              Elke werkdag van 14.00 tot 15.30 uur kunnen ritten worden aanvraagd
              via telefoonnummer 0224-272888.
            </p>
            <p>
              Ritten moeten één werkdag van tevoren worden aangevraagd.<br />
              Op vrijdag kunnen ritten worden aangevraagd voor zaterdag, zondag
              en maandag.
            </p>
            <p>
              Ritten voor medische afspraken (arts, tandarts, fysiotherapeut,
              Mediance, etc.) mogen verder van tevoren worden aangevraagd.
            </p>
            <p>
              Als u dagelijks of wekelijks op dezelfde tijd naar dezelfde
              bestemming wilt reizen, kunt u een plaats op de{" "}
              <strong>"vaste lijst"</strong> aanvragen. U hoeft dan niet elke
              rit afzonderlijk te reserveren. U belt alleen af bij verhindering.
            </p>
          </div>
          <div className="ILB" />
        </div>
      </div>
    );
  }
}

export default Reserveringen;

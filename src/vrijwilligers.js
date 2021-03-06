import React, { Component } from "react";
import "./vrijwilligers.css";
import {NavLink} from "react-router-dom";

class Vrijwilligers extends Component {
  render() {
    return (
      <div>
        <h1>Vrijwilliger worden ?</h1>
        <div className="content-vrijwilligers">
          <div className="ILB">
          {/*}
          <Iframe url="./60plusbus.mp4"
                  width="500px"
                  height="500px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                  allowFullScreen/>
            <ReactPlayer url='./60plusbus.mp4' playing controls='true' />*/}
          </div>
          <div className="tekst-vrijwilligers">
            <p>
            De 60+ bus is een vrijwilligersorganisatie die sinds 1988 vervoer
            verzorgt voor personen van 55 jaar en ouder binnen de stad Schagen.<br />
            Dit vervoer zou ondenkbaar zijn zonder de enthousiaste en gemotiveerde
            inzet van vrijwilligers die als telefonist (M/V) of chauffeur (M/V)
            werkzaam zijn bij de bus.
            </p>
            <p className="oproep">
            <strong>
            De werkgroep 60+ bus is op dit moment nog op zoek naar
            vrijwilligers. Ga naar <NavLink className="interne-link" to="/contact">Contact</NavLink> en vul het formulier in !
            </strong>
            </p>
          </div>
          <div className="ILB">
          </div>
        </div>
      </div>
    );
  }
}

export default Vrijwilligers;

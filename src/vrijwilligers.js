import React, { Component } from "react";
import "./vrijwilligers.css";
 
class Vrijwilligers extends Component {
  render() {
    return (
      <div className="content-vrijwilligers">
        <h1>Vrijwilliger worden ?</h1>
        <p className="oproep"><strong>De werkgroep 60+ bus is op dit moment nog op zoek naar vrijwilligers. Ga naar "Contact"</strong></p>
        <p className="tekst-vrijwilligers">
        De 60+ bus is een vrijwilligersorganisatie die sinds 1988 vervoer verzorgt voor personen van 55 jaar en ouder binnen de stad Schagen.<br/>
        Dit vervoer zou ondenkbaar zijn zonder de enthousiaste en gemotiveerde inzet van vrijwilligers die als telefonist (M/V) of chauffeur (M/V) werkzaam zijn bij de bus.
       </p>
    </div>
    );
  }
}
 
export default Vrijwilligers;
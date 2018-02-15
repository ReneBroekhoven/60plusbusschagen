import React, { Component } from "react";
 
class Reserveringen extends Component {
  render() {
    return (
      <div className="inhoud-reserveringen">
        <h1>Reserveringen  ( 0224-272888 )</h1>
        <h2>Reserveren van een rit</h2>
        <p>
          U kunt een rit (zowel enkele reis als retour)
          boeken via de telefonist(e) op telefoonnummer 0224-272888.<br/>
          Dit kan op werkdagen van 14.00 uur tot 15.30 uur.<br/>
          U kunt een rit reserveren één werkdag van te voren.</p>
        <p>
          Als u naar een <strong>medische afspraak</strong> vervoerd wilt worden, kan dat ruimer van te voren dan 1 werkdag.
        </p>
        <h2>Ritten op vaste tijdstippen</h2>
        <p>
          Indien u op een vast tijdstip naar een vaste bestemming wilt rijden kan een plaats op de 'vaste' lijst worden aangevraagd.<br/>
          Ook weer het het standaard reserveringsnummer : 0224-272888. 
        </p>
          
      </div>
    );
  }
}
 
export default Reserveringen;
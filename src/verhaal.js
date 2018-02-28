import React, { Component } from "react";
import "./verhaal.css";


class Reserveringen extends Component {
  render() {
    return (
      <div >
        <h1>Ons verhaal</h1>
        <div className="content-verhaal">
          <div className="geschiedenis">
            <h2>Geschiedenis</h2>
            <p>
            In mei 1988 besloot de NZH, de voorloper van Connexxion, buslijn 159 op te heffen. 
            Lijn 159 reed een lus door Schagen en met name plaatselijke senioren maakten er regelmatig gebruik van. Diverse Schagense ouderen waren, als gevolg van deze opheffing, opeens verstoken van openbaar vervoer. De 60+ bus werd daarom in oktober 1988 opgericht
            om dit gemis op te vangen en van deur tot deur vervoer te garanderen voor senioren binnen de stad Schagen.
            </p>  
            <p>
            De eerste bus was een kleine tweedehands Ford Transit. Het aantal passagiers groeide onverwacht snel en de 60+ bus dreigde aan het eigen succes ten onder te gaan.
            In 1991 werd een grote donateursactie opgezet en er werd voldoende geld  ingezameld voor een nieuwe, grotere bus.
            </p>
            <p>
            Voortvloeiend uit deze donateursactie bood het Makado winkelcentrum zich aan als sponsor.
            De 60+ bus, voorzien van het logo van het Makado, werd in de volksmond al snel omgedoopt tot het “Makado-busje”.
            </p>
            <p>
            De gemeente Schagen zag het belang in van het soort vervoer dat de bus bood en besloot de organisatie te steunen met een subsidie.
            Met de sponsoring, de subsidie en de rittengelden kon en kan de bus draaiende worden gehouden.
            </p>
            <p>
            De 60+ bus bood oorspronkelijk vervoer voor personen van 60 jaar en ouder.
            Langzamerhand werd deze doelgroep echter steeds mobieler, waardoor het aantal passagiers daalde.
            Om dit verlies op te vangen werd de leeftijdsgrens verlaagd naar 55 jaar en ouder. 
            Sindsdien is het aantal passagiers redelijk stabiel gebleven.
            </p>
            <p>
            Door de jaren heen hebben tientallen enthousiaste en gemotiveerde vrijwilligers tijd en energie gestoken 
            in de 60+ bus tot grote tevredenheid van de passagiers.
            In 2013 vierde de 60+ bus het 25-jarig bestaan en in september 2017 werd de 300.000ste passagier vervoerd.\
            Een teken dat de bus in een behoefte blijft voorzien.
            </p>
          </div>
          <div className="sponsors">
            <h2>Sponsors</h2>
              <p>In 2016 zijn er nieuwe sponsors bijgekomen en de 60+ bus wordt nu mede mogelijk gemaakt door:</p>
              <ul>
                <li>de gemeente Schagen</li>
                <li>het Makado winkelcentrum</li>
                <li>CineMagnus B.V.</li>
                <li>Omring Schagen B.V.</li>
                <li>Stichting Woonzorggroep Samen</li>
                <li>Wonen Plus Welzijn</li>
                <li>De Koffiekamer</li>
                <li>Van der Veen Noten</li>
                <li>De Nieuwe Nes</li>
                <li>Podoplaza</li>
                <li>Univers reclame</li>
                <li>de gezamenlijke ouderenbonden</li>
              </ul>
          </div>
        </div>  
      </div>
    );
  }
}

export default Reserveringen;

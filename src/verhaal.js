import React, { Component } from "react";
import "./verhaal.css";
import MyModal from './modal.js'


class Verhaal extends Component {
  render() {
    return (
      <div>
        <h1>Ons verhaal</h1>
        <div className="content-verhaal">
          <div className="geschiedenis">
            <h2>Geschiedenis</h2>
            <MyModal />
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
            In 2013 vierde de 60+ bus het 25-jarig bestaan en in september 2017 werd de 300.000ste passagier vervoerd.
            Een teken dat de bus in een behoefte blijft voorzien.
            </p>
          </div>
          <div className="sponsors">
            <h2>Sponsors</h2>
              <p>Wij zijn zeer erkentelijk voor onze sponsors. De 60+ bus wordt mede mogelijk gemaakt door:</p>
              <ul>
                <li><a href="https://www.schagen.nl/" target="_blank" rel="noopener noreferrer">de gemeente Schagen</a></li>
                <li><a href="http://www.makadoschagen.nl/pg-907-7-38535/pagina/winkelcentrum_makado_schagen__home.html" target="_blank" rel="noopener noreferrer">het Makado winkelcentrum</a></li>
                <li><a href="https://www.cinemagnus.nl/" target="_blank" rel="noopener noreferrer">CineMagnus B.V.</a></li>
                <li><a href="http://www.omring.nl/Omring/Thuiszorg/Thuiszorg-teams/Omring-Thuiszorg-Wij-zijn-de-thuiszorg-in-Schagen" target="_blank" rel="noopener noreferrer">Omring Schagen B.V.</a></li>
                <li><a href="https://www.woonzorggroepsamen.nl/" target="_blank" rel="noopener noreferrer">Stichting Woonzorggroep Samen</a></li>
                <li><a href="http://www.wonenpluswelzijn.nl/pg-21592-7-65776/pagina/home.html" target="_blank" rel="noopener noreferrer">Wonen Plus Welzijn</a></li>
                <li><a href="http://www.dekoffiekamer.com/" target="_blank" rel="noopener noreferrer">De Koffiekamer</a></li>
                <li><a href="http://www.vanderveennoten.nl/pg-21826-7-50578/pagina/noten_zuidvruchten__wijnen.html" target="_blank" rel="noopener noreferrer">Van der Veen Noten</a></li>
                <li><a href="https://www.nieuwenes.nl/" target="_blank" rel="noopener noreferrer">De Nieuwe Nes</a></li>
                <li><a href="http://podoplazaschagen.nl/">Podoplaza</a></li>
                <li><a href="http://vanderlindentandtechniek.nl/">Van der Linden Tandtechniek</a></li>
                <li><a href="https://www.univers-reklame.nl/" target="blank" rel="noopener noreferrer">Univers reclame</a></li>
                <li><a href="http://sbo-schagen.nl/" target="_blank" rel="noopener noreferrer">de gezamenlijke ouderenbonden</a></li>
              </ul>
          </div>
        </div>  
      </div>
    );
  }
}

export default Verhaal;

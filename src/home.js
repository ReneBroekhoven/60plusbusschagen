import React, { Component } from "react";
import "./home.css";
import bus from "./foto_bus.jpg";
import driehonderdduizendste from "./300.000ste.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>60+ Bus in het kort</h1>
        <div className="content-home">
          <figure className="figure_1">
            <img
              src={bus}
              id="foto-bus1"
              className="foto-bus1"
              alt="60plus_bus"
              width="600px"
              height="600px"
            />
            <figcaption>
              de enige en echte 60+ bus ..
            </figcaption>
          </figure>
          <div className="tekst">
            <p>
              De 60+ bus is een initiatief van vrijwilligers en is bedoeld om ouderen te
              ondersteunen in hun mobiliteit. <br /><br />
              De 60+ bus verzorgt van deur tot deur vervoer in de stad Schagen, inclusief camping Burghorn en het crematorium.<br /><br />
              De bus wordt gereden door vrijwilligers en u kunt eenvoudig
              telefonisch een rit reserveren.<br /><br />
              Een rit kost slechts € 1,00 per enkele reis.<br /><br />
              De bus rijdt 7 dagen per week van 9.00 tot 22.00, op zaterdag en zondag van 9.00 tot 18.00 uur.
            </p>
          </div>
          <figure className="figure_2">
            <img
              src={driehonderdduizendste}
              id="foto-bus2"
              className="foto-bus2"
              alt="60plus_bus"
              width="500px"
              height="500px"
            />
            <figcaption>
              14 september 2017 : de 300.000ste passagier !
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default Home;

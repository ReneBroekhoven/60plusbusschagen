import React, { Component } from "react";
import './home.css';
import bus from './foto_bus.jpg';
import driehonderdduizendste from './300.000ste.jpg';

 
class Home extends Component {
  render() {
    return (
      <div>
        <h1>60+ Bus in het kort</h1>
        <div className="content-home">
          <figure className="figure_1">
            <img src={bus} id="foto-bus1" className="foto-bus1" alt="60plus_bus" width="600px" height="600px"/>
          </figure>
          <div className="tekst">
            <p>
              De 60+ bus is een initiatief van vrijwiliigers uit de stad Schagen en is bedoeld om ouderen op een eenvoudige en goedkope manier te helpen met
              vervoerswensen in de stad Schagen.<br/>
              Op deze manier proberen wij de ouderen te ondersteunen in hun mobiliteit.<br/><br/> 
              De 60+ bus rijdt u in de stad Schagen van uw <strong>eigen</strong> huis naar een door u gewenste locatie.<br/><br/>
              De bus wordt gereden door vrijwilligers en u kunt eenvoudig telefonisch een rit (zowel heen als terug) reserveren.<br/><br/>
              Een rit kost slecht € 1,00 per enkele reis.<br/><br/>
              De bus rijdt 7 dagen per week van 9.00 tot 22.00.<br/>
              Zaterdag en zondag tot 18.00 uur.
            </p>  
          </div>
          <figure className="figure_2">
            <img src={driehonderdduizendste} id="foto-bus2" className="foto-bus2" alt="60plus_bus" width="500px" height="500px" />
            <figcaption>14 september 2017 : de 300.000ste passagier !</figcaption>
          </figure> 
        </div>
      </div>  
    );
  }
}
 
export default Home;
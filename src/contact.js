import React, { Component } from "react";
import Formulier from './formulier.js';
import './contact.css';
 
class Contact extends Component {
  render() {
    return (
      <div >
        <h1>Contact</h1>
        <div className="inhoud">
          <div className="tekst">
            <h2>Reserveren</h2>
            <p>
              Telefoon : 0224-272888 op werkdagen van 14.00 tot 15.30 uur<br/>
              (<em>Op <strong>korte termijn afzeggen</strong> van een rit : 06-81617269)</em>
            </p>  
            <h2>Email</h2>
            <p>info@60plusbusschagen.nl</p>  
            
            <h2>Bestuur 60+ Bus</h2>
            <p>
              Voorzitter: Simon Carmio<br/>
              Secretaris : René Broekhoven<br/>
              Penningmeester : Wil Polder<br/>
              Coördinator passagiers : Hansje Kalff<br/>
              Coördinator chauffeurs : Jaap Schuurman<br/>
              Coördinator technische zaken : Willem de Zeeuw<br/>
            </p>
            <p>
              Het bestuur is te bereiken via het contactformulier hiernaast.</p> 
          </div>
          
          <div className="formulier"> 
            <Formulier />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Contact;
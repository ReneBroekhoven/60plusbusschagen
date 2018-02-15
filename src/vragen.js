import React, { Component } from "react";
import "./vragen.css";
 

let vragenEnAntwoorden  = [
  { 
    nummer: 1,
    "vraag" : "Wie kunnen er allemaal mee ?",
   "antwoord" : `De 60+ bus is bedoeld voor ouderen in Schagen.`
  },
  { 
    nummer: 2,
    "vraag" : "Moet ik een abonnement afsluiten ?",
   "antwoord" : "Neen, dat is niet nodig"
  },
  { 
    nummer: 3,
    "vraag" : "Wat kost het ?",
   "antwoord" : "U betaalt slechts € 1,00 per enkele rit. (Heen en terug kost dus € 2,00)"
  },
  { 
    nummer: 4,
    "vraag": "Hoe kan ik reserveren ?",
   "antwoord": "Bel één dag van te voren op werkdagen met 0224-272888 tussen 14.00 en 15.30"
  },
  { 
    nummer: 5,
    "vraag": "Hoe kan ik het beste afzeggen ?",
   "antwoord": "Op dezelfde dag nog opzeggen; graag via 06-81617269. Andere opzeggingen gewoon via 0224-272888 tussen 14.00 en 15.30."
  },
  { 
    nummer: 6,
    "vraag": "Waar rijdt de 60+ bus allemaal?",
   "antwoord": "De 60+ bus rijdt binnen de stad Schagen en inclusief de camping Burghorn en het crematorium.  "
  },
  { 
    nummer: 7,
    "vraag": "Wanneer rijdt de 60+ bus ?",
   "antwoord": "Werkdagen van 9.00 uur tot 22.00 uur en in het weekend van 9.00 uur tot 18.00 uur."
  },
  { 
    nummer: 8,
    "vraag": `Wat zijn afwijkende rijtijden (bv. feestdagen) ?`,
   "antwoord": "Op feestdagen van 9.00 uur tot 17.00 uur. (1e en 2e Paasdag, Hemelvaart, 1e en 2e Pinksterdag, Koningsdag). Op de beide kerstdagen van 10.00 uur tot 17.00 uur. Op Nieuwjaarsdag van 13.00 uur tot 17.00 uur."
  },  
  { 
    nummer: 9,
    "vraag": "Kan ik ook eerder reserveren dan die ene dag van te voren",
   "antwoord": "Bij medische redenen (bv. doktersbezoek) kan al eerder de rit worden gereserveerd."
  },
  { 
    nummer: 10,
    "vraag": "Bestaat er een 'vaste lijst' ?",
   "antwoord": "Mensen die wekelijks op dezelfde dag en tijd naar dezelfde bestemming willen reizen, kunnen een plaats op de 'vaste lijst' aanvragen. Zij hoeven dan alleen te bellen als ze een keer niet gaan. Aanvragen voor een plaats op de vaste lijst kunnen worden gedaan bij de telefoniste (0224-272888, 14.00 - 15.30 op werkdagen)"
  },
  { 
    nummer: 11,
    "vraag": "Hoeveel personen kunnen er mee in de 60+ bus ?",
   "antwoord": "Er kunnen maximaal 7 personen in de 60+ bus worden vervoerd."
  },
  { 
    nummer: 12,
    "vraag" : "Kunnen er rollators mee ?",
   "antwoord" : "Ja, rollators kunnen mee in de bus. (Echter geen rolstoelen of scootmobiels)"
  },
  { 
    nummer: 13,
    "vraag": "Kan ik met de chauffeur ook afspraken maken ?",
   "antwoord": "Neen, u kunt niet met de chauffeur zelf afspraken maken of reserveren. Gebruik daarvoor altijd het nummer 0224-272888. (Maar voor een gezellig praatje is de chauffeur altijd wel in !)"
  }
]

class Vragen extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    //this.zinMaker = this.zinMaker.bind(this);
  }
  
  // beter maken met true/false en toggleClass oid
  handleClick(event){
    let antwoord = event.currentTarget.nextSibling.className
    if (antwoord === 'antwoord dicht'){
      event.currentTarget.nextSibling.className = 'antwoord open';
    }else{
      event.currentTarget.nextSibling.className = 'antwoord dicht';
    }
  }

  componentDidMount(){
   //console.log("hoera");
  };


  render() {
    let class_antwoord = 'antwoord dicht';
    return (
      <div className="content-vragen">
        <h1>Vragen ?</h1>
        <div className="text-body">
          <h3>Onderstaand zijn de veel gestelde vragen. Klik op de vraag om het antwoord te zien.</h3>
          <ul>
            {vragenEnAntwoorden.map( (item, index) => 
            <li key={vragenEnAntwoorden[index].nummer}>
              <span onClick={this.handleClick} className="vraag">
                {vragenEnAntwoorden[index].vraag}
              </span>
              <span className={class_antwoord}>
                {vragenEnAntwoorden[index].antwoord}
              </span>
            </li>
            )
            }
          </ul>
        </div>  
      </div>
    );
  }
}
 
export default Vragen;


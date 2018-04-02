import React, { Component } from "react";
import "./vragen.css";

let vragenEnAntwoorden = [
  {
    nummer: 1,
    vraag: "Wie kunnen er mee met de 60+ bus ?",
    antwoord: `Personen van 55 jaar en ouder binnen de stad Schagen.`
  },
  {
    nummer: 2,
    vraag: "Moet ik een abonnement afsluiten voor de 60+ bus ?",
    antwoord: "Neen, dat is niet nodig"
  },
  {
    nummer: 3,
    vraag: "Wat kost een rit met de 60+ bus ?",
    antwoord: `€ 1,00 per rit, € 2,00 voor een retour. 
                 €10,00 voor een 10-rittenkaart.`
  },
  {
    nummer: 4,
    vraag: `Hoe kan ik de 60+ bus reserveren ?`,
    antwoord: `Elke werkdag van 14.00 tot 15.30 uur via telefoonnummer 0224-272888.`
  },
  {
    nummer: 5,
    vraag: `Ik ben verhinderd; hoe kan ik de 60+ bus afzeggen ?`,
    antwoord: `Via telefoonnummer 0224-272888. Als u plotseling verhinderd bent, kunt u afbellen via 06-81617269.
               (Dit nummer is niet bestemd voor het maken van reserveringen.)`
  },
  {
    nummer: 6,
    vraag: "Waar rijdt de 60+ bus ?",
    antwoord: `In de stad Schagen inclusief de camping Burghorn en het crematorium.`
  },
  {
    nummer: 7,
    vraag: "Wanneer rijdt de 60+ bus ?",
    antwoord: `Werkdagen           van 9.00 uur tot 22.00 uur
                Zaterdag en zondag  van 9.00 uur tot 18.00 uur.`
  },
  {
    nummer: 8,
    vraag: `Heeft de 60+ bus afwijkende rijtijden ? `,
    antwoord: `Ja.
                Kerstdagen     van 10.00 tot 17.00 uur
                Nieuwjaarsdag  van 13.00 tot 17.00 uur
                Overige feestdagen  van 09.00 tot 17.00 uur`
  },
  {
    nummer: 9,
    vraag: `Kan ik de 60+ bus eerder reserveren dan één werkdag van tevoren ?`,
    antwoord: ` Alleen voor medische afspraken (arts, tandarts, fysiotherapeut, Mediance, etc.) `
  },
  {
    nummer: 10,
    vraag: `Heeft de 60+ bus een 'vaste lijst' ?`,
    antwoord: `Ja.
                Als u dagelijks of wekelijks op dezelfde tijd naar dezelfde 
                bestemming wilt reizen, kunt u een plaats op de “vaste lijst” aanvragen.
                U hoeft dan niet elke rit afzonderlijk te reserveren. 
                U belt alleen af bij verhindering.`
  },
  {
    nummer: 11,
    vraag: "Hoeveel personen kunnen er mee in de 60+ bus ?",
    antwoord: `Maximaal 7 passagiers.`
  },
  {
    nummer: 12,
    vraag: "Kan ik mijn rollator meenemen in de 60+ bus ?",
    antwoord: `Rollators en boodschappenwagentjes kunnen worden meegenomen.`
  },
  {
    nummer: 13,
    vraag: "Kan ik met de chauffeur van de 60+ bus afspraken maken ?",
    antwoord: "Neen, alleen met de telefonisten"
  },
  {
    nummer: 14,
    vraag: `Wanneer is de 60+ bus “vol” ?`,
    antwoord: `De chauffeur rijdt met een kwartierlijst en kan één of twee passagiers per kwartier vervoeren.
                 Bij drie of meer passagiers is al gauw een half uur of drie kwartier nodig.
                 Als alle regels op de kwartierlijst zijn volgeboekt, 
                 is er geen tijdsruimte meer om nog een rit te boeken, ook al zit er slechts één passagier in de bus.`
  }
];

class Vragen extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // beter maken met true/false en toggleClass oid
  handleClick(event) {
    let antwoord = event.currentTarget.nextSibling.className;
    if (antwoord === "antwoord dicht") {
      event.currentTarget.nextSibling.className = "antwoord open";
    } else {
      event.currentTarget.nextSibling.className = "antwoord dicht";
    }
  }

  render() {
    let class_antwoord = "antwoord dicht";
    return (
      <div>
        <h1>Vragen ?</h1>
        <div className="content-vragen">
          <div className="ILB"></div>
          <div className="vragen-tekst">
            <h3>
            Onderstaand zijn een aantal veel gestelde vragen. Klik op de vraag om het
            antwoord te zien.
            </h3>
            <ul>
            {vragenEnAntwoorden.map((item, index) => (
              <li key={vragenEnAntwoorden[index].nummer}>
                <span onClick={this.handleClick} className="vraag">
                  {vragenEnAntwoorden[index].vraag}
                </span>
                <span className={class_antwoord}>
                  {vragenEnAntwoorden[index].antwoord}
                </span>
              </li>
            ))}
            </ul>
          </div>
          <div className="ILB"></div>
        </div>
      </div>
    );
  }
}

export default Vragen;

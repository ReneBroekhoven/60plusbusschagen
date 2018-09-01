import React, { Component } from "react";
import "./reserveringen.css";
import moment from "moment";
import { feestdagen } from './helpers.js';
import { weergeven_nieuws } from './helpers'

let {pasen, kerstmis, pinksteren, nieuwjaar, hemelvaart, koningsdag, bevrijdingsdag} = feestdagen;

// // geeft in string "maand.dag" 1e paasdag aan. 2018: 04.01
// function bereken_pasen(Y) {
//   var C = Math.floor(Y/100);
//   var N = Y - 19*Math.floor(Y/19);
//   var K = Math.floor((C - 17)/25);
//   var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
//   I = I - 30*Math.floor((I/30));
//   I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
//   var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
//   J = J - 7*Math.floor(J/7);
//   var L = I - J;
//   var M = 3 + Math.floor((L + 40)/44);
//   var D = L + 28 - 31*Math.floor(M/4);

//   return padout(M) + '.' + padout(D);
// }
// function padout(number) { return (number < 10) ? '0' + number : number; }


// moment.locale('nl',{
//   months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
//   weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_')
// });
// moment.locale('nl');

// //berekent pasen en zet in een string voor dit jaar
// let huidigJaar = moment().year();
// let berekende_pasen = bereken_pasen(moment().year()); // string maand.dag
// let pasen_string = `${huidigJaar}-${berekende_pasen.slice(0,2)}-${berekende_pasen.slice(3)}`

// //berekent de feestdagen van het lopend jaar
// let pasen = moment(pasen_string);
// let koningsdag = moment(`${huidigJaar}-04-27`);
// let pinksteren = pasen.clone().add(49, 'days');
// let hemelvaart = pinksteren.clone().subtract(10, 'days');
// let kerstmis = moment(`${huidigJaar}-12-25`); 
// let nieuwjaar = moment(`${huidigJaar}-12-31`).add(1, 'days');

// tekstelementen 
// pasen
let paasdag1T = pasen.clone().format('D MMMM');
let paasdag2T = pasen.clone().add(1, 'days').format('D MMMM');
let paasReserveringT = pasen.clone().subtract(2, 'days').format("dddd D MMMM");
let dagNaPasenT = pasen.clone().add(2, 'days').format("dddd D MMMM");

// koningsdag
let koningsdagT = koningsdag.clone().format('dddd D MMMM');
let dagNaKoningsdagT = koningsdag.clone().add(3, 'days').format('dddd D MMMM');
let koningsdagReserveringT = koningsdag.clone().subtract(1, 'days').format('dddd D MMMM');

// bevrijdingsdag
let dodenherdenkingT = bevrijdingsdag.clone().format('dddd D MMMM');
let bevrijdingsdagT = bevrijdingsdag.clone().add(1, 'days').format('dddd D MMMM');
//let bevrijdingsdagReserveringT = bevrijdingsdag.clone().subtract(1, 'days').format('dddd D MMMM');

// hemelvaart
let hemelvaartT = hemelvaart.clone().format('dddd D MMMM');
let dagNaHemelvaartT = hemelvaart.clone().add(1, 'days').format('dddd D MMMM');
let hemelvaartReserveringT = hemelvaart.clone().subtract(1, 'days').format('dddd D MMMM');

// pinkster dagen
let pinksterDag1T = pinksteren.clone().format('dddd D MMMM');
let pinksterDag2T = pinksteren.clone().add(1, 'days').format('dddd D MMMM');
let pinksterenReserveringT = pinksteren.clone().subtract(2, 'days').format("dddd D MMMM");
let dagNaPinksterenT = pinksteren.clone().add(2, 'days').format("dddd D MMMM");

// kerstdagen
let dagNaKerstmisT, kerstmisReserveringT;
if( [2,3,4,5,6].includes(kerstmis.clone().weekday())){
  kerstmisReserveringT = kerstmis.clone().subtract(1, 'days').format('dddd D MMMM');
}else if(kerstmis.clone().weekday() === 0){
  kerstmisReserveringT = kerstmis.clone().subtract(2, 'days').format('dddd D MMMM');
  dagNaKerstmisT = kerstmis.clone().add(2, 'days').format('dddd D MMMM');
}else if(kerstmis.clone().weekday() === 1){
  kerstmisReserveringT = kerstmis.clone().subtract(3, 'days').format('dddd D MMMM');
  dagNaKerstmisT = kerstmis.clone().add(2, 'days').format('dddd D MMMM');
}
if( [2,3,6].includes(kerstmis.clone().weekday())){
  dagNaKerstmisT = kerstmis.clone().add(2, 'days').format('dddd D MMMM');
}else if(kerstmis.clone().weekday() === 4){
  dagNaKerstmisT = kerstmis.clone().add(4, 'days').format('dddd D MMMM');
}else if(kerstmis.clone().weekday() === 5){
  dagNaKerstmisT = kerstmis.clone().add(3, 'days').format('dddd D MMMM');
}

// nieuwjaar
let dagNaNieuwjaarT, nieuwjaarReserveringT;
if( [2,3,4,5,6].includes(nieuwjaar.clone().weekday())){
  nieuwjaarReserveringT = nieuwjaar.clone().subtract(1, 'days').format('dddd D MMMM');
}else if(nieuwjaar.clone().weekday() === 0){
  nieuwjaarReserveringT = nieuwjaar.clone().subtract(2, 'days').format('dddd D MMMM');
  dagNaNieuwjaarT = nieuwjaar.clone().add(1, 'days').format('dddd D MMMM');
}else if(nieuwjaar.clone().weekday() === 1){
  nieuwjaarReserveringT = nieuwjaar.clone().subtract(3, 'days').format('dddd D MMMM');
  dagNaNieuwjaarT = nieuwjaar.clone().add(1, 'days').format('dddd D MMMM');
}
if( [2,3,4].includes(nieuwjaar.clone().weekday())){
  dagNaNieuwjaarT = nieuwjaar.clone().add(1, 'days').format('dddd D MMMM');
}else if(nieuwjaar.clone().weekday() === 5){
  dagNaNieuwjaarT = nieuwjaar.clone().add(3, 'days').format('dddd D MMMM');
}else if(nieuwjaar.clone().weekday() === 6){
  dagNaNieuwjaarT = nieuwjaar.clone().add(2, 'days').format('dddd D MMMM');
}

// //bericht verschijnings en verwijderings datum 
// let pasen_ervoor = pasen.clone().subtract(7, 'days');
// let pasen_erna = pasen.clone().add(2, 'days');
// let koningsdag_ervoor = koningsdag.clone().subtract(7, 'days');
// let koningsdag_erna = koningsdag.clone().add(1, 'days');
// let hemelvaart_ervoor = hemelvaart.clone().subtract(7, 'days');
// let hemelvaart_erna = hemelvaart.clone().add(1, 'days');
// let pinksteren_ervoor = pinksteren.clone().subtract(7, 'days');
// let pinksteren_erna = pinksteren.clone().add(2, 'days');
// let kerstmis_ervoor = kerstmis.clone().subtract(7, 'days');
// let kerstmis_erna = kerstmis.clone().add(9, 'days');

class Reserveringen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actief1: '',
      actief2: '',
      actief3: '',
      actief4: '',
      actief5: '',
      actief6: ''
    };

    this.activateBericht = this.activateBericht.bind(this);
  }

  // bepaalt de data van pasen en andere feestdagen
  // zet tijden voor en na de feestdag voor tonen bericht
  activateBericht(){
    if(weergeven_nieuws() === 1) {
      this.setState({
        actief1: "actief",// net iets handigers doen
      });
    }else if(weergeven_nieuws() === 2){
      this.setState({
        actief2: "actief",
      });
    }else if(weergeven_nieuws() === 3){
      this.setState({
        actief3: "actief",
      });
    }else if(weergeven_nieuws() === 4){
      this.setState({
        actief4: "actief",
      });
    }else if(weergeven_nieuws() === 5){
      this.setState({
        actief5: "actief",
      });
    }else if(weergeven_nieuws() === 6){
      this.setState({
        actief6: "actief",
      });
    }  
  }

  componentDidMount(){
    let now = moment();
    //let now = moment("2018-12-24"); // test datum
    this.activateBericht();
  }

  render() {
    return (
      <div>
        <h1>Reserveringen ( 0224-272888 )</h1>
        <div className="content-reserveringen">
        <div>
          <div className={`berichten tekst-pasen ${this.state.actief1}`}  >
            <h2>Afwijkende rijtijden Paasdagen</h2>
            <p>Op beide paasdagen, {paasdag1T} en {paasdag2T}, rijdt de bus van 9.00 tot 17.00 uur. De telefoondienst is op 2e paasdag niet aanwezig.</p>
            <p>Ritten voor beide paasdagen kunnen worden aangevraagd op {paasReserveringT}.</p>
            <p>Ritten voor <strong>{dagNaPasenT}</strong> kunnen op {paasReserveringT} worden gereserveerd.</p>
            <p>Goede Vrijdag is voor de 60+ bus een normale (werk)dag !</p>
          </div>
          <div className={`berichten tekst-koningsdag ${this.state.actief2}`} >
            <h2>Afwijkende rijtijden Koningsdag</h2>
            <p>Op Koningsdag {koningsdagT}, rijdt de bus van 9.00 tot 17.00 uur. De telefoondienst is op Koningsdag niet aanwezig.</p>
            <p>Ritten voor Koningsdag <strong>en {dagNaKoningsdagT}</strong> kunnen worden aangevraagd op {koningsdagReserveringT}.</p>
          </div>
          <div className={`berichten tekst-bevrijdingsdag ${this.state.actief3}`} >
            <h2>Afwijkende rijtijden op Dodenherdenking</h2>
            <p>Op {dodenherdenkingT}, rijdt de bus van 9.00 tot 18.00 uur.</p>
            <p>Op {bevrijdingsdagT}, rijdt de bus op de normale tijden</p>
            {/*<p>Ritten voor Koningsdag <strong>en {dagNaKoningsdagT}</strong> kunnen worden aangevraagd op {koningsdagReserveringT}.</p>*/}
          </div>
          <div className={`berichten tekst-hemelvaart ${this.state.actief4}`} >
            <h2>Afwijkende rijtijden Hemelvaart</h2>
            <p>Op Hemelvaart {hemelvaartT} rijdt de bus van 9.00 tot 17.00 uur. De telefoondienst is dan niet aanwezig.</p>
            <p>Ritten voor <strong>{dagNaHemelvaartT}</strong> kunnen worden aangevraagd op {hemelvaartReserveringT}.</p>
          </div>
          <div className={`berichten tekst-pinksteren" ${this.state.actief5}`} >
            <h2>Afwijkende rijtijden Pinksteren</h2>
            <p>Op beide pinksterdagen, {pinksterDag1T} en {pinksterDag2T}, rijdt de bus van 9.00 tot 17.00 uur. De telefoondienst is op 2e pinksterdag niet aanwezig.</p>
            <p>Ritten voor beide pinksterdagen kunnen worden aangevraagd op {pinksterenReserveringT}.</p>
            <p>Ritten voor <strong>{dagNaPinksterenT}</strong> kunnen ook op {pinksterenReserveringT} worden gereserveerd.</p>
          </div>
          <div className={`berichten tekst-kerstdagen" ${this.state.actief6}`} >
            <h2>Afwijkende rijtijden Kerstdagen en Nieuwjaar</h2>
            <p>Op beide kerstdagen rijdt de bus van 10.00 tot 17.00 uur. 
             De telefoondienst is op beide kerstdagen niet aanwezig.
             Ritten voor <strong>{dagNaKerstmisT}</strong> kunnen worden aangevraagd op {kerstmisReserveringT}.
            </p>
            <p>Op oudjaarsdag 31 december rijdt de bus van 09.00 tot 17.00 uur.
             Op nieuwjaarsdag van 13.00 tot 17.00 uur. De telefoondienst is dan afwezig.
             Ritten voor nieuwjaarsdag <strong>en {dagNaNieuwjaarT}</strong> kunnen op {nieuwjaarReserveringT} worden gereserveerd.
            </p>
          </div>
          </div>
          <div className="reserveringen-tekst">
            <p>
              Elke werkdag van 14.00 tot 15.30 uur kunnen ritten worden aanvraagd
              via telefoonnummer 0224-272888.
            </p>
            <p>
              Ritten moeten één werkdag van tevoren worden aangevraagd.<br />
              Op vrijdag kunnen ritten worden aangevraagd voor zaterdag, zondag
              en maandag.
            </p>
            <p>
              Ritten voor medische afspraken (arts, tandarts, fysiotherapeut,
              Mediance, etc.) mogen verder van tevoren worden aangevraagd.
            </p>
            <p>
              Als u dagelijks of wekelijks op dezelfde tijd naar dezelfde
              bestemming wilt reizen, kunt u een plaats op de{" "}
              <strong>"vaste lijst"</strong> aanvragen. U hoeft dan niet elke
              rit afzonderlijk te reserveren. U belt alleen af bij verhindering.
            </p>
          </div>
          <div className="ILB" />     
        </div>
      </div>
    );
  }
}

export default Reserveringen;



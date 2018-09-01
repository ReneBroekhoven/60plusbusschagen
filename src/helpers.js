// library voor datum functies
import moment from "moment";

// verander de engelse namen in nederlandse equivalenten
//!! handige methode om een array snel te typen vanuit een string
moment.locale("nl", {
  months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
    "_"
  ),
  weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
    "_"
  )
});
moment.locale("nl"); // standaard setting is engels

let {
  pasen,
  kerstmis,
  pinksteren,
  nieuwjaar,
  hemelvaart,
  koningsdag,
  bevrijdingsdag
} = bereken_feestdagen();

export const feestdagen = {
  pasen,
  koningsdag,
  bevrijdingsdag,
  hemelvaart,
  pinksteren,
  kerstmis,
  nieuwjaar
};

// berekent begin en eindtijden van speciale nieuwberichten
// betreffende de rittenschema's tijdens feestdagen
export function weergeven_nieuws() {
  let periode = 0;
  let nu = moment(); // huidig tijdstip
  //nu = moment("2018-05-20"); // test datum
  let pasen_ervoor = pasen.clone().subtract(7, "days");
  let pasen_erna = pasen.clone().add(2, "days");
  let koningsdag_ervoor = koningsdag.clone().subtract(7, "days");
  let koningsdag_erna = koningsdag.clone().add(1, "days");
  let bevrijdingsdag_erna = bevrijdingsdag.clone().add(2, "days");
  let bevrijdingsdag_ervoor = bevrijdingsdag.clone().subtract(5, "days"); // korte mededeling
  let hemelvaart_ervoor = hemelvaart.clone().subtract(7, "days");
  let hemelvaart_erna = hemelvaart.clone().add(1, "days");
  let pinksteren_ervoor = pinksteren.clone().subtract(7, "days");
  let pinksteren_erna = pinksteren.clone().add(2, "days");
  let kerstmis_ervoor = kerstmis.clone().subtract(7, "days");
  let kerstmis_erna = kerstmis.clone().add(8, "days");
  if (nu > pasen_ervoor && nu <= pasen_erna) {
    periode = 1;
  } else if (nu > koningsdag_ervoor && nu <= koningsdag_erna) {
    periode = 2;
  } else if (nu > bevrijdingsdag_ervoor && nu <= bevrijdingsdag_erna) {
    periode = 3; 
  } else if (nu > hemelvaart_ervoor && nu <= hemelvaart_erna) {
    periode = 4;
  } else if (nu > pinksteren_ervoor && nu <= pinksteren_erna) {
    periode = 5;
  } else if (nu > kerstmis_ervoor && nu <= kerstmis_erna) {
    periode = 6;
  }
  return periode;
}

function bereken_feestdagen() {
  //berekent pasen en zet in een string voor dit jaar
  let huidigJaar = moment().year();
  let berekende_pasen = bereken_pasen(huidigJaar); // string maand.dag
  //console.log("Pasen is op  :" + berekende_pasen)
  let pasen_string = `${huidigJaar}-${berekende_pasen.slice(
    0,
    2
  )}-${berekende_pasen.slice(3)}`;

  //berekent de feestdagen van het lopend jaar
  let pasen = moment(pasen_string);
  let koningsdag = moment(`${huidigJaar}-04-27`);
  let bevrijdingsdag = moment(`${huidigJaar}-05-04`)
  let pinksteren = pasen.clone().add(49, "days");
  let hemelvaart = pinksteren.clone().subtract(10, "days");
  let kerstmis = moment(`${huidigJaar}-12-25`);
  let nieuwjaar = moment(`${huidigJaar}-12-31`).add(1, "days");

  return {
    pasen,
    koningsdag,
    bevrijdingsdag,
    pinksteren,
    hemelvaart,
    kerstmis,
    nieuwjaar
  };
}

// geeft in string "maand.dag" 1e paasdag aan. 2018: 04.01
function bereken_pasen(Y) {
  var C = Math.floor(Y / 100);
  var N = Y - 19 * Math.floor(Y / 19);
  var K = Math.floor((C - 17) / 25);
  var I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
  I = I - 30 * Math.floor(I / 30);
  I =
    I -
    Math.floor(I / 28) *
      (1 -
        Math.floor(I / 28) *
          Math.floor(29 / (I + 1)) *
          Math.floor((21 - N) / 11));
  var J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
  J = J - 7 * Math.floor(J / 7);
  var L = I - J;
  var M = 3 + Math.floor((L + 40) / 44);
  var D = L + 28 - 31 * Math.floor(M / 4);

  return padout(M) + "." + padout(D);
}
function padout(number) {
  return number < 10 ? "0" + number : number;
}

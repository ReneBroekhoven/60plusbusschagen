import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./home";
import Reserveringen from "./reserveringen";
import Vragen from "./vragen";
import Vrijwilligers from "./vrijwilligers";
import Contact from "./contact";
import logo from "./60+bus1.png";
import NotFound from "./NotFound";

class Main extends Component {
  /*
  componentDidMount(){
  const root = document.documentElement;
  const themeBtns = document.querySelectorAll('.theme > button');
  
  themeBtns.forEach((btn) => {
    btn.addEventListener('click', handleThemeUpdate)
  })
  

  function ColorLuminance(hex, lum) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;
  
    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }
  
    return rgb;
  }

  function handleThemeUpdate(e) {
    switch(e.target.value) {
      case 'kleur1': 
        root.style.setProperty('--kop-staart', '#A9ECA2');
        root.style.setProperty('--kop-staart-items', ColorLuminance('#A9ECA2', -0.6));
        root.style.setProperty('--hover-item', ColorLuminance('#A9ECA2', 0.6));
        root.style.setProperty('--active-item', ColorLuminance('#A9ECA2', -0.2));
        root.style.setProperty('--body', '#F5FFCB');
        root.style.setProperty('--content', '#FFE3B0');
        root.style.setProperty('--rest', '#F5C8BD');
        break
      case 'kleur2': 
         root.style.setProperty('--kop-staart', '#D9F9F4');
         root.style.setProperty('--kop-staart-items', ColorLuminance('#D9F9F4', -0.6));
         root.style.setProperty('--hover-item', ColorLuminance('#D9F9F4', 0.6));
         root.style.setProperty('--active-item', ColorLuminance('#D9F9F4', -0.5));
         root.style.setProperty('--body', '#9CD9DE');
         root.style.setProperty('--content', '86C1D4');
         root.style.setProperty('--rest', '#5A92AF');
        break
      case 'kleur3':
      console.log('kleur3)');
        root.style.setProperty('--kop-staart', '#9BB899');
        root.style.setProperty('--kop-staart-items', ColorLuminance('#9BB899', -0.6));
        root.style.setProperty('--hover-item', ColorLuminance('#9BB899', 0.6));
        root.style.setProperty('--active-items', ColorLuminance('#9BB899', 0.2));
        root.style.setProperty('--body', '#FCCEAA');
        root.style.setProperty('--content', '#F5827D');
        root.style.setProperty('--rest', '#EA4961');
        break
    }
  }
  
} */

  render() {
    return (
      <Router>
        <div className="container">
          <div className="hoofdtitel">
            <img src={logo} id="logo-nav" className="logo" alt="logo" />
            <h1>60+ Bus Schagen</h1>
          </div>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/reserveringen">Reserveringen</NavLink>
            </li>
            <li>
              <NavLink to="/vragen">Vragen</NavLink>
            </li>
            <li>
              <NavLink to="/vrijwilligers">Vrijwilligers</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            {/*}
            <div className="theme">
              <button value="kleur1">kleur 1</button>
              <button value="kleur2">kleur 2</button>
              <button value="kleur3">kleur 3</button>
            </div>
          */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/reserveringen" component={Reserveringen} />
              <Route path="/vragen" component={Vragen} />
              <Route path="/vrijwilligers" component={Vrijwilligers} />
              <Route path="/contact" component={Contact} />
              <Route render={() => <Redirect to="/" />} />
              {/*<Route component={NotFound} />*/}
            </Switch>
          </div>
          <footer className="footer">
            <p>
              &copy;&nbsp;&nbsp;<small>Stichting 60+ bus Schagen</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reserveringen
              elke werkdag van 14.00 tot 15.30 uur. <strong>0224-272888</strong>&nbsp;&nbsp;
              Ritprijs €1,- / retour €2,- / 10-rittenkaart €10,-
            </p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default Main;

import React, { Component } from "react";
import axios from 'axios';
import './formulier.css';
 
class Formulier extends Component {
  constructor(props) {
    super(props);
   
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Uw formulier is verzonden !');
    event.preventDefault();

    const data = new FormData(event.target);
    
    fetch('formulier_verwerker.php',
      { method: "POST",
        body: data
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
     
      <form onSubmit={this.handleSubmit} className="form">
        
        <h2>CONTACT</h2>
       
        <p type="Naam:">
          <input type="text" id="name" name="name" placeholder="Schrijf uw naam hier.."/>
        </p>
      
        <p type="Email:">
          <input type="email" id="email" name="email"  placeholder=".. en uw email adres .."/>
        </p>

        <p type="Boodschap:">
          <textarea id="message" name="message" maxlength="500" rows="8" cols="40" placeholder="Wat wilt u opns vertellen.."/>
        </p>

        <button>Verzend ..</button>

      <div>
        <span className="fa fa-phone"></span>0224-272888
        <span className="fa fa-envelope-o"></span>info@60plusbusschagen.nl
      </div>

    </form>




    );
  }
}
 
export default Formulier;

//Made by Ariana Lynn
//April 20, 2016
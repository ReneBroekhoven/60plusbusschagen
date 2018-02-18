import React, { Component } from "react";
import axios from 'axios';
import './formulier.css';
 
class Formulier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('Uw formulier is verzonden: ' + this.state.value);
    event.preventDefault();

    // waarom doe ik dit?
    const data = {
      name: this.state.name
    };

    // https://60plusbusschagen.nl/formulier_verwerker.php
    axios.post('/formulier_verwerker.php',
      {name: "test"})
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
          <input type="text" value={this.state.name} onChange={this.handleChange}  placeholder="Schrijf uw naam hier.."/>
        </p>

        <p type="Email:">
          <input type="email" value={this.state.email} onChange={this.handleChange}  placeholder=".. en uw email adres .."/>
        </p>

        <p type="Boodschap:">
          <input type="text" value={this.state.message} onChange={this.handleChange}  placeholder="Wat wilt u opns vertellen.."/>
        </p>

        <button>Verzend ..</button>

      <div>
        <span class="fa fa-phone"></span>0224-222877
        <span class="fa fa-envelope-o"></span>info@60plusbusschagen.nl
      </div>

    </form>




    );
  }
}
 
export default Formulier;

//Made by Ariana Lynn
//April 20, 2016
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
      <form onSubmit={this.handleSubmit} className="formulier">
      <label>
          Naam:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Boodschap:
          <textarea value={this.state.message} name="textarea" onChange={this.handleChange} />
        </label>  
      
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default Formulier;
import React, { Component } from "react";
import './formulier.css';
 
class Formulier extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('formulier_verwerker.php',
      { method: "POST",
        body: data
    })
      .then(function (response) {
        alert('Uw formulier is verzonden !');
        document.getElementById("formulier").reset();
      })
      .catch(function (error) {
        alert('Er is iets misgegaan; probveer opnieuw !')
      });
  }

  render() {
    return (
     
      <form id="formulier" onSubmit={this.handleSubmit} className="form">
        
        <h2>CONTACT</h2>
       
        <p type="Naam:">
          <input 
            type="text" id="name" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange} 
            placeholder="Schrijf uw naam hier.."
          />
        </p>
      
        <p type="Email:">
          <input 
            type="email" 
            id="email" 
            name="email"  
            value={this.state.email} 
            onChange={this.handleChange} 
            placeholder=".. en uw email adres .."/>
        </p>

        <p type="Boodschap:">
          <textarea 
            id="message" 
            name="message" 
            maxLength="500" 
            rows="8" 
            cols="40" 
            value={this.state.message} 
            onChange={this.handleChange} 
            placeholder="Wat wilt u ons vertellen.."/>
        </p>

        <button>Verzend ..</button>
      {/* met toevoeging microdata */}
      <div itemscope itemtype="http://schema.org/Organisation">
        <span className="fa fa-phone"></span><span itemprop="telephone"><a href="tel:+31224272888" className="telefoon">0224-272888</a></span>
        <span className="fa fa-envelope-o"></span><a href="mailto:info@60plusbusschagen.nl" className="email">info@60plusbusschagen.nl</a>
      </div>

    </form>


    );
  }
}
 
export default Formulier;
//Made by Ariana Lynn
//April 20, 2016
//Helper Functions :

function validateEmail(email) 
{
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
}
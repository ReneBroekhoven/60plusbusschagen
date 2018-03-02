import React from 'react';
//import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Iframe from 'react-iframe';
import "./modal.css";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%0',
    transform             : 'translate(-50%, -50%)',
    background: 'var(--content)'
  }
};

class MyModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'darkgreen';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button className="btn-modal" onClick={this.openModal}>Filmpje</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>60+ bus vroeger</h2>
          <button className="btn-film" onClick={this.closeModal}>Sluit &nbsp; &nbsp;X</button>
          <div>
            <Iframe 
              url="./60plusbus.mp4"
              width="500px"
              height="500px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowFullScreen/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
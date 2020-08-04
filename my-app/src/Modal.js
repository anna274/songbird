import React from 'react';
import './App.css';

class Modal extends React.Component {
  render() {
    let congrats = "";
    if(this.props.result === this.props.maxResult) {
      congrats = "Dude, you rock! You know songs of all time! It was a fantastic game :)"
    } else {
      congrats = "Good job! It was a fantastic game :)";
    }
    if(this.props.show) {
      return (
        <div className="modal__overlay">
          <div className="modal">
            <div className="modal__result">
              Your result: 
              <span>{ this.props.result } / { this.props.maxResult }</span>
            </div>
            <p className="modal__congrats">
              { congrats }
            </p>
            <button className="button button_wide modal__button" onClick={ () => { this.props.restartGame() } }>
              New Game
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Modal;
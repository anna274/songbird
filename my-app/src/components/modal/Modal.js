import React from 'react';
import '../../css/modal.css';

const GIF_URL = process.env.PUBLIC_URL + '/gifs/win.gif';

class Modal extends React.Component {
  render() {
    if(this.props.show) {
      if(this.props.result === this.props.maxResult) {
        return (
          <div className="modal__overlay">
            <div className="modal">
              <div className="modal__result">
                WINNING!!!
              </div>
              <div className="modal__gif-container"><img src={GIF_URL} className="modal__gif" alt="winGif"/></div>
              <p className="modal__congrats">
                Dude, you rock! You know songs of all time!
              </p>
              <button className="button button_wide modal__button" onClick={ () => { this.props.restartGame() } }>
                New Game
              </button>
            </div>
          </div>
        );
      }
      return (
        <div className="modal__overlay">
          <div className="modal">
            <div className="modal__result">
              Your result: 
              <span>{ this.props.result } / { this.props.maxResult }</span>
            </div>
            <p className="modal__congrats">
              Good job! It was a fantastic game :)
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
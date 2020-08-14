import React from 'react';
import '../../css/result.css';

const GIF_URL = process.env.PUBLIC_URL + '/gifs/win.gif';

class Result extends React.Component {
  render() {
    if(this.props.result === this.props.maxResult) {
      return (
        <div className="result">
        <div className="result__score">
          WINNING!!!
        </div>
        <img src={GIF_URL} className="result__gif" alt="winGif"/>
        <p className="result__congrats">
          Dude, you rock! You know songs of all time!
        </p>
        <button className="button button_wide result__button" onClick={ () => { this.props.restartGame() } }>
          New Game
        </button>
      </div>
      );
    }
    return (
      <div className="result">
      <div className="result__score">
        Your result: 
        <span>{ this.props.result } / { this.props.maxResult }</span>
      </div>
      <p className="result__congrats">
        Good job! It was a fantastic game :)
      </p>
      <button className="button button_wide result__button" onClick={ () => { this.props.restartGame() } }>
        New Game
      </button>
    </div>
    );
  }
}

export default Result;
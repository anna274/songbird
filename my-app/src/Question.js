import React from 'react';
import './App.css';
import Player from './Audio/Player';

const DEFAULT_IMG_URL = '/images/musician.png';

class Question extends React.Component {
  render() {
    if( this.props.levelCompleted ) {
      return (
        <div className="question">
          <div className="question__img-container">
            <img className="question__img" alt="" src={this.props.question.songImg} />
          </div>
          <div className="question__info">
            <h3 className="question__title">{ this.props.question.singer + ' - ' + this.props.question.songName}</h3>
            <Player id={ this.props.question.id } src={ process.env.PUBLIC_URL + this.props.question.songAudio } pause = { this.props.pauseMusic }/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="question">
          <div className="question__img-container">
            <img className="question__img" alt="" src={ process.env.PUBLIC_URL + DEFAULT_IMG_URL } />
          </div>
          <div className="question__info">
            <h3 className="question__title">*******</h3>
            <Player id={ this.props.question.id } src={ process.env.PUBLIC_URL + this.props.question.songAudio } pause = { this.props.pauseMusic }/>
          </div>
        </div>
      )  
    }
  }
}

export default Question;
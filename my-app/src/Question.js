import React from 'react';
import './App.css';

const DEFAULT_IMG_URL = '/images/musician.png';

class Question extends React.Component {
  render() {
    if( this.props.levelCompleted ) {
      return (
        <div className="question">
          <div className="question__img-container">
            <img className="question__img" alt="" src={this.props.question.songImg} />
          </div>
          <div>
            <h3 className="question__title">{ this.props.question.singer + ' - ' + this.props.question.songName}</h3>
            <audio key ={ this.props.question.id } controls>
              <source src={ process.env.PUBLIC_URL + this.props.question.songAudio } />
            </audio>
          </div>
        </div>
      );
    } else {
      return (
        <div className="question">
          <div className="question__img-container">
            <img className="question__img" alt="" src={ process.env.PUBLIC_URL + DEFAULT_IMG_URL } />
          </div>
          <div>
            <h3 className="question__title">*******</h3>
            <audio key ={ this.props.question.id } controls>
              <source src={ process.env.PUBLIC_URL + this.props.question.songAudio } />
            </audio>
          </div>
        </div>
      )  
    }
  }
}

export default Question;
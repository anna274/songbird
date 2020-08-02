import React from 'react';
import './App.css';

class Question extends React.Component {
  render() {
    if( this.props.levelCompleted ) {
      return (
        <div className="question">
          <div className="question__img-container">
            <img className="question__img" alt="" src={this.props.songImg} />
          </div>
          <div>
            <h3 className="question__title">{ this.props.singer + ' - ' + this.props.songName}</h3>
            <audio controls>
              <source src={ this.props.question.songAudio } />
            </audio>
          </div>
        </div>
      );
    } else {
      return (
        <div className="question">
          <div className="question__img-container">
          </div>
          <div>
            <h3 className="question__title">*******</h3>
            <audio controls>
              <source src={ this.props.songAudio } />
            </audio>
          </div>
        </div>
      )  
    }
  }
}

export default Question;
import React from 'react';
import '../App.css';
import Player from '../Audio/Player';

class OptionInfo extends React.Component {
  render() {
    if (this.props.option) {
      return (
        <div className="option__info">
          <div className="option__info__header">
            <div className="option__info__img-container">
              <img className="option__info__img" alt="" src={this.props.option.songImg} />
            </div>
            <div>
              <p className="option__info__song">{ this.props.option.songName }</p>
              <p className="option__info__singer">{ this.props.option.singer }</p>
            </div>
          </div>
          <Player id={ this.props.option.id } src={ process.env.PUBLIC_URL + this.props.option.songAudio }/>
          <p className="option__info__description"> { this.props.option.description } </p>
        </div>
      );
    }
    return (
      <div className="option__info">
        Listen to the player.
        Choose a song from the list.
      </div>
    );
  }
}

export default OptionInfo;
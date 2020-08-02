import React from 'react';
import '../App.css';

class OptionInfo extends React.Component {
  render() {
    if (this.props.option) {
      return (
        <div className="option__info">
          { this.props.option.title }
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
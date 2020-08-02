import React from 'react';
import '../App.css';

class Option extends React.Component {
  render() {
    return (
      <li className="option">
        <span className="option__checkbox"></span>
        <p className="option__title">{ this.props.option.songName + ' - ' + this.props.option.singer}</p>
      </li>
    );
  }
}

export default Option;
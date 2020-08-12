import React from 'react';

class Option extends React.Component {
  render() {
    const classes = ['option'];
    if (this.props.option.checked) {
      if(this.props.answerID === this.props.option.id) {
        classes.push('correct');
      } else {
        classes.push('incorrect');
      }
    }
    return (
      <li className={ classes.join(' ') } onClick = { () => { this.props.onClick(this.props.option.id) } }>
        <span className="option__checkbox"></span>
        <p className="option__title">{ this.props.option.songName + ' - ' + this.props.option.singer}</p>
      </li>
    );
  }
}

export default Option;
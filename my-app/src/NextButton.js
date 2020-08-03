import React from 'react';

class NextButton extends React.Component {
  render() {
    const classes = ['button', 'button_wide'];
    if(!this.props.levelCompleted) {
      classes.push('button_disabled');
    }
    return (
      <button className={ classes.join(' ') } onClick = { this.props.onClick }>
      Next Question
    </button>
    );
  }
}

export default NextButton;
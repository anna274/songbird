import React from 'react';

class NextButton extends React.Component {
  render() {
    return (
      <button className="button button_wide" onClick = { this.props.onClick }>
      Next Question
    </button>
    );
  }
}

export default NextButton;
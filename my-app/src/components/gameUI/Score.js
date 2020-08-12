import React from 'react';

class Score extends React.Component {
  render() {
    return (
      <div className="button">
        Score: { this.props.score }
      </div>
    );
  }
}

export default Score;
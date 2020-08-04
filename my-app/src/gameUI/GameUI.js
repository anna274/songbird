import React from 'react';
import CategoryList from './CategoryList';
import Score from './Score';
import '../App.css';

class GameUI extends React.Component {
  render() {
    return (
      <div className="gameUI">
        <CategoryList className="gameUI" categories = {this.props.categories} currentCategory={ this.props.currentCategory }/>
        <Score score= { this.props.score }/>
      </div>
    );
  }
}

export default GameUI;

import React from 'react';
import './App.css';
import logo from './logo.png';

import GameUI from './gameUI/GameUI';
import NextButton from './NextButton';

import {START_CATEGORY_ID, categories} from './data/categories';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCategory: START_CATEGORY_ID,
    }
    this.nextHandler = this.nextHandler.bind(this);
  }

  nextHandler() {
    let nextCategory = categories.findIndex(category => category.id === this.state.currentCategory) + 1;
    if (nextCategory < categories.length) {
      this.setState({
        currentCategory: categories.find(category => category.id === nextCategory).id
      });
    }
    else {
      this.setState({
        currentCategory: START_CATEGORY_ID
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <GameUI categories={ categories } currentCategory={ this.state.currentCategory }/>
          <NextButton onClick = {this.nextHandler}/>
        </main>
      </div>
    );
  }
}

export default App;

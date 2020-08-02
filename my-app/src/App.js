import React from 'react';
import './App.css';
import logo from './logo.png';

import GameUI from './gameUI/GameUI';
import Question from './Question';
import OptionList from './optionField/OptionList';
import OptionInfo from './optionField/OptionInfo';
import NextButton from './NextButton';

import {START_CATEGORY_ID, categories} from './data/categories';
import categoriesData from './data/categoriesData';

// const OPTIONS_NUMBER = 6;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCategoryID: START_CATEGORY_ID,
      currentOption: null,
    }
    this.score = 0;
    this.levelData = {};
    this.levelCompleted = false;
    this.generateLevelData();
    this.nextHandler = this.nextHandler.bind(this);
    this.generateLevelData = this.generateLevelData(this);
  }

  generateLevelData() {
    this.levelData = {
      options: categoriesData[0].data,
      answer: categoriesData[0].data[0],
    };
  }


  nextHandler() {
    let nextCategory = categories.findIndex(category => category.id === this.state.currentCategoryID) + 1;
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
          <GameUI categories={ categories } currentCategory={ this.state.currentCategoryID }/>
          <Question question = { this.levelData.answer } levelCompleted = { this.levelCompleted }/>
          <div className="optionField">
            <OptionList options = { this.levelData.options }/>
            <OptionInfo option = { this.state.currentOption }/>
          </div>
          <NextButton onClick = {this.nextHandler}/>
        </main>
      </div>
    );
  }
}

export default App;

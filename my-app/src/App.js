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

const OPTIONS_NUMBER = 6;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCategoryID: START_CATEGORY_ID,
      currentOption: null,
      score: 0,
    }
    this.levelData = {};
    this.levelCompleted = false;
    this.generateLevelData(this.state.currentCategoryID);
    this.nextHandler = this.nextHandler.bind(this);
    this.generateLevelData = this.generateLevelData.bind(this);
    this.chooseOption = this.chooseOption.bind(this);
  }

  generateLevelData(category) {
    const allOptions = categoriesData.find((categoryData) => categoryData.categoryID === category).data;
    const allOptionsNumber = allOptions.length;
    const options = [];
    while(options.length < OPTIONS_NUMBER) {
      const randomIndex = Math.floor(Math.random() * allOptionsNumber);
      if(!options.find((option) => option.id === allOptions[randomIndex].id)) {
        options.push(allOptions[randomIndex]);
      }
    }
    const answerIndex = Math.floor(Math.random() * OPTIONS_NUMBER - 1);
    this.levelData = {
        options,
        answer: options[answerIndex],
    };
  }

  chooseOption(optionID) {
    const choosenOption = this.levelData.options.find((option) => option.id === optionID );
    this.setState({
      currentOption: choosenOption,
    });
    if (!this.levelCompleted) {
      choosenOption.checked = true;
    }
    if ( this.levelData.answer.id === optionID ) {
      this.levelCompleted = true;
    }
  }

  nextHandler() {
    if(!this.levelCompleted) {
      return;
    }
    let nextCategoryIndex = categories.findIndex(category => category.id === this.state.currentCategoryID) + 1;
    let nextCategoryID = START_CATEGORY_ID;
    if (nextCategoryIndex < categories.length) {
      nextCategoryID = categories[nextCategoryIndex].id;
    }
    console.log(nextCategoryID);
    this.generateLevelData(nextCategoryID);
    this.levelCompleted = false;
    this.setState({
      currentCategoryID: nextCategoryID,
      currentOption: null,
    });
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
            <OptionList options = { this.levelData.options } answerID = { this.levelData.answer.id } onClick = { this.chooseOption }/>
            <OptionInfo option = { this.state.currentOption }/>
          </div>
          <NextButton levelCompleted = { this.levelCompleted } onClick = {this.nextHandler}/>
        </main>
      </div>
    );
  }
}

export default App;

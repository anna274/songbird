import React from 'react';
import './App.css';
import logo from './logo.png';

import GameUI from './gameUI/GameUI';
import Question from './Question';
import OptionList from './optionField/OptionList';
import OptionInfo from './optionField/OptionInfo';
import NextButton from './NextButton';
import Modal from './Modal';

import {START_CATEGORY_ID, categories} from './data/categories';

import { generateNewLevel, OPTIONS_NUMBER } from './helpers/generateNewLevel';
import ScoreManager from './helpers/ScoreManager';

class App extends React.Component {
  constructor() {
    super();
    this.scoreManager = new ScoreManager(categories.length, OPTIONS_NUMBER);
    this.state = {
      currentCategoryID: START_CATEGORY_ID,
      currentOption: null,
      score: this.scoreManager.score,
      gameOver: false,
    }
    this.levelData = generateNewLevel(this.state.currentCategoryID)
    this.levelCompleted = false;
    this.nextHandler = this.nextHandler.bind(this);
    this.chooseOption = this.chooseOption.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  chooseOption(optionID) {
    const choosenOption = this.levelData.options.find((option) => option.id === optionID );
    if (!this.levelCompleted) {
      if(choosenOption.checked) {
        return;
      }
      choosenOption.checked = true;
      if ( this.levelData.answer.id === optionID) {
        this.levelCompleted = true;
        this.setState({
          score: this.scoreManager.recalculateScore(),
        });
      } else {
        this.scoreManager.addAttempt();
      }
    }
    this.setState({
      currentOption: choosenOption,
    });
  }

  nextHandler() {
    if(!this.levelCompleted) {
      return;
    }
    let nextCategoryIndex = categories.findIndex(category => category.id === this.state.currentCategoryID) + 1;
    if (nextCategoryIndex < categories.length) {
      const nextCategoryID = categories[nextCategoryIndex].id;
      this.levelData = generateNewLevel(nextCategoryID);
      this.levelCompleted = false;
      this.setState({
        currentCategoryID: nextCategoryID,
        currentOption: null,
      });
    } else {
      this.setState({
        gameOver: true,
      });  
    }

  }

  restartGame() {
    this.scoreManager.resetScore();
    this.levelData = generateNewLevel(START_CATEGORY_ID);
    this.levelCompleted = false;
    this.setState({
      currentCategoryID: START_CATEGORY_ID,
      currentOption: null,
      score: this.scoreManager.score,
      gameOver: false,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <GameUI categories={ categories } currentCategory={ this.state.currentCategoryID } score = { this.state.score }/>
          <Question question = { this.levelData.answer } levelCompleted = { this.levelCompleted }/>
          <div className="optionField">
            <OptionList options = { this.levelData.options } answerID = { this.levelData.answer.id } onClick = { this.chooseOption }/>
            <OptionInfo option = { this.state.currentOption }/>
          </div>
          <NextButton levelCompleted = { this.levelCompleted } onClick = {this.nextHandler}/>
        </main>
        <Modal show = { this.state.gameOver } result = { this.state.score } maxResult = { this.scoreManager.getMaxScore() } restartGame = { this.restartGame }/>
      </div>
    );
  }
}

export default App;

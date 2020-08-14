export default class ScoreManager {
  constructor(levelsNumber, optionsNumber = 6) {
    this.levelsNumber = levelsNumber;
    this.optionsNumber = optionsNumber;
    this.maxScoreForLevel = this.optionsNumber - 1;
    this.score = 0;
    this.attempts = 0;
  }

  resetScore() {
    this.score = 0;
    this.attempts = 0;
  }

  addAttempt() {
    this.attempts += 1;
  }

  getMaxScore() {
    return this.levelsNumber * this.maxScoreForLevel;
  }

  recalculateScore() {
    this.score += this.maxScoreForLevel - this.attempts;
    this.attempts = 0;
    return this.score;
  }
}
import categoriesData from '../data/categoriesData';
const OPTIONS_NUMBER = 6;

function generateNewLevel(categoryID) {
  const allOptions = categoriesData.find((categoryData) => categoryData.categoryID === categoryID).data;
  const allOptionsNumber = allOptions.length;
  let options = [];
  while(options.length < OPTIONS_NUMBER) {
    const randomIndex = Math.floor(Math.random() * allOptionsNumber);
    if(!options.find((option) => option.id === allOptions[randomIndex].id)) {
      options.push(allOptions[randomIndex]);
    }
  }
  options = options.map((option) => {
    const optionClone = { ...option };
    optionClone.checked = false;
    return optionClone;
  });
  const answerIndex = Math.floor(Math.random() * (OPTIONS_NUMBER - 1));
  const answer = options[answerIndex]
  console.log("Answer: " + answer.songName);
  return {
    options,
    answer,
  }
}

export { generateNewLevel, OPTIONS_NUMBER }
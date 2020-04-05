/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars, ) {
  let result = chars.map(({ name }) => name);
  return result;
}

/**
* print (console.log) ids of all characters
* @param {Array} chars
*/
function printCharacterNames(chars) {
  let result = chars.map(({ name }) => name);
  return result;

}

/**
* return an array of non-human characters
* @param {Array} chars
* @return {Array} - non human characters
*/
function getNonHumanCharacters(chars) {
  let result = chars.filter(obj => {
      return obj.species !== 'Human'
    });
    let newArray = Array.from(result);
    return newArray;
}

/**
* return info about character named 'Jerry Smith'
* @param {Array} chars
* @return {Object} - Jerry object
*/
function getJerryInfo(chars) {
  let result = chars.find(obj => {
      return obj.name === 'Jerry Smith'
    });
    return result;
}


/**
* check if all characters are human. return true if all, false if not
* @param {Array} chars
* @return {boolean}
*/
function isAllHuman(chars) {
  let result = chars.find(o => o.species !== 'Human');
  if (result = 0) {
      return true;
  }
  else {
  return false;
}
}

/**
* check if there are any Fish-Person characters. return true if any, false if not
* @param {Array} chars
* @return {boolean}
*/
function isAnyFishPerson(chars) {
  if (chars => chars.type === 'Fish-Person') {
  return true;
}
else {
  return false;
}
}

/**
* 1. Write a method to find an index of minimal item from an array;
* @param {Array} arr
* @return {number} - minimum element index
*/
function minItem(arr) {
  return arr.indexOf(Math.min(...arr));
  //PLACE YOUR CODE HERE
}

module.exports = {
  getCharactersNames,
  printCharacterNames,
  getNonHumanCharacters,
  getJerryInfo,
  isAllHuman,
  isAnyFishPerson,
  minItem
};

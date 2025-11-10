const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {    
    let row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let res = [];
      if (i - 1 >= 0 && j - 1 >=0) {
        res.push(matrix[i - 1][j - 1]);
      } else {
        res.push(null)
      }
      if (i - 1 >= 0) {
        res.push(matrix[i - 1][j]);
      } else {
        res.push(null)
      }
      if (i - 1 >= 0 && j + 1 < matrix[i].length) {
        res.push(matrix[i - 1][j + 1]);
      } else {
        res.push(null);
      }
      if (j - 1 >= 0) {
        res.push(matrix[i][j - 1]);
      } else {
        res.push(null);
      }
      if (j + 1 < matrix[i].length) {
        res.push(matrix[i][j + 1]);
      } else {
        res.push(null);
      }
      if (i + 1 < matrix.length && j - 1 >= 0) {
        res.push(matrix[i + 1][j - 1]);
      } else {
        res.push(null);
      }
      if (i + 1 < matrix.length) { 
        res.push(matrix[i + 1][j]);
      } else {
        res.push(null);
      }
      if (i  + 1 < matrix.length && j + 1 < matrix[i].length) {
        res.push(matrix[i + 1][j + 1]);
      } else {
        res.push(null);
      }      
      res = res.filter(elem => elem === true).length;
      row.push(res);
    } 
    arr.push(row);
  } return arr;
}

module.exports = {
  minesweeper
};

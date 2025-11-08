const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let arr = str.split('');
  let count = 1;
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      count++
    }
    else {
      res += count + arr[i];
      count = 1;
    }
  } return res.split('').filter(elem => +elem !== 1).join('');
}

module.exports = {
  encodeLine
};

const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [...arr];
  for (let i = 0; i < res.length; i++) {
    if (res[i] === '--discard-next') {
      res.splice(res.indexOf('--discard-next') +1, 1); 
    }
    if (res[i] === '--discard-prev') {
      if (i === 0) {
        res;
      } else {
        res.splice(res.indexOf('--discard-prev') - 1, 1);  
      }
      
    }
    if (res[i] === '--double-next') {
      res.splice(res.indexOf('--double-next'), 0, res[res.indexOf('--double-next') + 1]);
      i++;
    }
    if (res[i] === '--double-prev') {
      res.splice(res.indexOf('--double-prev'), 0, res[res.indexOf('--double-prev') - 1]);
      i++;
    }
  } return res.filter(elem => typeof elem === 'number');
}

module.exports = {
  transform
};

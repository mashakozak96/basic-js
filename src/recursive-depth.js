const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const openBrackets = ['['];
    let str = JSON.stringify(arr);   
    let stack = [];
    let res = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) {    
      let curSymbol = str[i];
      if (openBrackets.includes(curSymbol)) {
        count++;     
        stack.push(curSymbol)
      } else if (curSymbol === ']') {
        res.push(count)
        count--;
        if (stack[stack.length - 1] === '[') {
          stack.pop()
        }
      }   
    }  return Math.max(...res);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};

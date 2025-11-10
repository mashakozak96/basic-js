const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  if (typeof str === 'object' && str !== null && typeof str[Symbol.toPrimitive] === 'function') {
    str = 'STRING_OR_DEFAULT';
  }
  str = String(str);
  if (typeof options.addition === 'object' && options.addition !== null && typeof options.addition[Symbol.toPrimitive] === 'function') {
    options.addition = 'STRING_OR_DEFAULT';
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;    
  }
  if (options.separator === undefined) {
    options.separator = '+';    
  }  
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;    
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';    
  }
  let addStr = '';
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
    for (let i = 0; i < options.additionRepeatTimes; i++) {    
      addStr += options.addition;
      if (i < options.additionRepeatTimes - 1) {
        addStr += options.additionSeparator;
      }
    }
  }   
  let res = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    res += str + addStr;
    if (i < options.repeatTimes - 1) {
      res += options.separator;
    }
  } 
  return res;
}

module.exports = {
  repeater
};

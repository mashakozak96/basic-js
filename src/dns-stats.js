const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let allElem = [];
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.').reverse(); 
    let resArr = domain.reduce((acc, cur, index) => {
      let item = acc[index - 1] ? acc[index - 1] + '.' + cur : '.' + cur;
      acc.push(item);
      return acc;
    }, []); 
    allElem.push(resArr);    
    let elem = '';      
    for (let j = 0; j < domain.length; j++) {      
      elem+='.' + domain[j];
      arr.push(elem);
    }    
  } 
  let keyArr = Array.from(new Set(arr));
  const obj = keyArr.reduce((acc, curKey) => {
    acc[curKey] = allElem.flat().filter(elem => elem === curKey).length; 
    return acc;
  }, {});
  return obj;
}

module.exports = {
  getDNSStats
};

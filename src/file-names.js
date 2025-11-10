const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];
  let arr = []; 
  for (let i = 0; i < names.length; i++) {   
    if (arr.includes(names[i]) && res.includes(names[i])) {
      let count = arr.filter(elem => elem === names[i]).length;      
      let elemNew = names[i] + '(' + count + ')';      
      res.push(elemNew);
      arr.push(names[i]);
      console.log(arr)
    }
    else if (!arr.includes(names[i]) && res.includes(names[i])) {
      let count = arr.filter(elem => elem === names[i]).length + 1;
      let elemNew = names[i] + '(' + count + ')';      
      res.push(elemNew);
      arr.push(names[i]);
    } else {
      arr.push(names[i]);
      res.push(names[i]);
    }
  }  
  return res;
}

module.exports = {
  renameFiles
};

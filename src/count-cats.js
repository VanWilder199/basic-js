const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  const union = [].concat(...matrix);
  if (!union.length) return 0;
  let cats = 0;
  for (let i = 0; i < union.length ; i++) {
    if (union[i] === '^^') {
       cats++
    } 
  }
  return cats; 
};

const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  const Union = [].concat(...matrix);
  if (!Union.length) return 0;
  let cats = 0;
  for (let i = 0; i < Union.length ; i++) {
    if (Union[i] === '^^') {
       cats++
    } 
  }
  return cats; 
};

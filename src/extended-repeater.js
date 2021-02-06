const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let repeatTimes = options['repeatTimes'] ? options['repeatTimes'] : 1;
  let separator = options.hasOwnProperty('separator') ? options['separator'] : '+';
  let addSeparator = options.hasOwnProperty('additionSeparator') ? options['additionSeparator'] : '|';
  let addition = options.hasOwnProperty('addition') ? options['addition'] : '';
  let addRepeatTimes = (options.hasOwnProperty('additionRepeatTimes') && options['additionRepeatTimes']) ? options['additionRepeatTimes'] : 1;
  let solution = '';
  for (let i = 0; i < repeatTimes; i++) {
    if (i !== 0) {
        solution += separator
    };
    solution += str;
    for (let j = 0; j < addRepeatTimes; j++) {
      if (j !== 0) {
        solution += addSeparator
      };
      solution += addition;
    }
  }
  return solution;
};
  






















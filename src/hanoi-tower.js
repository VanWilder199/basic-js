const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  
  const exponent = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(exponent / turnsSpeed * 3600) ;

  return {turns: exponent, seconds: seconds}; 
   

  
 
};

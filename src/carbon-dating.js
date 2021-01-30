const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const rate_constant =  0.693

module.exports = function dateSample( sampleActivity ) {
  let check = typeof sampleActivity;
  if (check === 'string' && check === [0-9]) {
    let elapsedTime = MODERN_ACTIVITY / sampleActivity;
   const r = rate_constant / HALF_LIFE_PERIOD;
   let t1 = (Math.log(elapsedTime)) / r ;
   return t1;
  }else {
    return false;
  } 
  

 
};

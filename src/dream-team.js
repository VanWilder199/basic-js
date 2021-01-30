const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) return false;
      
  let dreamTeam =  members.filter(elem => typeof elem === 'string')
  .map(value => {
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== " ") return value[i].toUpperCase();
      }
      return false;
  })
  return dreamTeam.sort().join('')
};
   
  
  
  


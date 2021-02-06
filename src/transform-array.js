const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(!Array.isArray(arr)) throw new Error();

  let pushN = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (i == 0) break;
        if (arr[i - 2] != '--discard-next'){
          pushN.pop();
        }
        break;
      case '--double-next':
        if (i == arr.length - 1) break;
        pushN.push(arr[i + 1]);
        break;
      case '--double-prev':
         if (i == 0) break;
        if (arr[i - 2] != '--discard-next'){
        pushN.push(arr[i-1]);
      }
        break;
      default:
        pushN.push(arr[i]);

    }
}
return pushN
  
};

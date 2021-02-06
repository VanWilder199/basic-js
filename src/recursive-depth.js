const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      count = Math.max(count, this.calculateDepth(arr[i]) + 1);

    }
    return count;
  }
}
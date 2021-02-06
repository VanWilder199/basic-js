const CustomError = require("../extensions/custom-error");

const chainMaker = {
    maker: [],

  getLength() {
    return this.maker.length;
  },
  addLink(value) {
    this.maker.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || isNaN(position)) {
      this.maker = [];
      throw new Error;
    } else {
      this.maker.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.maker.reverse();
    return this;
  },
  finishChain() {
    let chain = this.maker.join('~~');
    this.maker = [];
    return chain;
  }
};

module.exports = chainMaker;

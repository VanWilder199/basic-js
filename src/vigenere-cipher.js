const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (alfa = true) {
    this.alfa = alfa;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('');
    key = key.toUpperCase();
    message = message.toUpperCase();
    let j = 0;
    let crypt = '';
  
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        
        crypt += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(j % key.length) - 130) % 26 + 65);
        j++;
      }
      else crypt += message[i];
    }
    if (this.alfa) return crypt;   
    else return crypt.split('').reverse().join('');
  }  

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('');
    key = key.toUpperCase();
    message = message.toUpperCase();
    let j = 0;
    let dCrypt = '';
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        dCrypt += String.fromCharCode((message.charCodeAt(i) + 26 - key.charCodeAt(j % key.length)) % 26 + 65);
        j++;
      }
      else dCrypt += message[i];
    }
    if (this.alfa) return dCrypt;   
    else return dCrypt.split('').reverse().join('');
  }
  }

module.exports = VigenereCipheringMachine;

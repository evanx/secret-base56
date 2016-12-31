const assert = require('assert');
const crypto = require('crypto');
const Letters24 = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const Digits8 = '23456789';
const Symbols = [Digits8, Letters24, Letters24.toLowerCase()].join('');
assert.equal(Symbols.length, 56);
const length = parseInt(process.env.length || '16');
const string = crypto.randomBytes(length).map(value => Symbols.charCodeAt(Math.floor(value*Symbols.length/256))).toString();
console.log(string);

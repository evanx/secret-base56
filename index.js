const assert = require('assert');
const crypto = require('crypto');
const letters24 = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // exclude I and O since too similar to 0 and 1
const digits8 = '23456789'; // omit 0 and 1 to avoid potential confusion with O and I (and perhaps 'l')
const charset = [digits8, letters24, letters24.toLowerCase()].join('');
assert.equal(charset.length, 56);
//console.log(charset);
const length = parseInt(process.env.length || '16');
const string = crypto.randomBytes(length)
.map(value => charset.charCodeAt(Math.floor(value*charset.length/256)))
.toString();
console.log(string);

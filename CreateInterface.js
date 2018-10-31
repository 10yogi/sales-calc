const readline = require('readline');
const fs1 = require('fs');
exports.rl = readline.createInterface({
  input: fs1.createReadStream('input.txt'),
  crlfDelay: Infinity
});

const fs = require('fs');
const file = fs.readFileSync(process.argv[2]);
const str = file.toString();
const num = str.split("\n");
console.log(num.length - 1);

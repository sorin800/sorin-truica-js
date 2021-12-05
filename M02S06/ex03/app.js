const fs = require('fs');

let data = fs.readFileSync('./file.txt', 'utf8');
data = data.concat('This is our node script!');
console.log(data);

const { readFileSync } = require('fs');
// import { readFileSync } from 'fs';

const part1 = readFileSync('./another.txt', 'utf8').trim();
const part2 = readFileSync('./my-file.txt', 'utf8').trim();
const part3 = readFileSync('./dir/this-other-file.txt', 'utf8').trim();

const message = `${part1} ${part2} ${part3}!`;

console.log(message);

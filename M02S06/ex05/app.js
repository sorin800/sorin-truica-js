// 16+
// import {readFileSync} from 'fs';

// fs = {readFileSync: () => {}, writeFileSync: () => {}}
const { writeFileSync, readFileSync } = require('fs');

writeFileSync('output1.txt', 'Invat node.js', 'utf8');

let data = readFileSync('./output1.txt', 'utf8');
writeFileSync('output2.txt', data + ', azi, ' + new Date(), 'utf8');

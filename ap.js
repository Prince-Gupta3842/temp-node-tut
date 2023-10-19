// local dependency - use it only in this project
// npm i <packageName>

// global dependency - use it in any project
// npm i -g <packageName>

// package.json - manifest file (stores important info about projects/packages)
// manual approach - create package.json in the 'root', create properties etc.
// npm init - step by step, press enter to skip
// npm init -y - default install

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

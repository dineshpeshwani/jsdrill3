const flatten = require('./flatten');

const myArray = [1, [2], [3, [[4]]]];

console.log(flatten(myArray));
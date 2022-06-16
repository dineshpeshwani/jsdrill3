const theReduce = require('./reduce');
const myArray = [1,2,3,4,5,5];
let beginValue = 2;
myCallBack = (reducedArray, value) => reducedArray += value;
console.log(theReduce(myArray, myCallBack, beginValue));
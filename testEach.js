const theForEach = require('./each');

const myArray = [1, 2, 3, 4, 5, 5];

const myCallBack = (element, index) =>
{
    return element*2;
}

console.log(theForEach(myArray, myCallBack));
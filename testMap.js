const theMap = require('./map');

const items = [1, 2, 3, 4, 5, 5];

function theCallBackFunction(element)
{
    return element*2
}

console.log(theMap(items,theCallBackFunction));
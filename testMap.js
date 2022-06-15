const theMap = require('./map');
const items = [1, 2, 3, 4, 5, 5];
function theCallBackFunction(i)
{return i*2;}  
console.log(theMap(items,theCallBackFunction));
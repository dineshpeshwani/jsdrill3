const theFind = require('./find');

const items = [1, 2, 3, 4, 5, 5];

const myCallBack = (element, index) => 
{
    let arr = [];
     if(element != 2){
        arr[index] = element;
     }
     return arr[0];
}

console.log(theFind(items, myCallBack));


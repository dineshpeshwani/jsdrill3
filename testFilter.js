const theFilter = require('./filter');

const myArray = [1,2,3,4,5,7,1];

const myCallBack = (element, index) => 
{
  if(element%2==0)
  {
      return `${element} ${index}`;
  }
}

console.log(theFilter(myArray, myCallBack));
function theFind(theArray, theCallBackFunction){
    for (let i = 0; i < theArray.length; i++){
        theCallBackFunction(theArray[i], i);
    }
}
/*let arr = [];
const myCallBack = (element, index) => 
{
     if(element != 2){
        arr[index] = element;
     }
     return arr[0];
}*/

module.exports = theFind;
function theFind(theArray)
{
    let newArray = [] ;
    for (let i = 0; i < theArray.length; i++){
        if(myCallBack(theArray[i])){
            return newArray = theArray[i];
        }
    }
    return newArray;
}   

const myCallBack = (element) => (element===1) ? true : false;

module.exports = theFind;
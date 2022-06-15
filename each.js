function theForEach(theArray, myCallBack){
    for (let i = 0; i < theArray.length; i++){
        myCallBack(theArray[i], i);
    }
    return theArray
}

module.exports = theForEach; 
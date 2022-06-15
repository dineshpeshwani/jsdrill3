function theFilter(theArray, theCallBackFunction)
{
    let newArray = [] ;
    for (let i = 0; i < theArray.length; i++){
        newArray.push(theCallBackFunction(theArray[i], i));
    }
    return newArray;
}

module.exports = theFilter;

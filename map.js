
function theMap(theArray, theCallBackFunction){
    let newArray = [] ;
    for (let i = 0; i < theArray.length; i++){
        newArray.push(theCallBackFunction(theArray[i]));
    }
    return newArray;
}

module.exports = theMap;



function theFilter(theArray)
{
    let newArray = [] ;
    for (let i = 0; i < theArray.length; i++){
        if(myCallBack(theArray[i])){
            newArray.push(theArray[i]);
        }
    }
    return newArray;
}   

const myCallBack = (element) => (element%2===0) ? true : false;

module.exports = theFilter;

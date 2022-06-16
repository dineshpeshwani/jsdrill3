    function theReduce(myArray, myCallBack, beginValue){
        let secondElement = beginValue || 0;
        const firstElemnet = myArray[secondElement];
        let reduceArray = firstElemnet;
        for(let i=0; i<myArray.length; i++){
            reduceArray = myCallBack(reduceArray, myArray[i])
        }
        return reduceArray;
    }

    module.exports = theReduce;
function flatten(array){
    let arr = [];  
    function helper(array){
        for(let i=0; i<array.length; i++){
            let element = array[i];
            if(Array.isArray(element)){
                helper(element); 
            }else{
                arr.push(element);
            }
        }
    }
    helper(array);
    return arr;
}

module.exports = flatten;


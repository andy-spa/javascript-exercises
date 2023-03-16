const removeFromArray = function(array, ...argsArray) {
    newArray = [];
    array.forEach(element => {
        if(!deleteElement(element, argsArray)){
            newArray.push(element);
        }
    });
    return newArray;
 
}

 deleteElement= function(element, array){
    return array.includes(element);
 }
// Do not edit below this line
module.exports = removeFromArray;
// alternative Solution
// var removeFromArray = function(array, ...args) {
//    return array.filter(val => !args.includes(val))
//}
const reverseString = function(str) {
    
    // create an array of str string
    let strArray = str.split('');
    
    // reverse str array
    strArray.reverse();
    
    // update str by converting strArray back to a string
    str = strArray.join('');
    
    
    return str;
};
console.log(reverseString("hola"));
// Do not edit below this line
module.exports = reverseString;

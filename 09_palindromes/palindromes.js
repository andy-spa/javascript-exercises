const palindromes = function (str) {
    let re = /[\W_]/g;
    str.toLowerCase().replace(re, '');
    
    let reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;

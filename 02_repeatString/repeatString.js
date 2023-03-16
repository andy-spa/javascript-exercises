const repeatString = function(str, num) {
    strCopy = str;
    if(num === 0) {
        return '';
    }
    else if(num < 0) {
        return 'ERROR';
    }
    else if(str === '') {
        return '';
    }
    else {
        for(let i = 1; i < num; i++){
            str += strCopy;
        }
        return str;
    }
};
// Do not edit below this line
module.exports = repeatString;

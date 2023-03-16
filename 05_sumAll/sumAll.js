const sumAll = function(init, limit) {
    if(init < 0 || limit < 0){
        return "ERROR";
    }
    else if(typeof init != 'number' || typeof limit != 'number'){
        return "ERROR";
    }
    else if(init > limit){
        let cont = limit;
        limit = init;
        init = cont;
    }
    let result = 0;
    for(let i = init; i <= limit; i++){
        result+= i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

const sumAll = function(start, finish) {
    let sumAll = 0;
if((!Number.isInteger(start) || !Number.isInteger(finish)) || ((start || finish) < 0)){
        return "ERROR";
    }
else if (start < finish){
    for (i=start; i<= finish; i++){
        sumAll += i;
    }
} else if (start > finish){
    for (i=finish; i<= start; i++){
        sumAll += i;
    }
}
return sumAll;
}

module.exports = sumAll

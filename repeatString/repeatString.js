const repeatString = function(string, numberOfTimes) {

    let finalString = '';
    if (numberOfTimes < 0){
        return "ERROR"
    }

    for (i = 0; i < numberOfTimes; i++){
        finalString += string;
    }
return finalString;
}

module.exports = repeatString

const reverseString = function(stringToReverse) {
    let reversedString=''
    for (i = 0; i <= stringToReverse.length; i++){
        reversedString += stringToReverse.charAt((stringToReverse.length)-i)
    }
    return reversedString;
}

module.exports = reverseString

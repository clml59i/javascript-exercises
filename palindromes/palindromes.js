const palindromes = function(str) {
// remove the punctuation and spaces
str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase();

// Turn the resulting string into an array containing one char in each index
const charArray = str.split("");


for(i = 0; i<= (charArray.length)/2 ; i++){
    if(charArray[i] !== charArray[charArray.length-1-i]){
        return false;
    }
}
return true;
}

module.exports = palindromes

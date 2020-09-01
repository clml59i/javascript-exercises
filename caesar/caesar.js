const caesar = function(stringToBeEncoded, shiftFactor) {
    // create a regex that we will use to check if a char is a letter and must be modified
    const regexLowerCase = new RegExp('[a-z]');
    const regexUpperCase = new RegExp('[A-Z]');


    // turn string into an array
    const stringArray = stringToBeEncoded.split("");
    for (i=0; i< stringArray.length; i++){
        let charCode = stringArray[i].charCodeAt(0);
        // The modulo allows us to always have a value below 26;
        shiftFactor = shiftFactor % 26;
        let newCharCode = charCode + shiftFactor;
        // if it's a lowerCase letter
        if (stringArray[i].match(regexLowerCase)) {
            // If the new character doesn't go outside of the alphabet
            if (newCharCode >= 97 && newCharCode <= 122){
                stringArray[i] = String.fromCharCode(newCharCode);
            } else {
                if(newCharCode < 97){
                    stringArray[i] = String.fromCharCode(123 - (97 - newCharCode));
                } else if (newCharCode > 122){
                    stringArray[i] = String.fromCharCode(96 + (newCharCode - 122));
                }
            }
        } else if(stringArray[i].match(regexUpperCase)){
            // If the new character doesn't go outside of the alphabet
            if (newCharCode >= 65 && newCharCode <= 90){
                stringArray[i] = String.fromCharCode(newCharCode);
            } else {
                if(newCharCode < 65){
                    stringArray[i] = String.fromCharCode(91 - (65 - newCharCode));
                } else if (newCharCode > 90){
                    stringArray[i] = String.fromCharCode(64 + (newCharCode - 90));
                }
            }
        }
    }
return stringArray.join("");


/* SOLUTION FROM TOP github
const caesar = function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};
*/



}

module.exports = caesar

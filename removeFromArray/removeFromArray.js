const removeFromArray = function(array) {

let args = Array.from(arguments);
args.splice(0,1);
for (i = 0; i<args.length; i++) {
    for (j=0;j<array.length;j++){
        if (args[i] === array[j]){
            array.splice(j,1);
        }
    }
}
return array;
}
module.exports = removeFromArray;

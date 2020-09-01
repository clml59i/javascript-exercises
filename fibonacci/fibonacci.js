const fibonacci = function(member) {

if (member < 0){
    return "OOPS";
}

// Create an empty array
const fibonacciList = [];

for (i = 0; fibonacciList.length<member; i++){
    // The first 2 values are set to 1 -- try to find a cleaner way to do this
    if (i === 0 || i === 1){
        fibonacciList.push(1);
    } else {
        fibonacciList.push(fibonacciList[i-1] + fibonacciList[i-2]);
    }
}

return fibonacciList[fibonacciList.length-1];
}

module.exports = fibonacci

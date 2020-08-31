function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce(((accumulator, currentValue) => accumulator + currentValue), 0);
}

function multiply (array) {
	return array.reduce(((accumulator, currentValue) => accumulator * currentValue), 1);
}

function power(a,b) {
	return Math.pow(a, b);
}

function factorial(number) {
	if(number === 0){
		return 1;
	}else {
		let result = 1;
		for(i = number; i>0; i--){
			result *= i; 
		}
	return result;
	}	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (...args) {
	const sum = 0;
	const arrayOfNumbers = Array.from(args[0]);
	arrayOfNumbers.forEach(element => {
		if(isNaN(element)){
		sum += element;
		}
	});
	return sum;
}

function multiply () {
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
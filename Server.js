function sum (a, b) {
	return sum = a + b
}
console.log(sum(4, 5))

function product (a, b) {
	return product = a * b
}
console.log(product(8, 10))

function min(a, b) {
	Math.min (a, b)
}
console.log(min(4, -4))

function subtract(a,b) {
	return subtract = a-b
}
console.log(subtract(14, 9))


for ( let number = 1; number <= 100; ++number) {
	 	if (!((number % 3 == 0) || (number % 5 == 0))) {
	 		console.log(number)
	 	}
	 	

	 	if ((number % 3 == 0) && (number % 5 == 0)) {
	 			console.log("fizzbuzz")
	 	}
	 	else if (number % 3 == 0) {
	 		console.log("fizz")
	 	}
	 	else if (number % 5 == 0) {
	 			console.log("buzz")
	 	}
	 	
}


var addr = ""
	for (i = 0; i < 4; i++) {

			addr += ["address"] + i + '\n'
	}
	
	console.log(addr)

	function name (str) {
		console.log (`hello ${str}`)
	}
	name("Samuel")


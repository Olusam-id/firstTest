	for (let line = "#"; line < 8; line += "#") {
		line += "\n"
		console.log(line);
	}

	let size = 8;

	let board = ""

	for (let y = 0; y < size; ++ y) {
		for (let x = 0; x  < size; ++ x) {
			if ((x + y) % 2 == 0) {
				board += " ";
			}
			else {
				board += "#";
			}
		}
		board += "\n"
	}
	console.log(board)


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
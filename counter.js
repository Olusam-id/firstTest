<!DOCTYPE html>
<html>
<head>
	<title>Closure</title>
</head>
<body>

<script type="text/javascript">


	function multiplier (factor) {
		return number => number * factor;
	}

	let pen = multiplier(2)
	console.log(pen(5))

	function min(a, b) {
		console.log (Math.min(a, b))
	}
	min(34, 15)


	function evenNumber (N) {
		if (N == 0) 
			return true;
		
		else if (N == 1)
			return false;

		else if (N < 0)
			return evenNumber (-N);
		else
			return evenNumber (N - 2)
	}




	console.log(evenNumber(50))
	console.log(evenNumber(75))
	console.log(evenNumber(-1))



/*	function countBs (str) {
		let bcount = 0
		
		for (let i = 0; i < str.length; ++i) {
			if (str.charAt(i) == 'B') {
				bcount += 1;
			}
			
		}
		return bcount
	}*/
	console.log(countBs("BBCbbd"))


	function countChar (str, letter) {
		let charCount = 0

		for (let i = 0; i < str.length; ++i) {
			if (str.charAt(i) == letter) {
				charCount += 1;
			}
		}
		return charCount;
	}

	console.log(countChar("book", "o"))


	function countBs (str) {
	
	return countChar(str, 'B');
}

function wordCount (str) {
	let count =  0

	for  (let i = 0; i < str.length; ++i) {
					
		count += 1

		if (str.split(" ").length) {}

	}

	
	return count;
}

console.log(wordCount("written test result"))


for ( var start = 1; start <=5; ++start) {
		console.log(start)

		
		if (start % 2 == 0){
			square = start * start
			console.log(square)

		}
	

	}


</script>
</body>
</html>
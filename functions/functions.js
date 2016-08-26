// Invoke each function you write with an example and console.log the result

// multiply
var multiply = function(a,b){
	return a*b;
}
console.log(multiply(2,3));

// whatForLunch
var whatForLunch = function(name, food){
	return (name + " had " + food + " for lunch today");
}

console.log(whatForLunch("Miranda", "apricots"));

// isLargerThan100
var isLargerThan100 = function(number){
	if (number>100){
		return true;
	}
	else{
		return false;
	}
}

console.log(isLargerThan100(99));

// anyEvens
var anyEvens = function(anArray){
	for (i=0; i<anArray.length; i++){
		if (anArray[i]%2 === 0){
			return true;
		}
	}
	return false;
}

console.log(anyEvens([1,2,4]));
console.log(anyEvens([1,3,5]));

// printDataType
var printDataType = function(collection){
	if (Array.isArray(collection)){
		for (i=0;i<collection.length; i++){
			if (Array.isArray(collection[i])){
				console.log("I am an array.");
			}
			else if (typeof collection[i]==='function'){
				console.log("I am a function.")
			}
		}
	}

	else if (typeof collection === 'object'){
		for (var item in collection){
			if (typeof item === 'string'){
				console.log("I am a string.");
			}
			else if (typeof collection === 'number'){
		console.log("I am a number.");
			}
			else if (typeof collection === 'boolean'){
		console.log("I am a boolean.")
			}
		}
	}

	else{
		console.log("I do not know what you are! What are you?");
	}
}	
console.log(printDataType(["Hello","goodbye"]));
console.log(printDataType([[1,2,3]]));
console.log(printDataType(23));


// isDivisibleBy

var isDivisibleBy = function(a,b){
	if(a%b===0){
		return true;
	}
	else{
		return false;
	}
}

console.log(isDivisibleBy(3,6));
console.log(isDivisibleBy(6,3));

// fizzBuzz
var fizzBuzz = function(anArray){
	for (i=0;i<anArray.length; i++){
		if (isDivisibleBy(anArray[i],5) && isDivisibleBy(anArray[i],3)){
			console.log("FizzBuzz");
		}
		else if (isDivisibleBy(anArray[i],3)){
			console.log("Fizz");
		}
		else if (isDivisibleBy(anArray[i],5)){
			console.log("Buzz");
		}
		else{
			console.log(anArray[i]);
		}
	}
}
console.log(fizzBuzz([1,15,9,25]));






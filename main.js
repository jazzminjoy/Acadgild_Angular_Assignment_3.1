/*
Acadgild Angular Assignment 3.1a, "ES6 Part 2", rest parameter
Student: Michele Cannito
● Create an array. Pass the array into 3 different functions as a rest parameter:
	● Find out length of array using getArrLength()
	● Multiply each array element and display new array using multiplyByTwo()
	● Sort rest arguments using sortRestArgs()
*/
// Create an array
let testArray = [11, 2, 3, 5, 8, 13, 21];

// Find out length of array using getArrayLength()
function getArrLength(...args){
    return getArrayLength(args);
}

// Multiply each array element and display new array using multiplyByTwo()
function multiplyByTwo(...numbers) {
    return numbers.map(number => number * 2);
  }

// Sort rest arguments using sortRestArgs()
function sortRestArgs(...args) {
    return(args.sort);
}

// Call each function:
getArrLength(testArray);
multiplyByTwo(testArry);
sortRestArgs(testArray);

// Extra credit: Call each function using templating and interpolation for descriptive output
console.log( `Array length of args is ${ getArrayLength(testArray) }` );
console.log( `Output array is ${ multiplyByTwo(testArry) }` );
console.log( `Sorted rest arguments:  ${ sortRestArgs(testArry) } ` );
console.log('spread operator lecture');

//...
// for arrays, ... removes []
// for objects, ... removes {}

const numberArray = [2, 56, 887, 4, 5];
const newNumber = 19;

const newNumberArray = [...numberArray, newNumber];

console.log(newNumberArray );


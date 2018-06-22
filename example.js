console.log('spread operator lecture');

//...
// for arrays, ... removes []
// for objects, ... removes {}

const numberArray = [2, 56, 887, 4, 5];
const newNumber = 19;

const newNumberArray = [...numberArray, newNumber];

console.log(newNumberArray );

const bowler = {
    name: 'Erin',
    score: 123
};

const updatedBowler = {
    ...bowler,
    score: 167
}

console.log(updatedBowler);


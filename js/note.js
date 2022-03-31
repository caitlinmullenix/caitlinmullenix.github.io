let myVariable;
myVariable = 'Caitlin';

let myVariable2 = 'Mullenix';

myVariable = 'Boulder';

/* This is a
multi-line comment */

// This is a comment

// Variables

let myVariable = 'bob'; // Strings

let myNumber = 3; // Numbers

let myBoolean = true; // Booleans
let myBoolean = false;

let myArray = [1, 'bob', true]; // Array

let myObject = document.querySelector('p'); // Obejcts,  but all the above are objects too

// Operators

6 + 9; // Addition
'Hello' + 'World' // String addition --> "HelloWorld"

// Subtraction --> -
// Multiplication --> *
// Division --> /

// Assignment --> =

// Equality
myNumber === 4; // <-- this would result in false

// not, does-not equal
!(myNumber === 3); // !(true) = false;
myVariable !== 3; // false

// Conditionals
let iceCream = 'chocolate';

if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Aww, but chocolate is my favorite ...');
}

// Event Listeners

document.querySelector('html').addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});

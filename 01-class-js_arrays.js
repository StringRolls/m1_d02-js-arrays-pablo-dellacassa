// Class code examples

// Array is a collection of different types of data types

// Arrays are mutable

const myNewArray = [] /* When you const an array you are naming the array 
but the content could be modified */

// We always declare an array as a cons, it's a good pratice

myNewArray[0] = 'hola'

myNewArray.push('como estas?') // push method works like an append 

console.log(myNewArray);

// myNewArray = ['this is a new array'] --> this will give us an error, cons 'protect' our original array to be lost

// delete myNewArray[1] --> this will work and will delect the array

let changeableLable = ["this array has an unprotected label"]

changeableLable = ["ooops, I lost the original array"] // We redeclare the label/name of the array so we lost the content of the array

console.log(changeableLable);

/* Although is technical possible to declare an array with let or var we will declare arrays with cons 
to avoid lost the content of the array */

/* An array is an ORDERED list of things, we can obtain the element by its index, 
an example could be 'Fanta' is index 3*/

const drinks = [
    "Agua",
    "Coca-cola",
    "Aquarius",
    "Fanta",
    "Cacaolat",
    "Jagger",
    "Red Bull",
    "Cervemocho",
  ];

// Access an element
console.log("First drink is ", drinks[0]);
console.log("Second drink is ", drinks[1]);

// Change order of elements
const FirstElement = drinks[0];
const fifthElement =  drinks[5];

drinks[5] = FirstElement;
drinks[0] = fifthElement;

console.log("First drink is ", drinks[0]);
console.log("Second drink is ", drinks[1]);

// Length
console.log(`We have ${drinks.length} drinks in total`)

// Length method returns the number of elements that are in an array

// Arrays can contain anything

const bagOfThings = [
    "I am a string",
    764124,
    null,
    undefined,
    true,
    ["I am a sub aray"],
    { type: "object inside aray" },
  ];

// Arrays have a lenght property
console.log("bagOfThins contains ", bagOfThings.length, "Elements");

// .push() and .pop()

// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

// Adding values (last) ---- declarative
console.log("return value from .push():", drinks.push('Nestea', 'Monster'))
console.log('...extended even more:', drinks)

// Removing values (last)
console.log("return value from .pop()", drinks.pop());
console.log("Now the drinks are: ", drinks);

/* The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
To access part of an array without modifying it, see slice(). */

// Modifying elements order or values
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // 0 implies that it will be added 

// Inserts May at index 4
months.splice(4, 0, "May");

// Insert the rest of the months of the year
months.push("July", "August", "September", "October", "November", "Dicember");
console.log("The months", months, 'are in total', months.length);

// Split text into array
const string = 'Lorem ipsum dolor sit amet'
const words = string.split(' ')
console.log('Here is each word in the string:', words)


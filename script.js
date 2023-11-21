
// // Functional Programming

// // It is programming paradigm designed to handle functions in better way in JS (mainly pure function)

// // Imperative and declarative functions :

// // Imperative functions : How to go about a problem (approach/structure/logic)

// // Problem : we will be given number and need to check if square of the number is even or not

// // Imperative way of writing code

// const num = 4

// const squared = num * num

// let isEven;

// if (squared % 2 == 0) {
//     isEven = true
// }
// else {
//     isEven = false
// }

// console.log('Imperative way of writing code : ',isEven)

// // Declarative functions : What to achieve from the problem (shorten the code)

// // Declarative way of writing code

// const checkForSquare = num => (num * num % 2 == 0 ? true : false)

// console.log('Declarative way of writing code : ',checkForSquare(5))


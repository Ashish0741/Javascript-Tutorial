
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

// ==================================================================================================

// Impure and Pure Function and its side effects :

// 1. Impure Functions :
// -> It takes same input but gives different output
// -> It uses external factors or resources

// let a = 10

// function addImpure(x) {
//     console.log(x+a)
//     a++
// }

// addImpure(2) // 12
// addImpure(2) // 13
// addImpure(2) // 14


// 2. Pure Functions :
// -> It takes same input and gives same output
// -> It doesn't use any external factors or resources

// function addPure(x,a) {
//     return x + a
// }

// console.log(addPure(2,4)) // 6
// console.log(addPure(2,4)) // 6
// console.log(addPure(2,4)) // 6

// ************************************************************************************************

// // Callback Function :
// // It is function which takes another function as an argument which can be invoked later on whenever required.

// // writing callback function

// function printFirstName(firstname, callback) {
//     console.log(firstname)
//     callback('Khedekar')
// }

// function printLastName(lastname) {
//     console.log(lastname)
// }

// printFirstName('Ashish',printLastName) // callback function


// // Application of callback function

// const isEven = num => {
//     return num % 2 == 0
// }

// let checkEvenNumber = (evenFunc, number) => {
//     const result = (evenFunc(number) ? 'Even' : 'Odd')
//     console.log(`The given number ${number} is ${result}.`)
// }

// checkEvenNumber(isEven, 16)

// ************************************************************************************************

// Higher Order Functions :
// It is function which takes a function as argument or return a function as output

// let do one task we need to make square of all array numbers

// let arr = [1,2,3,4,6]

// let squaredArr = []

// for (let i = 0; i < arr.length; i++){
//     squaredArr.push(arr[i] * arr[i])
// }

// console.log(squaredArr)

// In above task we are writing code imperatively, so to overcome this issue we use one higher order function
// i.e map

// map function :
// map will loop through every element of an array and will perform a specific task that you have provided
// it takes a function as argument
// map will always return a new array with result.

// let arr = [1,2,4,5,6]

// let squaredArr = arr.map(function(elem){
//     return elem * elem
// })

// console.log('Using map function : ',squaredArr)


// const transaction = [1000,3000,4000,2000,-898,3800,-4500]

// const inrToDollar = 80

// let transactionInDollars = transaction.map((tran)=>{
//     return (tran / inrToDollar).toFixed(0)
// })

// console.log('Transaction after converting inr to dollar : ',transactionInDollars)


// // ForEach function :
// // it will loop through every element of an array and will perform a specific task that you have provided
// // it takes a function as argument
// // it will work inside forEach scope doesn't return anything


// const transaction1 = [1000,3000,4000,2000,-898,3800,-4500]

// const dollarToInr = 80

// let transactionInInr = transaction.forEach((amount)=>{
//     console.log('Transaction after converting dollar to inr : ',amount * dollarToInr)
// })

// ************************************************************************************************




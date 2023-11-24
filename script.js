
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

// find and findIndex methods :

// find will returns the first element of an array that satisfies the condition

// const transaction = [1000,3000,4000,2000,-898,3800,-4500]

// let firstWithdrawl = transaction.find(function(amount){
//     return amount < 0
// })

// console.log('First Withdrawl : ',firstWithdrawl)


// // findIndex will returns the first element index from an array that satisfies the condition 

// let firstWithdrawlIndex = transaction.findIndex(function(amount){
//     return amount < 0
// })

// console.log('Index of First Withdrawl : ',firstWithdrawlIndex)

// ===============================================================================================

// some and every :

// some will return true or false based on condition 
// it will return true even if one satisfies the condition


// const transaction = [-1000,-3000,-4000,-2000,898,-3800,-4500]

// let resultSome = transaction.some(function(amount){
//     return amount > 0
// })

// console.log('The result of some : ',resultSome)


// // every will return true or false based on condition 
// // it will return true if all satisfies the condition

// let resultEvery = transaction.every(function(amount){
//     return amount < 0
// })

// console.log('The result of every : ',resultEvery)

// ************************************************************************************************

// Filter method :

// filter method will return new array it will return all those elements that satisfies the specific condition

// let arr = [1,3,5,6,8,88,35,454,6457]

// let evenArr = arr.filter(function(num){
//     return num % 2 == 0
// })

// console.log('Even numbers : ',evenArr)


// // find all transactions which are positive

// const transaction = [1000,3000,4000,-2000,-898,3800,-4500]

// let depositAmount = transaction.filter(function(amount){
//     return amount > 0
// })

// console.log('Credited Amount : ',depositAmount)

// ==============================================================================

// Reduce method :
// It will return one result value after performing some operations inside function
// function which is passed as parameter takes two value (accumulator and value)

// problem : you need to sum every even element of array

// imperative way :

// let arr = [1,2,3,5,10]

// let sumOfEven = 0

// for (let i = 0; i < arr.length; i++) {
//     sumOfEven += (arr[i] % 2 == 0 ? arr[i] : 0)
// }

// console.log('Imperative way of finding the even number sum of array : ',sumOfEven)


// declarative way using reduce method:

// let arr = [1,2,3,5,10]

// let sumOfEven = arr.reduce((accumulator, value)=>{
//     return (value % 2 == 0 ? accumulator + value : accumulator + 0)
// }, 0)

// console.log('Declarative way of finding the even number sum of array : ',sumOfEven)

// ************************************************************************************************

// Chaining :
// chaining will help to process multiple higher order functions in same line one after another.

// problem 1 : you need to filter out all males and return ages of all males

// let persons = [
//     {name : 'A',age : 23,gender : 'M'},
//     {name : 'B',age : 24,gender : 'F'},
//     {name : 'C',age : 27,gender : 'F'},
//     {name : 'D',age : 29,gender : 'M'},
//     {name : 'E',age : 34,gender : 'M'},
//     {name : 'F',age : 36,gender : 'F'},
//     {name : 'G',age : 21,gender : 'M'},
//     {name : 'H',age : 19,gender : 'F'},
// ]

// will solve without using chaining

// let males = persons.filter(function(male){
//     return male.gender == 'M'
// })

// let malesAges = males.map((male)=>{
//     return male.age
// })

// console.log('Ages of all males in array without using chaining : ',malesAges)


// using chaining

// let maleAges = persons.filter(function(males){
//     return males.gender == 'M'
// }).map((male)=>{
//     return male.age
// })

// console.log('Ages of all males in array using chaining : ',maleAges)

// Problem 2 : 
// from transaction array filter out positive amount and calculate the total amount 

// let transaction = [1000,3000,4000,2000,-898,3800,-4500]

// let totalAmount = transaction.filter((amount)=>{
//     return amount > 0
// }).reduce((acc,value)=>{
//     return acc +  value
// },0)

// console.log('Total amount of all positive element : ',totalAmount)


// ************************************************************************************************

// Object Oriented Programming :

// It is computer programming model that organizes software design around data or objects rather than function or logic.
// An object can be defined as data field that has unique attributes and behaviour.

// 4 pillars of oops :

// 1. Encapsulation
// 2. Abstraction
// 3. Polymorphism
// 4. Inheritance

// IMP : javascript is not actually an object oriented language but we can write object oriented code by using 
// something called as prototype object

// ================================================================================================================

// this keyword :
// this keyword refers to an object

// ========================================================================================

// this keyword in node.js runtime env under non-strict mode :

// -----------------------------------------------------
// 1. on console :

// console.log(this) // returns empty object

// -----------------------------------------------------

// 2. inside function :

// function displayThis() {
//     console.log(this) // returns global object
// }

// -----------------------------------------------------

// 3. inside object --> function :

// let myObj = {
//     name : 'Ashish',
//     age : 23,
//     myFun : function(){
//         console.log(this) // returns object itself
//     }
// }

// myObj.myFun()

// -----------------------------------------------------

// 4. inside object --> function --> function :


// let myObj = {
//     name : 'Ashish',
//     age : 23,
//     myFun : function(){
//         function myFun1() {
//             console.log(this) // returns global object
//         }
//         myFun1()
//     }
// }

// myObj.myFun()

// ===========================================================================================

// this keyword in node.js runtime env under strict mode :
// 'use strict'  // need to mention this string on top of code for using strict mode

// -----------------------------------------------------
// 1. on console :

// console.log(this) // returns empty object

// -----------------------------------------------------

// 2. inside function :

// function displayThis() {
//     console.log(this) // returns undefined
// }

// -----------------------------------------------------

// 3. inside object --> function :

// let myObj = {
//     name : 'Ashish',
//     age : 23,
//     myFun : function(){
//         console.log(this) // returns object itself
//     }
// }

// myObj.myFun()

// -----------------------------------------------------

// 4. inside object --> function --> function :


// let myObj = {
//     name : 'Ashish',
//     age : 23,
//     myFun : function(){
//         function myFun1() {
//             console.log(this) // returns undefined
//         }
//         myFun1()
//     }
// }

// myObj.myFun()

// ===========================================================================================

// this keyword in browser under non-strict mode :

// -----------------------------------------------------
// 1. on console :

// console.log(this) // returns window object

// -----------------------------------------------------

// 2. inside function :

// function displayThis() {
//     console.log(this) // returns window object
// }

// -----------------------------------------------------

// 3. inside object --> function :

// let myObj = {
//     name : 'Ashish',
//     age : 23,
//     myFun : function(){
//         console.log(this) // returns object itself
//     }
// }

// myObj.myFun()

// -----------------------------------------------------

// 4. inside object --> function --> function :


// let myObj = {
//     name : 'Ashish',
//     age : 23,
//     myFun : function(){
//         function myFun1() {
//             console.log(this) // returns window object
//         }
//         myFun1()
//     }
// }

// myObj.myFun()

// ===========================================================================================

// this keyword in browser under strict mode :
// 'use strict'  // need to mention this string on top of code for using strict mode

// -----------------------------------------------------
// 1. on console :

// console.log(this) // returns window object

// -----------------------------------------------------

// 2. inside function :

// function displayThis() {
//     console.log(this) // returns undefined
// }

// -----------------------------------------------------

// 3. inside object --> function :

// let myObj = {
//     name : 'Ashish',
//     age : 23,
//     myFun : function(){
//         console.log(this) // returns object itself
//     }
// }

// myObj.myFun()

// -----------------------------------------------------

// 4. inside object --> function --> function :


// let myObj = {
//     name : 'Ashish',
//     age : 23,
//     myFun : function(){
//         function myFun1() {
//             console.log(this) // returns undefined
//         }
//         myFun1()
//     }
// }

// myObj.myFun()

// ************************************************************************************************



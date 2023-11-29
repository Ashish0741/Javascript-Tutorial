
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

// Constructor Functions :
// It is used for reusability of the code or we can say it works as template
// we can create constructor function using new keyword and it will starting pointing to this keyword of function

// function createCar(name, company, color) {
//     this.name = name
//     this.company = company
//     this.color = color

//     this.drive = function () {
//         console.log(`I am driving ${this.name} and it is of ${this.color} color 🤩.`)
//     }
// }

// let car1 = new createCar('X4','BMW','White')

// console.log(car1)

// let car2 = new createCar('S-class', 'Mercedes', 'Silver')

// console.log(car2)

// // also we can add method to above constructor function

// car1.drive() 

// car2.drive()


// ************************************************************************************************

// Classes :
// It is blueprint or template which consists of data and methods

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     canDrive(){
//         (this.age > 18 ? console.log(`Hey! ${this.name} your age is above 18 hence you can drive`) : console.log(`Hey! ${this.name} your age is below 18 hence you can't drive`))
//     }
// }

// let person1 = new Person('Ashish',23)

// person1.canDrive()

// let person2 = new Person('Shivani',16)

// person2.canDrive()

// ************************************************************************************************

// Classical Inheritance :
// It is used for code reusability
// Properties and methods of Base class can be put down or accessed in derived class
// extends keyword is used for inheritance
// super method is used to access properties of base class

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     greet(){
//         console.log(`Hey! Good Morning ${this.name}`)
//     }
// }

// class Teacher extends Person{
//     constructor(name, age, department){
//         super(name, age)
//         super.greet() // calling base class method on constructor invokation
//         this.department = department
//     }
// }

// class Student extends Person {
//     constructor(name, age, subjects){
//         super(name, age)
//         this.subjects = subjects
//     }

//     greeting(){
//         super.greet() // calling base class method in derived method using super keyword
//     }
// }


// let teacher = new Teacher('Ashish', 23, 'IT')

// console.log(teacher)


// let student = new Student('Shivani', 23, ['IT','Maths','Science'])
// student.greeting() 
// console.log(student)

// ************************************************************************************************

// Polymorphism :
// poly --> many
// morph --> forms
// ism --> method
// It means that one can have many forms

// class Animal {
//     sound(){
//         console.log('Animal can make different sounds')
//     }
// }

// class Dog extends Animal{
//     // sound(){
//     //     console.log('Dog barks')
//     // }
    
// }

// class Cat extends Animal{
//     sound(){
//         console.log('Cat mews')
//     }
// }

// let dog = new Dog()
// dog.sound()

// ************************************************************************************************

// Encapsulation :
// It is used to hide the properties of class or function

// using function

// function Person(_name, _age) {
//     var name = _name // here var keyword is working as access modifier
//     var age = _age

//     this.getName = function(){
//         return name
//     }

//     this.getAge = function(){
//         return age
//     }
// }

// let person1 = new Person('Ashish',23)

// console.log(person1)
// console.log(person1.getName())
// console.log(person1.getAge())

// // updating existing properties

// person1.name = 'Shivani' // not updating existing properties

// console.log(person1.getName()) // still it is showing 'Ashish'

// ================================================

// using class 

// class Person {
//     constructor(name, age){
//         this._name = name
//         this._age = age
//     }

//     get getName(){
//         return this._name
//     }

//     set setName(name){
//         this._name = name
//     }
// }

// let person2 = new Person('Ashish',23)

// console.log(person2)

// console.log(person2.getName)

// person2._name = 'Shivani'


// console.log(person2)

// ************************************************************************************************

// Prototype :
// In JavaScript, the prototype is an internal property of objects that is used for inheritance. 
// Each object in JavaScript has a prototype, which is a reference to another object. 
// we can create our own prototype method in our object prototype

// Prototype chainig :
// When you access a property on an object, and if the property is not found on the object itself, 
// JavaScript looks for the property in the object's pre-built prototype, and this process continues up the prototype chain until the property is found or the end of the chain is reached. 


// function Person(name, age){
//     this.name = name
//     this.age = age
// }

// // creating prototype method

// Person.prototype.getNameAndAge = function(){
//     console.log(`My name is ${this.name} and my age is ${this.age}`)
// }

// let person1 = new Person('Ashish',23)

// console.log(person1)

// person1.getNameAndAge()


// let person2 = new Person('Shivani',24)

// console.log(person2)

// person2.getNameAndAge()

// ************************************************************************************************

// call, apply and bind :

// call method :
// The call method is used to invoke a function with a specific 'this' value and arguments provided individually.
// It immediately executes the function with the specified this value and arguments.

// let printDetails = function(city){
//     console.log(`Hey ! My name is ${this.name} and I am ${this.age} years old and I am from ${city}`)
// }

// let person1 = {
//     name : 'Ashish',
//     age : 23
// }

// printDetails.call(person1,'Mumbai')


// apply method :
// The apply method is similar to call, but it takes an array of arguments instead of individual arguments.


// let person2 = {
//     name : 'Shivani',
//     age : 23
// }

// printDetails.apply(person2,['Nashik'])


// bind method :
// The bind method is used to create a new function with a specified this value and initial arguments.
// It does not immediately execute the function but returns a new function that, when called, has the this value and arguments provided during the bind call.

// let person3 = {
//     name : 'Adarsh',
//     age : 21
// }

// let bindFunc = printDetails.bind(person3,'Lonere')

// bindFunc()


// ************************************************************************************************

// Synchronous programming :
// It means it is single threaded, so only one operation or program will run at a time.

// Asynchronous programming :
// It means a server can send multiple requests at a time.

// how async code works :
// there are 3 queues :
// 1. callstack queue -> here all sync code go and execute one by one
// 2. node/browser apis -> all callback functions goes here and wait until all sync code gets completed
// 3. callback queue -> all callback functions comes here in random order and wait for event loop
// 4. event loop --> it work as security it checks if callstack queue is empty if it is then it will send one callback func to callstack for execution

// In above working callback function execution is in random manner
// To make execution in serial manner we can call next function at the end of previous function

// const fs = require('fs')
// console.log('Started')

// fs.readFile('f1.txt',cb1)

// function cb1(error, data){
//     if (error){
//         console.log(error)
//     }
//     else {
//         console.log('File 1 data -> ',data)
//     }
//     fs.readFile('f2.txt',cb2)
// }

// function cb2(error, data){
//     if (error){
//         console.log(error)
//     }
//     else {
//         console.log('File 2 data -> ',data)
//     }
//     fs.readFile('f3.txt',cb3)
// }

// function cb3(error, data){
//     if (error){
//         console.log(error)
//     }
//     else {
//         console.log('File 3 data -> ',data)
//     }
// }

// console.log('Completed')

// ==============================================================

// setTimeout function :
// It is async function
// It takes two parameter -> setTimeout(callback function, timeout in milisecond)

// console.log('Started')

// function greet(){
//     console.log('Hello from setTimeout function')
// }

// setTimeout(greet, 5000)

// console.log('Completed')


// -----------------------------------------

// setInterval function :
// it is async finction
// it will run after every milisecond mention in paramter
// it takes two parameter -> setInterval(callback function, time in milisecond)

// console.log('Started')

// function hello(){
//     console.log('Hello from setInterval')
// }

// let timer = setInterval(hello, 1000)

// // to break setInterval function we require setTimeout and clearInterval function

// setTimeout(function(){
//     clearInterval(timer)
// },3000)

// console.log('Completed')

// ************************************************************************************************

// Promises :

// In JavaScript, promises are a programming construct that represents the eventual completion or failure of an asynchronous operation and its resulting value. 
// They provide a cleaner and more organized way to work with asynchronous code compared to traditional callback functions.

// how to construct a promise

// let myPromise = new Promise(function(resolve, reject){
//     const a = 6
//     const b = 6

//     setTimeout(()=>{
//         if (a === b){
//             resolve('The values are equal')
//         }
//         else{
//             reject('The values are not equal')
//         }
//     },2000)
// })

// consuming a promise

// pending state

// console.log(myPromise)

// fulfiled state

// myPromise.then(function(result){
//     console.log(result)
// })

// // rejected state

// myPromise.catch(function(error){
//     console.log(error)
// })

// settled state

// we can right fulfiled or rejected on below manner

// myPromise
// .then((result1)=>{
//     console.log(result1)
// })
// .catch(function(error){
//     console.log(error)
// })

// ===========================================================================

// problem : create a coffee shop which only takes orders of coffee

// function coffeeShop(order){
//     return new Promise(function(resolve, reject){
//         if (order === 'coffee'){
//             resolve('Order has been placed')
//         }
//         else {
//             reject('Order has been rejected')
//         }
//     })
// }

// function processOrder(order){
//     return new Promise(function(resolve){
//         console.log('Order is being processing ....')
//         resolve(`${order} and is served.`)
//     })
// }

// coffeeShop('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     return processOrder(orderPlaced)
// }).then(function(processedOrder){
//     console.log(processedOrder)
// }).catch(function(orderRejected){
//     console.log(orderRejected)
// }) // chaining of promise


// async await --> this are keyword which makes promises much simplier
// In async await we need to use try catch block to handle rejected cases
// writing above code using async await

// async function serverOrder(){
//     try {
//         let orderPlaced = await coffeeShop('coffee')
//         console.log(orderPlaced)
//         let processedOrder = await processOrder(orderPlaced)
//         console.log(processedOrder)
//     } catch (error) {
//         console.log(error)
//     }
// }

// serverOrder()

// ************************************************************************************************

// Comparison Operators :

// loose checking or '==' :
// This operator will be check only value 

// let a = 6
// let b = '6'

// console.log(a==b)


// strict checking or '===' :
// This operator will check both value and type

// let x = 4
// let y = '4'

// console.log(x===y)


// ====================================================================================================

// Truthy & Falsy :

// All falsy values :
// false
// 0
// -0
// 0n
// '',"",``
// NaN
// null
// undefined

// let a = 1

// if (a){
//     console.log('I am truthy')
// }
// else {
//     console.log('I am falsy')
// }

// problem :

// (function(){
//     if ((-100 && 100 && "0") || [] === true || 0){
//         console.log(1) ✅

//         if ([] || (0 && false)) {
//             console.log(2) ✅
//         }

//         if (Infinity && NaN && 'false') {
//             console.log(3)

//             if ('') {
//                 console.log(4)
//             }
//         }
//         else{
//             console.log(5) ✅

//             if (({} || false === '') && !(null && undefined)) {
//                 console.log(6) ✅
//             }
//         }
//     }
// })()


// ----------------------------------------------------------------------------------------------

// Primitive Data Types :
// They are immutable and cannot change once assign
// It is stored in stack memory

// Numbers, Strings, Booleans, Null, Undefined are of primitive data types

// let a = 5

// let b = a

// a = 4

// console.log(a)
// console.log(b)

// let x = 'Ashish'

// let y = x

// x = 'SK'

// console.log(x)
// console.log(y)

// let n = true

// let m = n

// n = false

// console.log(n)
// console.log(m)

// -------------------------------------------------------------------------------------

// Reference Data Types :
// They are mutable and can be changed
// They are stored in heap memory but address of heap memory is stored in stack memory

// objects, arrays and functions are reference data types

// let firstPerson = {
//     name : 'Ashish',
//     age : 23
// }

// let secondPerson = firstPerson

// firstPerson.name = 'Shivani'

// console.log(firstPerson)
// console.log(secondPerson)


// let firstPerson = [1,2,4,5,6]

// let secondPerson = firstPerson

// firstPerson[2] = 0

// console.log(firstPerson)
// console.log(secondPerson)

// -------------------------------------------------------------------------------------------

// Shallow Copy :
// To overcome the problem of referencing we use shallow copy i.e spread operator {...}

// let firstPerson = {
//     name : 'Ashish',
//     age : 23
// }

// let secondPerson = {...firstPerson}

// secondPerson.name = 'Shivani'

// console.log(firstPerson)
// console.log(secondPerson)

// but shallow copy will not work on nested objects

// let firstPerson = {
//     name : 'Ashish',
//     age : 23,
//     address : {
//         city : 'Mumbai',
//         state : 'MH'
//     }
// }

// let secondPerson = {...firstPerson}

// secondPerson.address.city = 'Pune' // here both objects gets changed

// console.log(firstPerson)
// console.log(secondPerson)


// ===============================================================================

// Deep Copy :
// This is used to overcome the problem with shallow copy 
// It will make separate reference for all objects which are getting created with reference to previous one
// we use JSON.parse(JSON.stringfy(object))


// let firstPerson = {
//     name : 'Ashish',
//     age : 23,
//     address : {
//         city : 'Mumbai',
//         state : 'MH'
//     }
// }

// let secondPerson = JSON.parse(JSON.stringify(firstPerson)) // Deep copy

// secondPerson.address.city = 'Pune' // here both objects gets changed

// console.log(firstPerson)
// console.log(secondPerson)

// ===============================================================================

// Closures :

// In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. 
// A lexical environment consists of any local variables that were in-scope at the time the closure was created. 
// In simpler terms, a closure allows a function to access variables from its outer (enclosing) scope even after the outer function has finished executing.

// function outerFunction() {
//     let a = 9

//     function innerFunction(){
//         console.log(a)
//     }

//     return innerFunction
// }

// let fun = outerFunction()

// fun()


// ------------------------------------------

// function outerFunction() {
//     let age = 9

//     function innerFunction(){
//         console.log(age)

//         let name = 'Ashish'

//         function greet(){
//             console.log(`My name is ${name} and I am ${age} years old`)
//         }
        
//         return greet
//     }

//     return innerFunction
// }

// let fun = outerFunction()

// let g1 = fun()

// fun()
// g1()

// ===============================================================================

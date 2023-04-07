// Basics of JavaScript

/*
    Multiline Comment in JavaScript
    -- Variable Declaration in JavaScript --
    Primative Types: strings, integers, boolean, floats, arrays, objects(aka dictionaries in python)
    Functions in JavaScript
    Loops in JavaScript
*/

// String Variable
var first_name = 'Zack'

// Display our value to the JS Console
console.log(first_name)

// Integer Variable
var some_number = 32;

// Display Value
console.log(some_number);

// show all attributes of a document or id
console.dir(document)

// Float Variable
var some_float = 3.141592;
console.log(some_float)

// Array Variable
var some_array = [1,2,3,4];
console.log(some_array)

// Object Variable
var some_object = { yee: 'haw'}
console.log(some_object)

// javascript hoisting
a_num = 10
console.log(a_num)
var a_num
console.log(a_num)

console.log(some_random_variable) ///returns undefined; not good practice
var some_random_variable = 'This is a random variable';
console.log(some_random_variable)

// A Better of Declaring a variable is by using 'let' and/or 'const'

let x;
console.log(x)
x = 3
console.log(x)

const y = 5;
console.log(y)
// y = 6
// console.log(y)


/*
    Basic Math Operations in JS
*/
// Addition
let sum = 5 + 5; // let sum += 5
console.log(sum)

// Subtraction
let diff = 5 - 4; // let diff -= 5
console.log(diff)

let diff_1 = 5
let diff_2 = 4
console.log(diff_1 - diff_2)

// Multiplication and division same as python, exponents as well
let product = 5 * 5; // let product *= 5
console.log(product)

// Division
let divide = 5 / 5; // let divide /= 5
console.log(divide)

// Exponetial
let square = 5 ** 2; // let square **= 2
console.log(square)

// More math Operations
// Finding the floor of a decimal
let find_floor = Math.floor(5.8)
console.log(find_floor)

// Find the ceiling of a decimal
let find_ceil = Math.ceil(5.8)
console.log(find_ceil)

// Mind Binder
let crazy_stuff = some_float + '4' // undefined, 7.14, 3.14+4, 3.144
console.log(crazy_stuff);

// Mind Binder 2
let crazy_stuff_2 = some_float + parseFloat('4') // undefined, 7.14, 3.14+4, 3.144
console.log(crazy_stuff_2)

// REdeclaration of variables
var red_ranger = 'Jason'
var red_ranger = 'Tommy'
console.log(red_ranger)

let nba_goat = 'Micheal Jordan';
console.log(nba_goat)

nba_goat = 'Kobe' 
console.log(nba_goat)

/*
    BAD REDECLARATION: don't retype let on variable redeclaration
    let nba_goat = 'LeBron';
    console.log(nba_goat)
*/

// Regular named functions
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}

// calling a function
console.log(addNums())

// Variable Named Function with parameters
let addNum2 = function(num, num2){
    return num + num2
}

// Call our function
console.log(addNum2(6,7))

function addNums3(x,y){
    return x + y
}

console.log(addNums3(4,5))

//ES6+ Arrow Function in JavaScript
let multiplyNums = () => {
    let num = 4;
    let num2 = 5;

    return num * num2
}

console.log(multiplyNums())

// ES6+ Arrow function WITH parameters (SINLGE PARAM)
/*
    Using a single parameter in an arrow funtion WITHOUT parentheses 
    can only be done with ONE parameter NOT if 2 or more are introduced.
*/
let cubed = num => {
    return num ** 3
}

// No parameters arrow function
let someFunc = () => {
    return 5
}
console.log(someFunc())

console.log(cubed(4))

let cubed2 = (num) => {
    return num ** 3
}
console.log(cubed(4))

// If you have multiple parameters, MUST have parentheses
let toThePower = (num, power) => {
    return num ** power
}

console.log(toThePower(4,3))

console.log((function(name){
    let hello = 'Hello ' + name;
    return hello
})
('Greg'))

// JavaScript Closure
// Self-Invoking Function
/*
    Our Console.log in the below example DOES NOt have to be provided
    -- we will just use this for an easier display of the output
*/

console.log((function(name){
    let hello = 'Hello Word' + name;
    return hello
})('Joel'))


// JavaScript Control Flow
// If Statement
function determineAge(age){
    if ( age < 18 ){
        return 'Minor'
    } else if ( age >= 18 && age < 65 ){
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(74))


// JavaScript Ternary Operator
function determineAge2(age){
    return ( age < 18 ) ? 'minor' : (age >= 18 && age <= 65) ?
    'Adult not retired' : 'Senior not retired'
}

console.log(determineAge2(31))

// Loooooops
// For Loop Syntax -- for keyword(counter; condition ; incrementation/decrementation) start/stop/step
// my_array[1,2,3,4]
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(countByOne())

function decreaseByOne(){
    // For Loop
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decreasing has stopped'
}

console.log(decreaseByOne())

// While Loop - JavaScript
function countWithWhile(){
    let i = 0 // Counter
    let text = '';

    // While Loop
    while(i < 10){
        text += `This number is...${i} \n`
        i++
    }
    return text
}

console.log(countWithWhile())

// do while loop
function countWithDoWhile(){
    let i = 0 // Counter
    let text = '';

    //Do
    do {
        text += `This number is...${i} \n`
        i++;
    }

    while(i < 10)
    return text
}
//Do while will run at least one time

console.log( countWithDoWhile() )


/*
    Looping with Arrays and Arrary Methods, Array String Methods

*/

// Creation of Array: group_of_names
let groupOfNames = ['Jerry','Ben', 'Ash', 'Brock', 'Misty']

// Index for the first position == "Jerry"
console.log(groupOfNames[0]) // Jerry

// Deconstruction of an array
let terry, ben, misty;
[terry, misty, ben] = groupOfNames
console.log(terry, ben, misty)
console.log(groupOfNames)
console.log(ben)

// method 1 for looping through an array
function showAllNames(){
    for(let i = 0; i < groupOfNames.length; i++){
        console.log(groupOfNames[i])
    }
    return 'Done'
}

console.log(showAllNames())

// Method #2 for looping through an array (arrow function)
console.log( groupOfNames.forEach(element => console.log(element)))

// JavaScript Array Method: array.toString()
console.log(groupOfNames.toString())
console.log(typeof(groupOfNames.toString()))

/* JAVASCRIPT ARRAY METHODS: .map(), .filter(), .reduce() */

// .map()
let bNames = groupOfNames.map( i => {
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
})
console.log(bNames)

// Long form version of .map()
let bNamesTest = function (){
    let testArray = []
    for(let i = 0; i < groupOfNames.length; i++){
        if(groupOfNames[i][0] == 'B'){
            testArray.push(groupOfNames[i])
        }
    }
    return testArray
}

console.log(bNamesTest())

// .filter()
let longNames = groupOfNames.filter( element => element.length > 4)

console.log(longNames)

// .reduce()
const nums = [2,4,6,8,10]
let numsReduced = nums.reduce( (accumulator, currentNum) => {
    return accumulator + currentNum
} )

console.log(numsReduced)

// Array Methods with String Values: .join(), .slice(), .search(), .splice()
console.log(groupOfNames.join(", "))

console.log(groupOfNames.slice(0, 3)) // Terry, Ben, Ash

// .splice()
let captured_value = groupOfNames.splice(0, 1, 'Freddie')
console.log(`This was removed based on our splice: ${captured_value}`)
console.log(groupOfNames)

function replaceNewNames(){
    // For Loop to get all names
    // And replace even indexes
    for(let i = 0; i < groupOfNames.length; i++){
        if(i % 2 == 0){
            groupOfNames.splice(i,1, 'Bob')
        }
    }
    return groupOfNames
}

console.log(replaceNewNames())

// Using .search and .slice on array values that are strings
console.log(groupOfNames[0].search('B')) // index == 0 

// String.slice()
console.log(groupOfNames[1].slice(0,groupOfNames[1].length))



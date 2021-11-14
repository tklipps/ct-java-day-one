// printing
console.log("hello");

// variable
var my_name = "Tim";
console.log(my_name);

// integer
var some_number = 31;
console.log(some_number);

// float
var some_float = 3.14;
console.log(some_float);

// arrays -- like a python list
var some_array = [1,2,3,4];
console.log(some_array);
console.log(some_array[2]);

// Object Variable -- just like a python dictionary
var some_object = {'test':'please test me'};
console.log(some_object);
console.log(some_object['test']);
console.log(some_object.test);
my_key = "test";
console.log(some_object[my_key]);

// declare vars
var some_random_var;
console.log(some_random_var);
some_random_var = "Christina";
console.log(some_random_var);

// JS Hoisting
console.log(madeUpName);
var madeUpName = "Steve";

// WE USE camelCase!!
var myVarNamedJoe = "Joe";

let fullName = myVarNamedJoe + 'Quimby';
console.log(fullName);
fullName="Mr. Burns";
console.log(fullName);

const superHero="Ironman";
console.log(superHero);
// superHero = "spiderman" will give an error

/*This is a multi
line
comment
*/

// Math in JavaScript
let sum = 5+5;
console.log(sum);//10
sum+=5;
console.log(sum);//15

// Subtract
let diff = 5-5;
console.log(diff); //0
diff-= 5;
console.log(diff); //-5

//Multiply
let product = 5*5;
console.log(product); // 25
product *= 5;
console.log(product); //125

//Divide
let divide = 5/5;
console.log(divide); // 1
console.log(typeof divide);
divide /=5;
console.log(divide); // .20
console.log(typeof divide);

// esp

let square = 5**2;
console.log(square); //25
square **= 2; //625
console.log(square);

// Floor division
// in python we did 5//2 = 2
let floor = Math.floor(5/2);
console.log(floor);

// ceiling -- rounding up
let ceil = Math.ceil(5/2);
console.log(ceil); //3

//weird stuff
// let stuff = 3.14 + '4'
// console.log(stuff) /// 3.144 = like adding strings together

// int() float() str()
let stuff2 = 3.14 + parseInt('4');
console.log(stuff2);

let stuff3 = 3.14.toString() + '4';
console.log(stuff3);

// functions

function addNums(){
    let num=4;
    let num2 = 5;
    return num + num2;
};

console.log(addNums());

function addNums2(num1, num2){
    return num1 + num2
};

console.log(addNums2(4,5));

const addNums3 = function(num1, num2){
    return num1 + num2
}

// as of ES6 we have Arrow Functions .. there This refes to the global this

let multiplyNums = () => {
    let num = 4;
    let num2 = 5;
    return num*num2;
}

console.log(multiplyNums())

// returns none
/*function lame_function(){
    5*2
}
console.log(lame_function())
*/

// if only one line it will return that line
let multipyNums3 = (num, num2) => num*num2;

console.log(multipyNums3(2,5))

// if you only have one parameter you don't need the parenth
let doubleNum = num => num*2

console.log(doubleNum(4))

// class assignment



function classWorkNums(num1, num2){    
    return (num1 + num2)/2
};

console.log(classWorkNums(7,8))

// 

let squareSum = (num1, num2) => (num1**2)+(num2**2)

console.log(squareSum(3,7))

// Self invoking functions

console.log(function(name){
    return name
}('Chris'))

// FLOW CONTROL
// If statements

// and is &&
// or is ||

function determineAge(age){
    if (age < 18){
        return 'Minor'
    }else if(age >= 18 && age<=65){
        return "Adult"
    }else {
        return "Elderly"
    }
}

console.log(determineAge(65))

// Ternary Operator VERY IMPORTANT
// condition ? exprIfTrue : exprIfFalse

var age = 12
var age_group = age > 20 ? "Over 20" : "Under 20"
console.log(age_group)

//

function dAge(age){
    return age < 18 ? "Minor" : age >=18 && age <65 ? "Adult":"Elderly"
}
console.log(dAge(65))


let z = 1
z++
console.log(z)
// loops

function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
}
countByOne()

function countDownByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
}

countDownByOne()

function countDownByTwo(){
    for(let i = 20; i > 0; i-=2){
        console.log(i)
    }
}

countDownByTwo()

//
//           0    1    2    3    4
let my_list = ['a', 'b', 'c', 'd', 'e']
console.log(my_list.length)

for (let i = 0; i<my_list.length; i++){
    console.log(my_list[i])
}

// python for name in names
// Get access to the object
// USE Of and NOT IN

for (let char of my_list){
    console.log(char)
}

console.log("down here")
// loop through an array inline! using .forEach

my_list.forEach( (char)=> console.log(char))

// .map (most important) .filter .reduce

// .map() will map a function on an array

names = ["pari", 'tate', 'Toan', 'eduardo', 'mike', 'mccall', 'tim']

let t_names = names.map(
    (name_)=>{
        if (name_[0] == "T" || name_[0] == 't'){
            return name_
        }else{
            return false // lower case in js
        }
    }
)
console.log(t_names)


// toLowerCase and toUpperCase
console.log('sdflhlkasdfLKHKHKjhsdfHJK'.toLowerCase())
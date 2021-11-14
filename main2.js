// Methods of arrays continued

// . reduce - will take an array and return one value

const nums = [2, 4, 6, 8, 10]
let nums_sum = nums.reduce(
    (accumulated_num, current_num)=>{
        return accumulated_num + current_num
    }
)

console.log(nums_sum)

// .filter will add/remove elements based on a condition

names = ["pari", 'tate', 'Toan', 'eduardo', 'mike', 'mccall', 'tim']

let long_names = names.filter(
    element => element.length > 4
    
)
console.log(long_names)

// array methods .join .slice .search .splice
console.log(names.join(", "))

// add to a list

names.push('Steve')
console.log(names)

// .pop()

console.log(names.pop())
console.log(names)

// .shift() -- takes one off the front of list and shifts everything left up in the index

console.log(names.shift())
console.log(names)

// .unshift() -- adds to the front and shifts everything down in index

console.log(names.unshift("Steve"))
console.log(names)

// format string in JS
myName="Kevin"
console.log(`my name is ${myName}`)

// .splice() -- cut out of arrays (first number is index start, second is how many)
console.log(names)
let captured_names = names.splice(0, 2)
console.log(captured_names)
console.log(names)

// change every other name in Marchmellows
let foods = ["pizza", 'tacos', "dim sum", "sushi", "ice cream", "fried rice", "cheeseburgers"]

function replace_foods(){
    for (let i = 0; i<foods.length; i++){
     if ( i % 2 == 0){
         foods.splice(i,1,"Marshmellow")
     }   
    }
}
replace_foods()
console.log(foods)

// Strings
// .search()

console.log("Joshua".search('s')) // index of the s (2)
console.log('Joshs'.search('s')) // still only grabs the first one
console.log('Joshs'.search('z')) // gives back -1

// slice works for strings like splice works for arrays

console.log("Joshua".slice(0,4))
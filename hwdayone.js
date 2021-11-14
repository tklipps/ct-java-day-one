//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(sentence,words){
    let lowSent = sentence.toLowerCase();
    let dogMatch = words.map(
        word=>{
            if (lowSent.includes(word.toLowerCase())){
                return `Matched ${word}`
            }else{
                return "No Matches"
            }
        }
    )
    return dogMatch
}


console.log(findWords(dog_string,dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let stuff = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


function replaceEvens(){
    for (let i = 0; i< stuff.length; i++){
     if ( i % 2 == 0){
         stuff.splice(i,1,"Even index")
     }   
    }
}
replaceEvens()
console.log(stuff)
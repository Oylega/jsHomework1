//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["MaX","HAS","PuRple","Dog"]


function findWords(aString){
    for(let i = 0; i < dogNames.length; i++){
        if (dogNames.some(i => aString.includes(i))) {
            console.log("Matched dog_name");
        } else {
            console.log ("No Matches");
        }
    }
}        
console.log(findWords(dogString)) 

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     let evenIndex = Given arr.splice(0,-1,2)
// }

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


function evenIndex(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1, "even index")
        }
    }
    return arr      
}

console.log(evenIndex(givenArr))
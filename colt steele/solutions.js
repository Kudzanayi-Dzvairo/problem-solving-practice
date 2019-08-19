function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
console.log("At the top!\nGoing down...");
for (let j = n - 1 ; j >= 0; j--){
    console.log(j)
}
console.log("Back down. Bye!")
}

countUpAndDown(10)

function printAllPairs(n) {
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            console.log(i, j)
        }
    }
}

function logAtLeast5 (n){
    for (var i = 1; i <= Math.max(5, n); i++){
        console.log(i)
    }
}

function logAtMost5(n){
    for(var i = 0; i <= Math.min(5,n); i++){
        console.log(i)
    }
}

function charCount(str){
    //make object to return at the end
    var result = {}
    //loop over string for each character
    for(var i=0; i < str.length; i++ ) {
    //if the char is a number/letter AND is a key in the object add one to count
        var char = str[i].toLowerCase()
        if(result[char] > 0) {
            result[char]++;
        } else {
   //if the char is a number/letter AND not in object, add it to object and set value to 1
            result[char] = 1
        }
    }
    //if character is something else (space/period) do nothing
    //return object
    return result
}

//refactor 

function charCount2(srt){
    var obj = {}
    for (var char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}


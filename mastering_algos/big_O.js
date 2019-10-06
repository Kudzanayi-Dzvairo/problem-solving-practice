const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt']
const large = new Array(100).fill('nemo')

function findNemo(array){
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo') {
            console.log("Found Nemo")
        }
    }
}

console.log(findNemo(nemo))

function compressAllBoxes(boxes){
    boxes.forEach(function(item){
        console.log(item)
    })
}

const compressAllBoxes1 = boxes => {
    boxes.forEach(box => console.log(box))
}

function compressFirstBox(boxes){
    console.log(boxes[0])
}

const boxes = [0,1,2,3,4,5]
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]) //0(1)
    console.log(boxes[1]) //0(2)
}

console.log(logFirstTwoBoxes(boxes)) //0(1)

function funchallenge(input){
    let a = 10 //0(1)
    a = 50 + 3//0(1)

    for(let i = 0; i < input.length; i++ ){ //0(n)
        anotherFunction() //0(n)
        let stranger = true; //0(n)
        a++; //0(n)
    }
    return a //0(1)
}

// Big 0(3 + 4n) 
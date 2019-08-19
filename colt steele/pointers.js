/* write a funtion called sumZero which accepts a sorted
array of integers. The functionshould find the first pair where the sum is 0
Rreturn an array that include both values that sum to zero or undefined if 
a pair does not exist */

//Time complexity - O(N*2) Space Complexity - o(1)
function sumZero(arr){
    for(let i = 0;i <arr.length; i++){
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}

sumZero([-4, -3, -3, -1, 0, 1, 2, 5])
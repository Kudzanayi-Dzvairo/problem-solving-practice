//frequency counter pattern

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for(let i = 0; i < arr1.length; i++){
//       let correctIndex = arr2.indexOf(arr1[i] ** 2)
//       if(correctIndex === -1) {
//           return false
//       }
//       arr2.splice(correctIndex, 1)
//   }
//   return true
// }

// function same2(arr1, arr2){
// if (arr1.length !== arr2.length){
//     return false
// }
// let frequencyCounter1 = {}
// let frequencyCounter2 = {}
// for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     console.log(frequencyCounter1)
// }
// for (let val of arr2){
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
// }
// for(let key in frequencyCounter1) {
//     if(!(key ** 2 in frequencyCounter2)){
//         return false
//     }
//     if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//         return false
//     }
// }
// return true
// }

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let counter1={}
//   let counter2={}

//   for(let letter in str1){
//       counter1[letter] = (counter1[letter] || 0) + 1
//   }

//   for(let letter in str2){
//       counter2[letter] = (counter2[letter] || 0) + 1
//   }

//   for(let letter in counter1){
//       if(counter1[letter] !== counter2[letter]){
//           return false
//       }
//   }
//  return true
// }

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for(let i = 0; i < first.length; i++){
      let letter = first[i]
      //if letter exists, increment, otherwise ser to 1
      lookup[letter]? lookup[letter] += 1: lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++){
      let letter = second[i];
      //can't find letter or letter is 0 than its not an anagram
      if(!lookup[letter]){
          return false
      } else {
          lookup[letter] -= 1;
      }
  }
  return true 
}

console.log(validAnagram('anagram', 'nagaram'))
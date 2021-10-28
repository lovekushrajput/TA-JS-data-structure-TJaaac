let numbers = [6, 8, 10, 12, 43, 56, 98];

let userIds = [1230, 234, 1278, 984, 763, 900];

// 1. Add all the values of numbers and userIds array into the new newly created array named `collection`

let collection = []
for(let number of numbers){
  collection.push[number];
}
for(let userId of userIds){
  collection.push[userId];
}
console.log(collection)
// 2. Add all the even numbers from both arrays numbers and userIds into a newly created array named `evenCollection`
let evenCollection = []
for(let number of collection){
  if(number % 2 == 0){
    evenCollection.push[number]
  }
}
// 3. Add all the odd numbers from both arrays numbers and userIds into a newly created array named `oddCollection`
let oddCollection = []
for(let number of collection){
  if(number % 2 !== 0){
    oddCollection.push[number]
  }
}
console.log(evenCollection,oddCollection)
/*
  @param means parameter

 4. Write a function named times which accets two parameter and return an array. 

  @param times (number)
  @param character (string)
  @return array

  Example: 
    times(5, 'c'); // ['c', 'c', 'c', 'c', 'c']
    times(2, 'a'); // ['a', 'a']
    times(0); // []
    times(5); // ['test', 'test', 'test', 'test', 'test']
*/

function times(paramTimes, paramCharacter="test") {
  if(paramTimes < 1) return [] 
  let array = []
  for(let i = 0 ; i < paramTimes ; i++){
    array.push(paramCharacter)  
  }
  return array
}

// Uncomment the code below and test the output

//  console.log(times(5, 'c')); // ['c', 'c', 'c', 'c', 'c']
//  console.log(times(2, 'a'));  // ['a', 'a']
//  console.log(times(0));  // []
//  console.log(times(5));  // ['test', 'test', 'test', 'test', 'test']

/*

 5. Write a function named revert which reverts the element of the input array. 

  @param arr (array)
  @return array

  Example: 
    revert([1, 2, 3, 4]); // [4, 3, 2, 1]
    revert(['a', 'd', 'c', 'b']); // ['b', 'c', 'd', 'a']
    revert(['Ryan', 'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/

 function revert(paramArr) {
  let array = []
for (let i = paramArr.length-1 ; i>= 0 ; i--){
  array.push(paramArr[i])
}
return array
}

// Uncomment the code below and test the output
 console.log(revert([1, 2, 3, 4])); // [4, 3, 2, 1]
 console.log(revert(['a', 'd', 'c', 'b'])); //  ['b', 'c', 'd', 'a']
 console.log(revert(['Ryan', 'John', 'Bran'])); // ['Bran', 'John', 'Ryan']

/*

 6. Write a function named clear which remove all of these values (false, undefined, empty string, 0, null) and returns a new array  

  @param arr (array)
  @return array

  Example: 
    clear([1, 2, 3, 4, '', 0, null, undefined]); // [4, 3, 2, 1]
    clear(['a', undefined, 'd', 0,  'c', 'b']); // ['b', 'c', 'd', 'a']
    clear(['Ryan', null, 0,  'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/

function clear(paramArr) {
  let clearArray = []
  for (let i = paramArr.length-1 ; i>= 0 ; i--){
    if(paramArr[i] !== false){
      if(paramArr[i] !== undefined ){
        if(paramArr[i] !== ""){
          if(paramArr[i] !== 0){
            if(paramArr[i] !== null){
              clearArray.push(paramArr[i])
            }
          }
        }
      }
    }
  }
  return clearArray
}

// Uncomment the code below and test the output
console.log(clear([1, 2, 3, 4, '', 0, null, undefined])); // [4, 3, 2, 1]
console.log(clear(['a', undefined, 'd', 0, 'c', 'b'])); // ['b', 'c', 'd', 'a']
console.log(clear(['Ryan', null, 0, 'John', 'Bran'])); // ['Bran', 'John', 'Ryan']

/*

 6. Write a function named arrayToObj which accepts an array and return an object
 where the key will be the index of array and value will be the element of the array.

  @param arr (array)
  @return object

  Example: 
    arrayToObj([1, 2, 3, 4]); // {0: 1, 1: 2, 2: 3, 3: 4}
    arrayToObj(['a', undefined, 'd']); // {0: 'a', 1: undefined, 2: 'd'}
    arrayToObj(['Ryan', 'John']); // {0: 'Ryan', 1: 'John'}
*/

function arrayToObj(paramArr) {
  let object = {}
  for(let i = 0 ; i<= paramArr.length-1 ; i++){
    object[i]=paramArr[i]
  }
  return object
}



// Uncomment the code below and test the output
console.log(arrayToObj([1, 2, 3, 4])); // {0: 1, 1: 2, 2: 3, 3: 4}
console.log(arrayToObj(['a', undefined, 'd'])); // {0: 'a', 1: undefined, 2: 'd'}
console.log(arrayToObj(['Ryan', 'John'])); // {0: 'Ryan', 1: 'John'}

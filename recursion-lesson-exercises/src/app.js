/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(x) {
  //Your code here
  if(x===0){return 1 }
  return x*findFactorial(x-1)
}

//Exercise 2
const reverseString = function(str) {
  //Your code here
  if(str.length===0){return ""}
  return str[str.length - 1] + reverseString(str.substring(0,str.length-1))
}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1,arr2) {
  //Your code here
  if(arr1.length===0){return 1}
  return arr2.push(arr1[arr1.length-1])

}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }
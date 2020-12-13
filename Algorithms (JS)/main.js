//ex-1
// const printStars = function(num){
//     for(let i=0;i<num;i++){
//         console.log('\n')
//         for(let j =0;j<=i;j++){
//         console.log("*")
//         }
//     }
// }
// printStars(5)

//ex-2
// const printBackwardsStars = function(num){
//     for(let i=num;i>0;i--){
//         console.log('\n')
//         for(let j = i ; j>0;j--){
//             console.log('*')
//         }
//     }
// }
// printBackwardsStars(6) 

//ex-3
// const printStarSeries = function (num, count) {
//     for (let counter = 0; counter < count; counter++) {
//         for (let i = 0; i < num; i++) {
//             for (let j = 0; j <= i; j++) {
//                 console.log("*")
//             }
//             console.log("\n")
//         }
//         for(let i = num ; i>=0;i--){
//             for (let j = 0; j <= i; j++) {
//                 console.log("*")
//             }
//             console.log("\n")
//         }
//     }
// }
// printStarSeries(5, 3)

//ex-4
// const reverse = function(str){   
//   let reversed = str.split("")
//   let reverseArray = reversed.reverse()
//   let joinArray = reverseArray.join("")
//   console.log(joinArray)
// }
// reverse("dog") //should return "god"
// reverse("race car") //should return "rac ecar"

//ex-5
// function isPalindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
//   }
//   let check =  isPalindrome("Taco Cat");
//   console.log(check) 


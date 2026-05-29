// protoType

// function Test(name){
//   this.name = name
// }
// Test.prototype.run = function(){
//   return `hello test ${this.name}`
// }
// let obj =  new Test("harshit")
// console.log(obj.run());

// two sum
// let arr = [2,7,11,15]
// let target = 9

// // three sum
// let arr = [2, 7, 11, 15, 3, 6];
// let target = 20;

// function TwoSum(arr,target){
//   let temp;
//   let temp2;
//   let obj = {}
//   for(let i=0; i<arr.length; i++){
//     temp =  target-arr[i]
//     for(let j=0; j<arr.length; j++){
//       temp2 = temp - arr[j]
//       if(obj[temp2]){
//         return [temp2,arr[i],arr[j]]
//       }
//       obj[arr[j]] = true;
//     }
//  }
//  console.log(obj);
// }

// // TwoSum(arr,target)
// console.log('TwoSum(arr,target): ', TwoSum(arr,target));


//sort
// let arr = [12,43,45,21,36,76,73,23,9]
// function sort(){
//   let b = arr.sort((a,b)=>b-a)
//   console.log(b);
// }
// sort()

// moveZeroAtLast
// function moveZeroAtLast(){
//   let l = 0;
//   let arr = [1,4,2,0,8,0,0,1];
//    for(let i=0; i<arr.length; i++){
//     if(arr[i]>0){

//       [arr[i],arr[l]] = [arr[l],arr[i]]
//       l++
//     }
//   }
//    return arr
// }
// console.log(moveZeroAtLast());



//count the count
// let arr = [2,5,8,9,5,7,1,4,3,7,9,5,3,5,8,9,5,7,1,4,3,7,9,5,3]; 
// function count(){
//   let obj = {}
//   for(let i = 0; i<arr.length; i++){
//     obj[arr[i]] =  (obj[arr[i]] || 0) + 1
//   }
//   return obj
// }
// console.log(count());

//clouser
// function clouser(){
//   let count = 0;
//   return function(){
//     count++;
//     return count;
//   }
// }
// let c = clouser()
// console.log(c());
// console.log(c());
// console.log(c());


// iife
// (function(){
//   console.log("hello how are you");
// })()

//find the output
// const arr = [1, 2, 3," ",{},[],"",undefined,null,0,NaN];
// arr.forEach((item)=>{
//   if(item){
//     console.log("item",item);
//   }
// })

// 1,2,3, " ",{}, [],

// reverse
// let arr = [23,24,53,67,78,12,2,4,5]
// console.log(arr.reverse());

// reverse
// let str = "check the data"
// console.log(str.split("").reverse().join(''));

//slice splice split
// let arr = [23,24,53,67,78,12,2,4,5]
// console.log(arr.splice(0,1,12));
// console.log(arr);

// reverse(split and ...)
// let str = "test"
// console.log([...str].reverse().join(''));


// sliding window(13)
// let arr = [2,3,4,2,1,4,0,6,0,3,4,0,2,5];
// let limit = 4;

// function slidingWindow(){
//   let win = 0;
//   let maxWin  = 0;
//   let count = 0;
//   for(let i=0; i<limit; i++){
//     win += arr[i]
//   }
//   maxWin = win
  
//   for(let i=limit; i<arr.length; i++){
//     win = win - arr[i-limit] + arr[i]
//     if(win>maxWin){
//       count = i
//       maxWin = Math.max(win, maxWin)
//     }
//   }
//   let subArr = arr.slice(count-limit, count)
//   return {subArr,maxWin}
// }
// console.log('slidingWindow(): ', slidingWindow());


// /op(3a1b3a2c1d1e2s)
// let str= "AaABaaaccdess".toLowerCase();
// function test(str){
//   let op = ""
//   let count = 1;
//   for(let i=1; i<=str.length; i++){
//     if(str[i] == str[i-1]){
//       count++
//     }else{
//       op += count + str[i-1]
//       count = 1 
//     }
//   }
//   return op
// }
// console.log(test(str));


//remove deplicate
//op([1,2,3])
// let arr = [1,1,2,2,3]
// function remove(){
//   let op = [1]
// //  return [...new Set(arr)]
// for(let i=1; i<arr.length; i++){
//   if(arr[i] !== arr[i-1]){
//     op.push(arr[i])
//   }
// }
// return op
// }
// console.log(remove(arr))


// Maximum subarray sum + print subarray
// let arr = [-2,1,-3,4,-1,2,1,-5,4]

// function subArr(){
//   let start = 0;
//   let end = 0;
//   let temp = 0;
//   let curCount = arr[0];
//   let maxCount = arr[0];
  
//   for(let i=1; i<arr.length; i++){
//     if(arr[i]>arr[i] + curCount){
//       curCount = arr[i];
//       temp = i
//     }else{
//       curCount = arr[i] + curCount
//     }

//     if(maxCount<curCount){
//       maxCount = curCount;
//       start = temp;
//       end = i
//     }
//   } 
//   console.log(arr.slice(start,end+1));
// }

// subArr()



// let arr = [1,2,3,4];
// let op = [];
// function test(){
//   let pro = arr.reduce((acc,cur)=>acc*cur,1)
//   for(let i=0; i<arr.length; i++){
//     op.push(pro/arr[i])
//   }
//  return op
// }

// console.log('test(): ', test());



let arr = [1, 2, 3, 4];

let prefix = [];
let suffix = [];
let result = [];

// Prefix Product
prefix[0] = 1;

for (let i = 1; i < arr.length; i++) {
  prefix[i] = prefix[i - 1] * arr[i - 1];
}
console.log(prefix);

// Suffix Product
suffix[arr.length - 1] = 1;

for (let i = arr.length - 2; i >= 0; i--) {
  suffix[i] = suffix[i + 1] * arr[i + 1];
}

console.log(suffix);
// Final Result
for (let i = 0; i < arr.length; i++) {
  result[i] = prefix[i] * suffix[i];
}

console.log(result);
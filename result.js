
// 11. 3 Sum

// 👉 Find all triplets whose sum = 0

// Input: [-1,0,1,2,-1,-4]
// Output: [[-1,-1,1], [-1,0,1]]
// 12. Trapping Rain Water

// 👉 Calculate water stored between bars

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// 13. Product of Array Except Self

// 👉 No division allowed

// Input: [1,2,3,4]
// Output: [24,12,8,6]
// 14. Find Missing Number

// 👉 Numbers from 1 to n, one missing

// Input: [1,2,4,5]
// Output: 3
// 15. Merge Intervals

// 👉 Merge overlapping intervals

// Input: [[1,3],[2,6],[8,10]]
// Output: [[1,6],[8,10]]
// 🔥 Pro Level (Very Important Patterns)
// 16. Sliding Window Max Sum

// 👉 Max sum of subarray of size k

// 17. Longest Subarray with Sum K
// 18. Subarray with Zero Sum Exists
// 19. Maximum Product Subarray
// 20. Next Greater Element




// let str = "hello how are you";
// console.log(str.split(" ").map(data => data.slice(0,1).toUpperCase()+ data.slice(1)).join(" "))
// console.log(str.split(" ").map(data => data.slice(0,-1) + data.slice(-1).toUpperCase()).join(" "))
// console.log(str.split(" ").map(data =>data.slice(0,1).toUpperCase()+ data.slice(1,-1) + data.slice(-1).toUpperCase()).join(" "))
// Hello How Are You
// hellO hoW arE yoU
// HellO HoW ArE YoU




//rotate arr  output =[ 4, 5, 1, 2, 3 ]
// let arr = [1,2,3,4,5]
// let k = 2;
// function rotate(k){
// k = k%23
// let len = arr.length    

//    function reverse(arr,start,end){
//        while(start<end){
//            [arr[start],arr[end]] = [arr[end],arr[start]]
//            start++;
//            end--;
//        }
//    console.log(arr)
//    }
//    reverse(arr,0,len-1)
//    reverse(arr,0,k-1)
//    reverse(arr,k,len-1)
   
//    return arr
// }
// rotate(k)



// Majority Element (output 2)
// let arr =[3,2,3,2,2]
// let obj ={}
// function test(arr){
//     for(let i=0; i<arr.length; i++){
//         if(obj[arr[i]]){
//             obj[arr[i]] += 1
//         }
//         else{
//             obj[arr[i]]= 1
//         }
//         if(obj[arr[i]]>arr.length/2){
//             return arr[i]
//         }
//     }
// }
// console.log(test(arr))



// max and min (4,-5)
// let arr = [-2,1,-3,4,-1,2,1,-5,4]
// let max = arr[0]
// let min = arr[0]
// for(let i=1; i<arr.length; i++){
//     if(arr[i]>max) max = arr[i]
//     else if(arr[i]<min) min= arr[i]
// }
// console.log(max,min)


// Maximum subarray sum + print subarray
// let arr = [-2,1,-3,4,-1,2,1,-5,4]
// let curSum = arr[0];
// let maxSum = arr[0];
// let temp = 0;
// let start = 0;
// let end = 0;

// for(let i=1; i<arr.length; i++){
//     if(arr[i]>arr[i]+curSum){
//         curSum = arr[i]
//         temp = i
//     }else{
//         curSum += arr[i]
//     }
//     if(maxSum<curSum){
//         maxSum = curSum;
//         start = temp;
//         end = i
//     }
    
// }

// console.log(maxSum)
// console.log(arr.slice(start,end+1))



//return duplicate element 
// let arr = [1,1,2,2,3]
// let op = []
// let duplicate = []
// function duplicate(){
//   for(let i=0; i<arr.length;i++){
//     let flag = op.includes(arr[i])
//     if(!flag){
//     op.push(arr[i])
//     }else{
//     duplicate.push(arr[i])
//     }
//   }
//   return duplicate;
// }
// // duplicate()
// console.log('duplicate(): ', duplicate());


//op([1,2,3])
// let arr = [1,1,2,2,3]
// let output =  new Set(arr)
// console.log([...output])

// let arr = [1,1,2,2,3]
// let output = []
// for(let i=0; i<arr.length; i++){
//     let flag = output.includes(arr[i])
//     if(!flag){
//         output.push(arr[i])
//     }
    
// }

// console.log(output)


//Same remove duplicate elements
// let arr = [1,1,2,2,3]
// function unique(){
//   let output = new Set(arr)
//   console.log('output: ', [...output]);
// }
// unique()



// let arr = [1,1,2,2,3]
// let j =0

// for(let i=1; i<arr.length; i++){
//     if(arr[i]!==arr[j]){
//         j++
//         arr[j]=arr[i]
//     }
// }

// console.log(arr.slice(0,j+1))



//op(3a1b3a2c1d1e2s)
// let str= "AaABaaaccdess".toLowerCase();
// let output =""
// let count = 1
// let temp = str[1]

// for(let i=1; i<str.length; i++){
//     if(str[i]==temp){
//         count += 1 
//     }else{
//         output += count + temp
//         temp = str[i]
//         count=1
//     }
// }

// console.log(output + count + temp)


//op slidingwindow (13)
// let arr = [2,3,4,2,1,4,0,6,0,3,4,0,2,5];
// let windowSum = 0;
// let limit = 4;
// let maxSum = 0;
// function test(arr,limit){
    
//     for(let i=0; i<limit; i++){
//         windowSum += arr[i]
//     }
    
//     maxSum = windowSum;
    
//     for(let j=limit; j<arr.length; j++){
//         windowSum += arr[j] -arr[j-limit]
        
//         maxSum = Math.max(windowSum,maxSum)
//     }
    
//     return maxSum
    
// }

// console.log(test(arr,limit))



//op slidingwindow (13) with subArray
// let arr = [2,3,4,2,1,4,0,6,0,3,4,0,2,5];
// let limit = 4;

// let arr = [2,3,4,2,1,4,0,6,0,3,4,0,2,5];
// let limit = 4;

// function fourSum(){
//  let windowSum = 0;
//  let maxSum = 0;
//  let l = 0
//  let r = 0
//  let startIndex = 0;

//   for(let i=0; i<limit; i++){
//   windowSum += arr[i]
//  }
//   maxSum =  windowSum;
//   for(let j=limit; j<arr.length; j++){
//     windowSum = windowSum + arr[j] - arr[l]
//     l++;
//     if(windowSum>maxSum){
//       maxSum = windowSum;
//       startIndex = l
//     }
    
//   }
//   let subArray = arr.slice(startIndex,startIndex+limit)
//   return  {maxSum, subArray };
// }

// console.log(fourSum());




// let arr = [23,24,53,67,78,12,2,4,5]
// console.log(arr.reverse())
// console.log(arr.sort((a,b)=> b-a))

// reverse the string
// let str = "check the data"
// console.log(str.split("").reverse().join(" "))



// let arr = [23,24,53,67,78,12,2,4,5]
// let a  = arr.slice(-2)
// console.log(a)




// let arr = [23,24,53,67,78,12,2,4,5]
// let arr1 = [23,24,53,67,78,12,2,4,5]
// arr.splice(0,7,111)
// let a = arr1.slice(0,4)
// console.log(arr)
// console.log(a)
// console.log(arr1)


// let str = "test"
// console.log([...str].reverse().join(""))



// const arr = [1, 2, 3," ",{},[],"",undefined,null,0];
// arr.forEach((item) => {
//   console.log(item);
// })


// (function(){
//    console.log("hello") 
// })()




// op(1/ 2 /3 /1)
// function Parent(){
//     let count = 0;
//     return function (){
//         count++
//         return count;
//     }
// }

// let a = Parent()
// console.log(a())
// console.log(a())
// console.log(a())

// let a1 = Parent()
// console.log(a1())



// //max sum of array
// let arr = [-2,1,-3,4,-1,2,1,-5,4];
// let curSum = arr[0]
// let maxSum  = arr[0]
// let temp = 0;
// let start = 0;

// for(let i=1; i<arr.length; i++){
    
//     if(arr[i]>curSum+arr[i]){
//         curSum =arr[i]
//          temp = i
//     }else{
//          curSum +=arr[i]
//     }
//     if(maxSum<curSum){
//      maxSum = curSum;
//      start = temp;
//      end = i; 
//     }
    
// }

// console.log(maxSum)
// console.log(arr.slice(start,end+1))



// Kadane’s Algorithm
// //max sum of array with subarray
// let arr = [-2,1,-3,4,-1,2,1,-5,4];
// function maxSum(){
//   let curSum  = arr[0]
//   let maxSum = arr[0]
//   let start = 0
//   let end = 0
//   let temp = 0
//   for(let i=1; i<arr.length; i++){
//     if(arr[i]>curSum+arr[i]){
//       curSum = arr[i]
//       temp = i
//     }
//     else{
//       curSum += arr[i]
//     }
//     if(curSum>maxSum){
//       maxSum= curSum
//       start = temp;
//       end = i
//     }
//   }
//   let subArr = arr.slice(start,end+1)
//   return {maxSum,subArr}
// }
// console.log(maxSum());




// // element and its count
// let arr = [2,5,8,9,5,7,1,4,3,7,9,5,3,5,8,9,5,7,1,4,3,7,9,5,3]; 
// let obj = {}

// for(let i=0; i<arr.length; i++){
//     if(obj[arr[i]]){
//         obj[arr[i]] += 1
//     }else{
//         obj[arr[i]] = 1
//     }
// }

// console.log(obj)



// remove all zero atlast
// let arr = [1,4,2,0,8,0,0,1];
// let index =0

// for(let i=0;i<arr.length; i++){
//     if(arr[i] !== 0){
//     [arr[index],arr[i]] = [arr[i],arr[index]]
//     index++;
        
//     }
// }
// console.log('arr: ', arr);



// sort
// let arr = [12,43,45,21,36,76,73,23]
// for(let i=0; i<arr.length;){
//     if(arr[i]>arr[i+1]){
//        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//        if(i>0){
//            i--
//        }
//     }else{
//         i++
//     }
// }
// console.log(arr)



// two sum and three sum


// let arr = [2,7,11,15]
// let target = 9

// function test(){
// let obj = {}
// for(let i=0; i<arr.length; i++){
//     let temp = target - arr[i]
//     if(obj[temp]){
//         return [arr[i],temp]
//     }
//     else{
//         obj[arr[i]] =  true;
//     }
// }
// }

// console.log(test())




//three sum

// let arr = [2, 7, 11, 15, 3, 6];
// let target = 20;

// function test(){
// let obj = {}
// for(let i=0; i<arr.length; i++){
//     let temp = target - arr[i]
//    for(let j=0; j<arr.length; j++){
//     let temp2 = temp - arr[j]
//     if(obj[temp2]){
//         return [arr[i],temp2,arr[j]]
//     }
//     else{
//         obj[arr[i]] =  true;
//     }
// }
// }
// }

// console.log(test())






//missing number
// const arr = [1, 2, 4, 5];
// let n = 5
// let totalSum = (n *(n + 1))/2
// let curSum = 0;
// console.log(totalSum);
//  function missingNum(){
//   for(let i=0; i<arr.length; i++){
//    curSum += arr[i]
//   }
//   console.log("missing number is " , totalSum-curSum);
//  }
//  missingNum()


// common
// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
// let com = []
// for(let i=0; i<a.length; i++){
//   for(let j=0; j<b.length; j++){
//     if(a[i] == b[j]){
//       com.push(a[i])
//     }
//   }
// }
//  console.log('com: ', com);



// common with single loop
// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
// let com = []
// for(let i=0; i<b.length; i++){
//   let flag = a.includes(b[i])
//   if(flag) com.push(b[i])
//   }
//   console.log('com: ', com);


// find output
// console.log([] == 0);  //true
// console.log([0] == 0); //true
// console.log([1] == 1); //true

// console.log([] === 0);  // false
// console.log([0] === 0); // false
// console.log([1] === 1); // false




// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 17, 19, 25] 
// // output = [[1,2,3],[4,5,6],[7,8,9],[17,19,25]] n=3
// let n = 3;
// let output = []

// function test(){
//   let temp = []
//   for(let i=0; i<input.length;i++){
//     if(n>0){    
//       temp.push(input[i])
//       n--
//     }
//     else if(n==0){
//       output.push(temp)
//       n=2
//       temp=[input[i]]
//     }
//   }
//   output.push(temp)

// }
// test()
// console.log('output: ', output);




// Promise.allSettled() 
// Waits for ALL promises to resolve
// Fails fast if ANY promise rejects

// const b = Promise.resolve(2);
// const a = Promise.reject(112);
// const c = Promise.reject(132);
// const d = Promise.resolve(11);

// Promise.all([a, b, c, d])
//   .then(results => {
//     console.log(results); 
//   })
//   .catch(err => {
//     console.log(err);
//   })


// Promise.allSettled()

//  Waits for ALL promises to finish
//  Never rejects
//  Gives status of each promise



// const p1 = Promise.resolve(10);
// const p2 = Promise.reject("Error!");
// const p3 = Promise.resolve(30);


// Promise?.allSettled([p1, p2, p3])
//   .then(results => {
//     console.log(results);
//   });


// Promise.race()
// First promise to settle wins
// Can resolve OR reject

// const p1 = new Promise(res => setTimeout(() => res("Fast"), 100));
// const p2 = new Promise(res => setTimeout(() => res("Slow"), 500));
// const p3 = Promise.resolve(30);
// Promise.race([p1, p2, p3])
//   .then(result => console.log(result)); // "Fast"




// function Test(name){
//   this.name = name
//   // this.hello = function(){
//   //   return `hello ${name}`
//   // }
// }

// Test.prototype.hello =function(){
//     return `hello ${this.name}`
//   }


// let a =  new Test("Raja")
// console.log(a.hello());


// op [24,12,8,6]
// let arr = [1,2,3,4]
// let op = []
// for(let i=0; i<arr.length; i++){
//   let temp = 1
//   for(let j=0; j<arr.length; j++){
//     if(arr[i] !== arr[j]){
//       temp = temp * arr[j]
//     }
//   }
//   op.push(temp)
// }
// console.log(op);




// // op:  [ 24, 12, 8, 6 ]
// let arr = [1,2,3,4]
// let n = arr.length;
// let op = new Array(n).fill(1)
// let l = 1;
// let r = 1;
// for(let i=0; i<arr.length; i++){
//   op[i] *= l;
//   l *= arr[i];
//   op[n-i-1] *= r;
//   r *= arr[n-1-i]
// }
// console.log('op: ', op);



// function longestUnique(str){
// let set = new Set()
// let l = 0 ,max = 0;
// let start = 0;  
// for(let i=0; i<str.length; i++){
//   while(set.has(str[i])){
//     set.delete(str[l])
//     l++
//   }
//    set.add(str[i])
//    if (i - l + 1 > max) {
//       max = i - l + 1;
//       start = l; 
//     }
//   }

//   return str.slice(start, start + max);

// }

// console.log(longestUnique("abcabcbb"))
// console.log(longestUnique("pwwkew"));
// console.log(longestUnique("abrakadabra"));




// let arr = [2,3,4,2,1,4,0,6,0,3,4,0,2,5];
// let limit = 4;
// let windowSum = 0
// let max = 0
// let temp = 0

// for(let i=0; i<limit; i++){
//    windowSum += arr[i]
// }

// max = windowSum;

// for(let j=limit; j<arr.length; j++){
//    windowSum = windowSum -arr[j-limit]+ arr[j]
//    if(windowSum>max){
//     temp = j - limit +1
//      max=windowSum;

//    }
   
// }
// console.log(arr.slice(temp,temp+limit));
// console.log(max);



// function longestUnique(str) {
//   let set = new Set();
//   let left = 0, max = 0, start = 0;

//   for (let right = 0; right < str.length; right++) {
//     while (set.has(str[right])) {
//       set.delete(str[left]);
//       left++;
//     }

//     set.add(str[right]);

//     if (right - left + 1 > max) {
//       max = right - left + 1;
//       start = left;
//     }
//   }

//   return {
//     length: max,
//     substring: str.slice(start, start + max)
//   };
// }

// console.log(longestUnique("cqdbzqbcd"));
// console.log(longestUnique("abcabcebb"));


// maximum points you can obtain from cards
// let arr = [6,2,3,4,7,2,1,7,1] 
// let k = 4
// function test(arr){
// let sum = 0;
// let max = 0;
// let n = arr.length -1; 
//   for(let i=0; i<k; i++){
//    sum += arr[i]
//   }
//   max = sum;
//   for(let i=0; i<k; i++){
//     sum = sum - arr[k-1-i] + arr[n-i]
//     max = Math.max(sum, max)
//   }
//   return max;
// }
// console.log(test(arr));



// Kadane’s Algorithm

// //max sum of array with subarray?

// let arr = [-2,1,-3,4,-1,2,1,-5,4];
// function test(arr){
//   let curSum = arr[0]
//   let maxSum = arr[0]
// let temp =0
// let start = 0;
// let end = 0

// for(let i=1;i<arr.length;i++){
//   if(curSum +arr[i]<arr[i]){
//     curSum = arr[i];
//     temp = i;
//   }else{
//     curSum += arr[i];
//   }
//   if(curSum>maxSum){
//     maxSum = curSum;
//     start = temp;
//     end = i;
//   }
// }
// return {maxSum,subarray: arr.slice(start,end+1)}
// }

// console.log('test: ', test(arr));




//rotate array with k 

// let arr = [1,2,3,4,5]
// let k = 2;
// function rotate(arr,k){
//   let n = arr.length;
//   k = k% n;
//   function rotateArr(arr,start,end){
//     while(start<end){
//      [arr[start],arr[end]] = [arr[end],arr[start]]
//      start++;
//      end--;
//     }
//   }
//   rotateArr(arr,0,n-1)
//   rotateArr(arr,0,k-1)
//   rotateArr(arr,k,n-1)

//   return arr;
// }
// console.log(rotate(arr,k));


//[24,21,8,6]
// let arr = [1,2,3,4]
// let op = [] 
// function test(data){

// for(let i=0 ; i<data.length; i++){
//  let temp = 1;
//   for(let j=0 ; j<data.length; j++){  
//   if(data[i] !== data[j]){
//     temp *= data[j]
//   }
// }  
// op.push(temp)
// }
// return op;
// }

// // test([arr])
// console.log('test([arr]): ', test(arr));


let arr = [1,2,3,4]
let n = arr.length;
let op = new Array(n).fill(1) 
function test(){
let l = 1;
let r = 1;
for(let i=0 ; i<arr.length; i++){
   op[i] = op[i]*l;
    l =l* arr[i];
    
    op[n-1-i] *= r;
     r= r* arr[n-1-i]
  
  } return op;
}

// test([arr])
console.log('test([arr]): ', test());



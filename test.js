// function throttle(fn, limit) {
//   let fag = false;
//   return function(...arg){

//   if(!fag){
//     fn.apply(this, arg)
//     fag = true;
//     setTimeout(()=>{
//       fag = false;
//     },limit)
//   }
//     }
// }


// function testThrottle(text){
//   console.log("text",text)

// }

// const test = throttle(testThrottle,1000)

// test("first")
// test("first1")
// test("first2")
// test("first3")

// Debouncing ensures that a function runs only after a certain period of time has passed since the last event.

// Throttling ensures that a function executes at most once in a given time interval, no matter how many times the event occurs.


// let arr = [12,23,43,22,5,64,12,65,54]

// for(let i=0; i<arr.length-1;){
//   if(arr[i]<arr[i+1]){
//     [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//     if(i>0){
//       i--;
//     }
//   }else{
//     i++;
//   }
// }
// console.log('arr: ', arr[3]);

// let a = [12,23,43,22,5,64,12,65,54]
// let b= []
// // for(let i of a){
// //  b.unshift(i); 
// // }
// console.log(a.reverse());
// console.log('b: ', b);

// let a = "abcdefg"

// console.log([...a].reverse().join(''));

// let a = "Aaabbccd".toLowerCase();
// count = 1;
// let result = ""

// for(let i=0; i<a.length; i++ ){
//   if(a[i] == a[i+1]){
//     count += 1;
//   }
//   else{
//     result = result + a[i] + count;
//     count = 1;
//   }
// }
// console.log('result: ', result);



// let a = [{name:"test",age:32},{name:"test2",age:42},{name:"test3",age:12}]
// const [{name},{name:name2}] = a
// console.log(name2);

// let arr = [23,34,46,76,26,55,77,1,3,2,4,5]
// // console.log(arr.sort((a,b)=>b-a));
// console.log(arr.reverse());


// let a = "test"

// console.log([...a].reverse().join(""));

// let a = "hello"

// console.log([...a].reverse().join(''));



// let input = "AaaBbvVvwed".toLowerCase()
// let output = ""
// let count = 1;
// for(let i=0; i<input.length;i++){
//   if(input[i] == input[i+1]){
//     count += 1;
//   }else{
//     output = output + input[i] + count ;
//     count = 1;
//   }
// }

// console.log("output",output)



// let arr = [12,2,0,4,0,3,44,0,23];

// let index = 0; // position for non-zero

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     [arr[index], arr[i]] = [arr[i], arr[index]];
//     index++;
//   }
// }
// console.log(arr);



// let str = [12,43,45,21,36,76,73,23] 
// for(let i=0; i<str.length;){
//   if(str[i]>str[i+1]){
//     [str[i],str[i+1]] = [str[i+1],str[i]]
//     if(i>0){
//       i--;
//     }
//   }else{
//     i++;
//   }
// }
// console.log(str[1]);


// let str = [12,43,45,21,36,76,73,23,76] 
// let first = -Infinity
// let second = -Infinity
// let third  = -Infinity

// for(let i = 0; i<str.length; i++){
//   if(str[i]>first){
//     second = first;
//     first = str[i]
//   }else{
//     if(str[i]>second && str[i] !== first ){
//       third = second
//       second =str[i]
//     }
//       else{
//         if(str[i]>third && str[i] !== second && str[i] !== first){
//             third =str[i]
//         }
//       }
//   }
// }
// console.log('first: ', first);
// console.log('second: ', second);
// console.log('third: ', third);


// let str = [12,43,45,21,36,76,73,23,76] 
// let first = -Infinity
// let second = -Infinity
// let third  = -Infinity
// for(let item of str){
//   if(item > first){
//     [first, second, third]=[item, first, second ]
//   }else if(item > second && item !== first){
//     [second, third]=[item, second ]
//   }else if(item > third && item !== second && item !== first){
//     third = item;
//   }
// }
// console.log(first,second,third);


// let arr = [1,4,2,0,8,0,0,1];

// let index = 0

// for(let i = 0; i<arr.length; i++){
//   if(arr[i] !== 0){
//     [arr[index], arr[i]] = [arr[i], arr[index]]
//     index++
//   }
// }
// console.log('arr: ', arr);

//continous sub string that have sum 14
// let input = [1,1,2,2,3]
// let output = []

// for(let i=0;i<input.length;i++){
//   let flag = output.includes(input[i]) 
//   if(!flag){
//     output.push(input[i])
//   }
// }
// console.log('output: ', output);


// let arr = [1, 1, 2, 2, 3];

// let j = 0; // pointer for unique elements

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] !== arr[j]) {
//     j++;
//     arr[j] = arr[i];
//   }
// }
// console.log('arr: ', j);

// console.log(arr.slice(0, j + 1));

// let arr = [1, 1, 2, 2, 3];
// let set = new Set(arr)
// console.log([...set]);




//three sum
// let arr = [2,5,8,9,5,7,1,4,3,7,9,5,3]; 
// let target = 14;
// let obj ={}

// for(let i =0; i<arr.length;i++){
//   let temp = target - arr[i];
//   for(let j=i+1; j<arr.length;j++){
//     let temp2 = temp - arr[j];
//     if(obj[temp2]){
//       console.log([arr[i],temp2,arr[j]]);
//       break;
//     }
//     obj[arr[j]] =true; 
//   }  
// }


// element and its count
// let arr = [2,5,8,9,5,7,1,4,3,7,9,5,3,5,8,9,5,7,1,4,3,7,9,5,3]; 
// let obj = {}
// for(let i=0; i<arr.length; i++){
//   if(obj[arr[i]]){
//     obj[arr[i]] +=1; 
//   }else{
//     obj[arr[i]] =1;
//   }
// }
// console.log('obj: ', obj);

// let nums = [2,5,8,9,5,7,1,4,3,7,9,5,3]; 
// let target = 13;
// let o = nums.sort((a, b) => a - b); 
// console.log('o: ', o);

//max sum of array
// let arr = [-2,1,-3,4,-1,2,1,-5,4];
// let maxSum = arr[0];
// let currentSum = arr[0];

// for(let i=1;i<arr.length;i++){
//   currentSum = Math.max(arr[i],currentSum + arr[i])
//   maxSum = Math.max(maxSum,currentSum) 
// }
// console.log('maxSum: ', maxSum);


// let arr = [1,2,3,-2,5];
// let k = 5;
// let map = { 0: 1 }; 
// let sum = 0;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if (map[sum - k] !== undefined) {
//     count += map[sum - k];
//   }
//   map[sum] = (map[sum] || 0) + 1;
// }

// console.log("count:", count);


// // let arr = [2,5,8,9,5,7,1,4,3,7,9,5,3];
// let arr = [-1,0,1,2,-1,4]; 
// // let target = 14;
// let target = 0;
// let obj ={}
// // three sum
// for(let i =0; i<arr.length;i++){
//   let temp = target - arr[i];
//   for(let j=i+1; j<arr.length;j++){
//     let temp2 = temp - arr[j];
//     if(obj[temp2]){
//       console.log([arr[i],temp2,arr[j]]);
//       break;
//     }
//     obj[arr[j]] =true; 
//   }  
// }

//clousr
// function Test() {
//   count = 0
//   return function () {
//     count += 1;
//     return count
//   }
// } 


//iife
// (function(){
//   console.log("hello");
// })()


// let a = Test()
// console.log('a: ', a());
// let a1 = Test()
// console.log('a: ', a1());
// console.log('a: ', a());

// const arr = [1, 2, 3,"1",{},[],"",undefined,null,0];
// arr.forEach((item) => {
//   console.log(item);
// });

// const obj ={
//   name:"test",
//   age:32,
//   a: ()=>{
//     console.log("a",this.name);
//   },
//   b: function(){
//     console.log("b",this.name);
//   }
// }
// console.log(obj.a());
// console.log(obj.b());



// function test(){
//   console.log("test fn");
// }
// let test = () =>{
//   console.log("test arrow fn");
// }
// console.log(test());
// console.log(test());


// how we store the object in browser

// JSON.log() vs JSON.parse

// let obj = {a:12,b:21,c:23,d:25}
// console.log('obj: ', obj);
// let a = "string"

// console.log("obj",JSON.stringify(obj))

// let str = "test"
// console.log([...str].reverse().join(''))

// let arr = [21,43,3,54,2,56]
// console.log(arr.reverse());
// console.log(arr.sort((a,b)=>b-a));
// console.log(arr.slice(1,4));
// console.log(arr);
// console.log(arr.splice(0,0,12,23,54));
// console.log(arr);


// let str = "hajkfaioahfoa"
// console.log(str.slice(0,0,"d"));
// console.log(str);

// let output =""
// for(let i=0; i<str.length;i++){
//   output = str[i] + output
// }
// console.log('output: ', output);


//sliding window
// let arr = [2,3,4,2,1,4,0,6,0,3,4,0,2,5]
// let maxCount = 0;
// let windowCount = 0
// let limit = 4
// for(let i=0; i<limit; i++){
//   windowCount += arr[i]  
// }
// maxCount = windowCount;

// for(let j=limit;j<arr.length;j++){
//   windowCount = windowCount + arr[j] - arr[j-limit]
//   maxCount = Math.max(maxCount,windowCount)
// }

// console.log('maxCount: ', maxCount);


// let str= "AaABaaaccdess".toLowerCase()
// let output = ""
// let temp = str[0]
// let count = 1
// for(let i=1; i<str.length;i++){
//   if(temp == str[i]){
//     count++
//   }else{
//     output += count + temp;
//     temp = str[i]
//     count = 1;
//   }
// }
// console.log('output: ', output + count + temp);


// let arr = [12,2,0,4,0,3,44,0,23];
// let temp = 0;

// for(let i=0; i<arr.length;i++){
//   if(arr[i] !== 0){
//     [arr[i], arr[temp]] = [arr[temp],arr[i]]
//     temp++
//   }
// }
// console.log('arr: ', arr);


//  let arr = [12,43,45,21,36,76,73,23] 
 
//  for(let i=0; i<arr.length;){
//    if(arr[i]>arr[i+1]){
//      [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//      if(i>0){
//        i--;
//       }
//     }else{
//       i++
//     }
//   }
//   console.log('arr: ', arr);

// let arr = [12,43,45,21,36,76,73,23,76] 

// let firstHigh = -Infinity
// let secondHigh = -Infinity
// let thirdHigh = -Infinity

// for(let i =0; i<arr.length;i++){
//   if(arr[i]>firstHigh){
//     [firstHigh, secondHigh, thirdHigh] = [arr[i], firstHigh, secondHigh]
//   }else if(arr[i]>secondHigh && arr[i] !== firstHigh){
//     [secondHigh,thirdHigh]=[arr[i],secondHigh]
//   }else if(arr[i]>thirdHigh && arr[i] !== secondHigh && arr[i] !== firstHigh){
//     thirdHigh=arr[i]
//   }
// }


// console.log('firstHigh: ', firstHigh);
// console.log('secondHigh: ', secondHigh);
// console.log('thirdHigh: ', thirdHigh);




// let arr = [1,1,2,3,3,4,4,4,5]
// let output = []
// for(let i=0; i<arr.length; i++){
//   let flag = output.includes(arr[i])
//   if(!flag){
//     output.push(arr[i])
//   }
// }
// console.log('output: ', output);


// let arr = [1, 1, 1,2, 2, 3];

// let j = 0; // pointer for unique elements

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] !== arr[j]) {
//     j++;
//     arr[j] = arr[i];
//   }
// }
// console.log('arr: ', arr.slice(0,j+1));



// let arr = [4, 2, 9, 1, 5]
// //Output: max = 9, min = 1
// let max = arr[0];
// let min = arr[0];
// for(let i=1; i<arr.length; i++){
//   if(arr[i]>max){
//     max = arr[i]
//   }else if (arr[i]<min){
//     min = arr[i]
//   }
// }
// console.log('max: ', max);
// console.log('min: ', min);


// let arr = [2,7,11,15]
// let target = 9
// let obj ={};

// for(let i=0; i<arr.length; i++){
//     let check = target - arr[i]
//     if(obj[check]){
//      console.log([check,arr[i]])
//      break;
//     }
//     obj[arr[i]] = true;
// }


// let arr = [1,1,2,2,3]
// let out = []
// for(let i=1; i<arr.length; i++){
//   let flag = out.includes(arr[i])
//   if(!flag){
//     out.push(arr[i])
//   } 
// }
// console.log('out: ', out);


// let arr = [1,1,2,2,3]
// let j = 0;
// for(let i=1; i<arr.length;i++){
//   if(arr[i] !== arr[j]){
//     j++;
//     arr[j] = arr[i]
//   }
// }
// console.log(arr.slice(0,j+1));

// // asc order
// let arr = [1,2,3,4]
// function check(){
//   for(let i=0; i<arr.length-1; i++){
//     if(arr[i]>arr[i+1]){
//       console.log("check12");
//       return false
//     }
//   }
//   return true
// }

// console.log('check: ', check());



// // Maximum subarray sum + print subarray
// let arr = [-2,1,-3,4,-1,2,1,-5,4]
// let curSum = arr[0]
// let maxSum = arr[0]
// let start = 0
// let end = 0
// let temp = 0

// for(let i=1; i<arr.length; i++){
//   if(arr[i]>curSum+arr[i]){
//     curSum = arr[i]
//     temp = i
//   }
//   else{
//     curSum += arr[i]
//   }
//   if(curSum>maxSum){
//     maxSum = curSum
//     start = temp
//     end = i
//   }
//   // curSum = Math.max(curSum+arr[i],arr[i])
//   // maxSum = Math.max(curSum,maxSum)
// }
// console.log(maxSum);
// console.log(arr.slice(start,end+1));




// 10. Majority Element
// Element appearing more than n/2 times
// function majorityElement(nums) {
//  let map = {}
//   for(let i=0; i<nums.length; i++){
//     if(map[nums[i]]){
//       map[nums[i]] += 1;
//     }else{
//       map[nums[i]] = 1;
//     }
//     if(map[nums[i]] >nums.length/2){
//       return nums[i]
//     }
//   }
// }

// console.log(majorityElement([3,2,3,2,2]));






// //only for logic ,hardcoding indexes
// let input = [1,2,3,4,5]
// // // k=2 
// // // Output: [4,5,1,2,3]

// let a = input.reverse()
// function test(){
//   [a[0],a[1]] =[a[1],a[0]]
//   [a[2],a[3],a[4]] = [a[4],a[3],a[2]]
//   console.log(a);
// }
// test()




// let arr =[2,5,1,7,1,0,2,1]
// let k = 14;
// let l=0;
// let r=0
// let sum=0;
// let max=0;
// let n=arr.length;
// let subarr = [];
 
// while(r<n){
//     sum = sum + arr[r]
//     while(sum>k){
//         sum = sum - arr[l]
//         subarr.shift(arr[l])
//         l++
//     }
   
//     if(sum<=k){
//         subarr.push(arr[r])
//         max =Math.max(max,r+1-l);
//     }
//     r++;
// }
// console.log('max: ', max); 
// console.log('subarr: ', subarr);



// // Rotate right by k
// let input = [1,2,3,4,5]
// function check(nums,k){
//   let len = nums.length
//   k = k%len
//   console.log('k: ', k);
//   function reverse(arr,start,end){
//    while(start<end){
//     [arr[start],arr[end]]=[arr[end],arr[start]]
//     start++;
//     end--;
//    }   
//   }
//   reverse(nums,0,len-1)
//   reverse(nums,0,k-1)
//   reverse(nums,k,len-1)
// return nums
// }

// console.log(check(input,7))






// console.log(undefined+[]+null);



//longest subarray sum is 14 as will as its subarray
// let arr =[2,5,1,7,1,0,2,1]
// let k = 14;
// let max = 0;
 
// for(let i=0; i<arr.length; i++){
//   let sum =0;
//   for(let j=i; j<arr.length; j++){
//     sum += arr[j]
//     if(sum<=14){
//       max = Math.max(max,j-i+1)
//     }else{
//       break;
//     }
//   }
// } 
// console.log("max", max);




//longest subarray sum is 14 as will as its subarray
//two pointer TC=o(n+n)  SC=o(1)
// let arr =[2,5,1,7,1,0,2,1]
// let k =14;
// let l = 0;
// let r = 0;
// let sum = 0;
// let maxSum = 0;
// let array = [];
// while(r<arr.length){
//   sum += arr[r]
//   while(sum>k){
//     sum = sum -arr[l]
//     array.shift(arr[l])
//     l++
//   }
//   if(sum<=k){
//     array.push(arr[r])
//     maxSum = Math.max(maxSum,sum)
//   }
//   r++
// }
// console.log('array: ', array);
// console.log('maxSum: ', maxSum);





// let str ="hello how are you";
// console.log(str.split(" ").map(data=> data.charAt(0).toUpperCase() + data.slice(1)));
// let str = "hello how are you";
// console.log('str: ', str.split(" ").map(data => data.charAt(0).toUpperCase()+ data.slice(1,-1) + data.slice(-1).toUpperCase()))
// let result = str
//   .split(" ")
//   .map(word => word.slice(0, -1) + word.slice(-1).toUpperCase())
//   .join(" ");
// let result =  str.split(' ').map(data=> data.slice(0,-1) + data.slice(-1).toUpperCase())
// console.log("result",result);



// class Car{
//   constructor(name){
//     this.name = name
//   }
//   static abc(x){
//     return "hello " + x.name;
//   }
// }
// const car = new Car("BMW")
// console.log('car.abc(): ', Car.abc(car));



// const arr = [1, 2, 4, 5];
// let n = 5;
// let expectedSum = (n * (n + 1)) / 2;
// let actualSum = 0;
// for (let num of arr) actualSum += num;
// console.log("Missing:", expectedSum - actualSum);



// common element
// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
// const res = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a[i] == b[j]) res.push(a[i]);
//   }
// }
// console.log(res);




// let arr = [1,2,3,4]
// // op [24,12,8,6]
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



// let arr = [1,2,3,4];
// let total = 1
// let op = []
// for(let i=0; i<arr.length; i++){
//   total *= arr[i]
// }
// for(let i=0; i<arr.length; i++){
//   op.push(total / arr[i])
// }
// console.log('op: ', op);




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



// Check:  3a2b1c 
// function Check(str){
//   let count = 1;
//   let res = ""
//   for(let i=1; i<=str.length; i++){
//     if(str[i] === str[i-1]){
//     count++
//   }
//   else{
//     res += count+str[i-1]
//     count=1
//   }
// }
// return res;
// }
// console.log('Check: ', Check("aaabbc"));




// function longestUnique(s){
//   for(let i=0; i<s.length; i++){
//   }
// }
// console.log(longestUnique("abcabcbb"))



// let arr =[2,5,1,7,1,0,2,1]
// let k =14;
// let l =0
// let r=0
// let sum = 0;
// let max = 0;
// let index = 0
// for(let i=0; i<arr.length; i++){
//   sum = sum + arr[i];
//   while(sum>k){
//    sum = sum -arr[l];
//    l++;
//   }
//   if(sum == k){
//       max =Math.max(max,r+1-l);
//       index = l
//     }
//     r++;
// }
// let subarr = arr.slice(index, index + max);
// console.log('subarr: ', subarr);




// maximum points you can obtain from cards
// let arr = [6,2,3,4,7,2,1,7,1] 
// let k = 4;
// let lsum = 0;
// let rsum = 0;
// let maxSum = 0;
// let n = arr.length;

// for(let i=0; i<=k-1; i++){
//   lsum = lsum +arr[i];
//    maxSum = lsum;
//   }
// let right = n-1
// for(let i=k-1; i>=0; i--){
//   lsum = lsum -arr[i];
//   rsum = rsum + arr[right]
//   right--
//   console.log('maxSum: 11', maxSum);
//   maxSum = Math.max(maxSum ,lsum + rsum) ;
// }
// console.log('maxSum: ', maxSum);




//longest sub string with repeating charactors
// let str =  "cadbzabcd"

// function longestUnique(str) {
//   let set = new Set()
//   let l =0;
//   let max =0;
//   let start =0;
//   for(let i=0; i<str.length; i++){
//     while(set.has(str[i])){
//        set.delete(str[l])
//        l++;
//       }
//     set.add(str[i])
//     if(i-l+1>max){
//       max = i-l+1;
//       start = l;
//     }
//   }
//   return {substring: str.slice(start, start + max)}
// }

// console.log('longestUnique: ', longestUnique(str));


// let obj = {"o":12,"k":23,"j":34,"l":45,"p":56}
// let o = JSON.stringify(obj)
// console.log(JSON.stringify(obj));
// console.log(JSON.parse(o));
console.log();
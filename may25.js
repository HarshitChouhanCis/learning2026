// // prime number
// let a = 23;

// function testPrime(a){
//   if(a <= 1) return "it is not prime"
//   for(i=2; i<a/2; i++){
//     if(a%i == 0){
//       console.log("it is not prime");
//       return
//     }
//   }
//   console.log("it is prime");
// }
// testPrime(a)

//------------------------------------------------------------------------

// let s = "cbbd"
// // // Output: "bb"
// let op= ""

// for(let i=0; i<s.length; i++){
//  for(let j=i; j<s.length; j++){
//   let temp = s.slice(i,j);
//   let check = temp.split('').reverse().join('')
//   if(temp == check && temp.length>op.length){
//     op = check
//   }
// } 
// }
// console.log(op);

//------------------------------------------------------------------------


// let arr = [1,2,3,4]
// let op = []
// let a = arr.reduce((acc,cur)=>acc* cur,1)
// for(let i=0; i<arr.length; i++){
//   op.push(a/arr[i])
// }
// console.log(op);

//------------------------------------------------------------------------


// //longest subarray sum is 14 as will as its subarray
// //two pointer TC=o(n+n)  SC=o(1)
// let arr =[2,5,1,7,1,0,1,0,2,1]
// let l = 0;
// let r = 0;
// let count = 0;
// let temp = 0
// let num = 14;
// let start = 0
// for(let i = 0; i<arr.length; i++){
//   count += arr[i]
//   while(count > num){
//     count  -= arr[l]
//     l++
//   }
//   if(count == 14){
//     start =l
//     end = i 
//   }

// }

// console.log('arr.slice(start,end): ', arr.slice(start,end+1));

//------------------------------------------------------------------

// // maxCount
// let arr = [2,3,4,2,1,4,0,6,0,3,4,0,2,5];
// let limit = 4;
// let slidingCount = 0;
// let maxCount = 0;

// function test(){

//   for(let i=0; i<limit; i++){
//   slidingCount += arr[i]   
//   }
//   maxCount = slidingCount;
//   for(let i=limit; i<arr.length; i++){
//   slidingCount += arr[i] -arr[i-limit]  
//   maxCount = Math.max(maxCount,slidingCount)
//   }
//   console.log("maxCount",maxCount);
// }

// test()

//----------------------------------------------------------------------

// let arr = [-2,1,-3,4,-1,2,1,-5,4]
// let l = 0
// let count = arr[0]
// let maxCount = arr[0];
// let start = 0;
// let end = 0;
// let temp = 0;
// function test(){
//   for(let i=1;i<=arr.length;i++){
//       if(arr[i]>arr[i]+ count){
//         count = arr[i];
//         console.log();
//         temp = i;
//       }else{
//         count = arr[i] + count;
//       }
//       if(maxCount<count){
//         start = temp;
//         end = i;
//         maxCount = Math.max(maxCount,count)
//       }
//     }   
//     console.log(arr.slice(start,end+1));
//  return maxCount;
// }

// console.log(test());

//---------------------------------------------------------------


// let str = "hello world"
// console.log(str.split(" ").map((item)=> item.slice(0,1).toUpperCase()+item.slice(1)).join(" "));

//---------------------------------------------------------------
// let a = "hello"
// console.log(a.split("").reverse().join(''));
//---------------------------------------------------------------

// let a = "h e l l o"
// console.log(a.split(" ").reverse().join(''));

//---------------------------------------------------------------
// let obj ={ a:undefined}
// if(obj.a){
//   console.log("hello");
// }else{
//   console.log("no hello");
// }
//---------------------------------------------------------------

// function countVC(str){
// let vowels = "aeiou"
// let v=0,c=0;
// for(let i of str){
//   vowels.includes(i) ? v++: c++
// }
// return {v,c}
// }
// console.log(countVC("hello"))
//----------------------------------------------------------------

// function test(str){
//   let set = new Set()
//   let l = 0;
//   let count = 0;
//   for(let i=0; i<str.length; i++){
//     while(set.has(str[i])){
//       set.delete(str[l])
//       l++
//     }
//     set.add(str[i])
//     if(i+1-l>count){
//       count = i-l+1;
//       end = i
//     }
//   }
//   return str.slice(end+1-count,end+1)
// }
//  console.log('longestUnique: ', test("abcabcxbb"));

//--------------------------------------------------------------------

// function firstUnique(str){
//   let obj = {};
//   for(let i=0; i<str.length;i++){
//     obj[str[i]] = (obj[str[i]]||0) +1
//   }
//   for(let i=0; i<str.length; i++){
//     if( obj[str[i]] ==1)return str[i]
//   }

// }
// console.log(firstUnique("aabbcde"))
//-------------------------------------------------------------

// console.log([] !== []);
// console.log([] == []);
// console.log({} !== {});
// console.log({} == {});
// console.log(NaN !== NaN);
// console.log(NaN == NaN);
// console.log("" !== "")
// console.log(0 !== 0);
// console.log(null !== null);
// console.log(undefined !== undefined);

//-------------------------------------------------------------
// console.log('undefined: ', typeof undefined);
// let a = [1,2]
// let b = a
// console.log('b: ', b);
// let c = [...a]
// console.log('c: ', c);

//-------------------------------------------------------------

// let obj = {"o":12,"k":23,"j":34,"l":45,"p":56}
// let o = JSON.stringify(obj)
// console.log(JSON.stringify(obj));
// console.log(JSON.parse(o));

//-------------------------------------------------------------
// function Check(str){
//   let op = "";
//   let count = 1;
//   for(let i=1; i<str.length+1; i++){
//    if(str[i] == str[i-1]){
//     count++
//    }else{
//     op += count + str[i-1]
//     count = 1
//    }
//   }
//   return op;
// }
// console.log('Check: ', Check("aaabbc"));

//----------------------------------------------------------------

// // op:  [ 24, 12, 8, 6 ]
// let arr = [1,2,3,4]
// let op =[]
// function test(arr){
// let temp = arr.reduce((cur,acc)=> cur*acc,1)
// for(let i of arr){
//   op.push(temp/i)
// }
// return op
// }
// console.log(test(arr)); 

//------------------------------------------------------------------

// let arr = [1,2,3,4];
// let l=1;
// let r=1;
// function test(){
//  let n = arr.length
//  let op = new Array(n).fill(1)
//  for(let i=0; i<arr.length; i++){
//   op[i]*= l;
//   l*=arr[i];
//   op[n-i-1]*= r;
//   r*=arr[[n-i-1]] 
//  } 
//  return op
// }

// console.log('test(): ', test());

//-----------------------------------------------------------------

// common element
// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
// let op = []
// function testCommon() {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] == b[j]) {
//         op.push(a[i])
//       }
//     }
//   }
//   return op

// }

// console.log('testCommon(): ', testCommon());
//------------------------------------------------------------------


// const arr = [1, 2, 4, 5];
// let n = 5;
// let expSum = (n *(n+1))/2;
// let curSum = arr.reduce((cur,acc)=> cur+acc,0)
// console.log("miss num", expSum-curSum);

//------------------------------------------------------------------

// // Rotate right by k
// let input = [1,2,3,4,5]
// let k = 2
// let n = input.length;
// function Rotate(){
//   function reverse(start,end,arr){
//     while(start<end){
//       [arr[start],arr[end]] = [arr[end],arr[start]]
//       start++;
//       end--;
//     }
//   }
//   reverse(0,n-1,input)
//   reverse(0,k-1,input)
//   reverse(k,n-1,input) 

//   return input
// }
// console.log("Rotate",Rotate());
//--------------------------------------------------------------------
// function majorityElement(nums){
//   let map = {}
//   for(let i=0; i<nums.length; i++){
//     if(map[nums[i]]){
//       map[nums[i]] += 1;
//     }else{
//       map[nums[i]] = 1;
//     }
//     if(map[nums[i]] >nums.length/2){
//       return nums[i]
//     }
// }
// }
// console.log(majorityElement([3,2,3,2,2]));

//--------------------------------------------------------------------

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
//---------------------------------------------------------------------
// let arr = [1,1,2,2,3]
// let j = 0;
// for(let i=1; i<arr.length;i++){
//   if(arr[i] !== arr[j]){
//     j++;
//     arr[j] = arr[i]
//   }
// }
// console.log(arr.slice(0,j+1));
// console.log(arr);

//--------------------------------------------------------------------

// let arr = [2,5,8,9,5,7,1,4,3,7,9,5,3]
// let target = 14

// function test(arr){
//   let temp = 0;
//   let temp2 = 0;
//   let obj={};

// for(let i=0;i<arr.length; i++){
//   temp = target - arr[i]
//   for(let j=i+1; j<arr.length; j++){
//     temp2 = temp-arr[j]
//     if(obj[temp2]){
//       return [arr[j],temp2,arr[i]]
//     }
//     obj[arr[j]] = true
//   }
// }
// }
// console.log(test(arr));

//------------------------------------------------

// let arr = [4, 2, 9, 1, 5,0 ]
// // //Output: max = 9, min = 1
// let max = arr[0];
// let min = arr[0]; 
// function test(){
//   for(let i=1; i<arr.length; i++){
//     if(max<arr[i]){
//        max = arr[i]
//     }else if(min>arr[i]){
//       min = arr[i]
//     }
//   }
//   return {max,min}
// }
// // test()
// console.log('test(): ', test());

//-----------------------------------------------------

// let arr = [1, 1, 1,2, 2, 3];
// let op = []
// for(let i=0; i<arr.length; i++){
//   if(!op.includes(arr[i])){
//     op.push(arr[i])
//   }
// }
// console.log(op);

//-------------------------------------------------------
// let arr = [1, 1, 1,2, 2, 3];
// let j = 0;
// for(let i=1; i<arr.length; i++){
//   if(arr[j] !== arr[i]){
//     j++;
//     arr[j] = arr[i]
//   }
// }
// console.log(arr.slice(0,j+1));

//-------------------------------------------------------

//first ,sec,thirt higest
// let arr = [12,43,45,21,36,76,73,23,76] 
// let first = -Infinity;
// let sec = -Infinity;
// let third = -Infinity;

// for(let i=0; i<arr.length; i++){
//   if(first<arr[i]){
//     [first,sec,third]=[arr[i],first,sec]
//   }else if(sec<arr[i] && first !== arr[i]){
//     [sec,third]=[arr[i],sec]
//   }else if(third<arr[i] && first !== arr[i] && sec !== arr[i]){
//     third=arr[i]
//   }
// }
// console.log(first,sec,third);

//-----------------------------------------------------------

// let arr = [12,43,45,21,36,76,73,23] 

// for(let i=0;i<arr.length;){
//   if(arr[i]>arr[i+1]){
//     [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//     if(i>0){
//       i--;
//     }
//   }else{
//     i++
//   }
// }

// console.log(arr);

//--------------------------------------------------------------

// let arr = [12,43,45,21,36,76,73,23] 

// console.log(arr.sort((a,b)=>b-a));

//--------------------------------------------------------------

//remove zero at last
// let arr = [1,4,2,0,8,0,0,1];
// let index = 0;

// function test(){
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] !== 0){
//      [arr[index],arr[i]]=[arr[i],arr[index]]
//      index++;
//     }
//   }
//   return arr
// }
// console.log(test());
//------------------------------------------------------------------

//gautam
// const arr1=[1,2,3,4];
// const arr2=[3,4,5,6];
// (function(){
//   let a =[]
//   for(let i=0; i<arr1.length;i++){
//     if(arr1.includes(arr2[i])){
//       a.push(arr2[i])
//     }
//   }
//   console.log(a);
// })()

//--------------------------------------------------------------------

// let keys = ["name","age","city","gender"];
// let value = ["Jhon",23,"delhi"]
// let op ={}
// function test(){
//   for(let i=0;i<keys.length;i++){
//    op[keys[i]] = value[i] 
//   }
//   console.log(op);
// }
// test()

//--------------------------------------------------------------------

//Find Longest Word  Output: "javascript"
// let input = "I love javascript"
// let op= ""
// function test(){
//     let len = 0
//     let temp = input.split(' ')
//    for(let i=0; i<temp.length; i++){
//        if(len <temp[i].length){
//          op =temp[i]   
//        }
//    }
//    return op
// }
// console.log(test())

//-----------------------------------------------------------------------
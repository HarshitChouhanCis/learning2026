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


// function Test() {
//   count = 0
//   return function () {
//     count += 1;
//     return count
//   }
// } 

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

let obj = {a:12,b:21,c:23,d:25}
console.log('obj: ', obj);
let a = "string"

console.log("obj",JSON.stringify(obj))
// function test(){
//   var a= 12
//   return {
//     get : ()=> a,
//     set : (value)=> a = value
//   };
// }

//  a =14

// let tes = test()

// console.log(tes.get());
// tes.set(121)
// console.log(tes.get());




// async function test() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }
// console.log("C");
// test();
// console.log("D");




// console.log("A");
// setTimeout(()=>{
//   console.log("C");
// },[])
// queueMicrotask(() => {
//   console.log("D");
// });
// console.log("B");




// 1. Call Stack (Synchronous code)
// 2. Microtask Queue
//    - Promise.then
//    - queueMicrotask
//    - MutationObserver
// 3. Macrotask Queue
//    - setTimeout
//    - setInterval
//    - setImmediate
// Synchronous > Microtask > Macrotask





// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");
// });

// queueMicrotask(() => {
//   console.log("4");
// });

// console.log("5");

// setTimeout(() => {
//   console.log("6");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("7");
// });

//  1 ,5, 3, 4, 7 , 2 , 6


// Number.isNaN(value)
// console.log(parseInt("hello"));


// let obj = {a:0}
// console.log(obj.a = 0);
// console.log("1", obj.a || 45);
// console.log("2", obj.a ?? 45);

// ?? only check ,null,undefined

// console.log(0 || "A");
// console.log("" || "B");
// console.log(false || "C");

let arr = [1,2,3,4,5]
function rotatedArray(arr ,n){
let len = arr.length;
let rot = n % len
 function rotate(start,end){
  while(start<end)
    [start,end] = [end,start]
    start++
    end--
 }
 rotate(0,len-1)
 rotate(0,n-1)
 rotate(n,len-1)
 return arr
}

// rotatedArray(arr,2)
console.log('rotatedArray(arr,2): ', rotatedArray(arr,2));


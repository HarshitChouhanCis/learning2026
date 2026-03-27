// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello() {
//     return "Hello!!";
//   }
// }

// const myCar = new Car("Ford");

// // You can call 'hello()' on the Car Class:
// Car.hello();
// console.log('Car-hello', Car.hello());


// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello(x) {
//     return "Hello " + x.name;
//   }
// }
// const myCar = new Car("Ford");
// console.log('myCar:', Car.hello(myCar));



// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello(x) {
//     return "Hello " + x.name;
//   }
// }
// const myCar = new Car("Ford");
 
//  console.log(Car.hello(myCar));


// const userObj = {
//     about : function(){
//         return `${this.firstName} is ${this.age} year old`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName,lastname,age,email,address){
//     const user = {}; //9:43:33
//     user.firstName = firstName;
//     user.lastname = lastname;
//     user.age = age;
//     user.about = userObj.about;
//     user.is18 = userObj.is18;
//     // user.about = function(){
//     //     return `${this.firstName} is ${this.age} year old`
//     // }
//     // user.is18 = function(){
//     //     return this.age >= 18;
//     // }
//     return user;
// }

// const userData = createUser("hhh","sad",22,"","")
// // console.log(typeof(userData.about))

// console.log(createUser.prototype);
// console.log(createUser("ghg","ftyfty",56,"k","gh"))
// console.log(createUser("ghg","ftyfty",56,"k","gh"))
// console.log(createUser("ghg","ftyfty",56,"k","gh"))
// console.log(createUser("ghg","ftyfty",56,"k","gh"))

// console.log(userData.about())


// let aa = [3,3,54,4,3,21,4,23,46,23,4,23,5]

// const a =aa.reduce((acc,cu)=>{
//     if(acc[cu]){
//         acc[cu]= acc[cu] +1;
//     }else{
//         acc[cu]=1
//     }
//     return acc;
// },{})


// console.log(a);

// const arr = [3, 3, 4, 3, 21, 4, 23, 46, 23, 4, 23, 5];
// const target = 7;

// function twoSumWithoutMethods(nums, target) {
//   const seen = {}; // manually use an object as hashmap

//   for (let i = 0; i < nums.length; i++) {
//     const current = nums[i];
//     const complement = target - current;

//     // check if complement exists in 'seen'
//     if (seen[complement] !== undefined) {
//       console.log("Pair found:", current, complement);
//       // return [current, complement]; // stop after finding first pair
//     }

//     // console.log("seen",seen);
//     // mark current number as seen
//     seen[current] = i;
//   }
// }

// twoSumWithoutMethods(arr, target);




// const arr = [3, 3, 4, 3, 21, 4, 23, 46, 23, 4, 23, 5];
// const target = 7;

// function findPairs(arr, target) {
//   let numbers = {}; // store visited numbers

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     // console.log('num:', num); 
//     let needed = target - num; // the number we need to make sum = target
//     console.log('needed:', needed);

//     if (numbers[needed]) {
//         console.log('numbers:', numbers);
//       console.log("Pair found:", num, needed);
//     }

//     // store the current number
//     numbers[num] = true;
//   }
// }

// findPairs(arr, target);


// const arr = [3, 3, 4, 3, 21, 4, 23, 46, 23, 4, 23, 5];
// const target = 7;

// function chechTest(arr,target){
//   let map = {}
//   for(let num of arr){
//     let temp = target - num;
//     if(map[temp]){
//       return [temp,num]
//     }
//     map[temp] = true
//   }
// }
// // chechTest(arr,target)
// console.log('chechTest(arr,target): ', chechTest(arr,target));




// const arr = [4,2,3,5,6,1,1,3,4,5,6,4,2,4,5,3,6,5,4,6,8];

// const target = 13;

// function findPair(arr, target) {
//  let numbers ={}

//  for(let i=0; i<arr.length;i++){
//    let num = arr[i]
//    let needed = target -num;

//    if(numbers[needed]){
//     console.log("pair number is",needed ,num );
//    }
//    numbers[num]=true;
//  }


// }

// findPair(arr,target)




// const arr = [1,2,3];
// let a = arr.map((a)=>{

//   console.log('a:', a*2);
// })


// let target = 7;


// const arr = [4, 2, 3, 5, 6, 1, 1, 3, 4, 5, 6, 4, 2, 4, 5, 3, 6, 5, 4, 6, 8, -9];

// let max = arr[0]; 
// let min = arr[0]; 

// for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] > max) {
    //     max = arr[i];
    //   }
    
    //   if (arr[i] < min) {
      //     min = arr[i];
      //   }
      // }
      // console.log('max:', max);
      // console.log('min:', min);
      
      
// let aar = [2,3,5,4,3,4,3,5,2,3,5,2,1,6,4,5,4,2]
// let arr=[];
// for(let i=aar.length-1; i>=0; i--){
//   arr.push(aar[i])
//   console.log('aar[i]:', aar[i]);
// }

// console.log("arr",arr);



// let aar = [2,3,5,4,3,4,3,5,2,3,5,2,1,6,4,5,4,2]
// function test(){

//   for(let i=1; i<aar.length; i++){
//     if(aar[i]<aar[i-1]){
//       return false;
      
//     }return true;
//   } 
// }

// console.log('test():', test());


// let aar = [2,3,5,4,3,4,3,5,2,3,5,2,1,6,4,5,4,2,-8,9,7];

// let first = -Infinity;
// let sec = -Infinity;

// for(let i of aar){
//   if(i>first){
//     sec = first;
//     first = i;
//   }else if(i>sec && i!=first){
//     sec = i;
//   }
// }

// console.log('first:', first);
// console.log('sec:', sec);


// const arr = [3, 3, 2, 1, 3];
// const freq = {};
// for (let num of arr) {
//   freq[num] = (freq[num] || 0) + 1;
// }
// console.log(freq);

// let arr = [1, 2, 3, 4];
// let sum = 0;
// for (let num of arr) sum += num;
// console.log(sum);



// let arr = [0, 1, 0, 3, 12];
// let pos = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) [arr[i], arr[pos++]] = [arr[pos], arr[i]];
// }
// console.log(arr);



// let arr = [2, 0, 1, 0, 3, 12];
// let pos = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     let temp = arr[i];
//     arr[i] = arr[pos];
//     arr[pos] = temp;
//     pos++;
//   }
// }

// console.log(arr)


// let arr = [2, 0, 1, 0, 3, 12];
// Move all zeros to the end
// let pos = 0;


// for(let i=0; i<arr.length; i++){
//     if(arr[i] !== 0){
//         let temp = arr[i];
//         arr[i] = arr[pos]
//         arr[pos] =temp
//         pos++;
//     }
// }
// console.log('arr:', arr);


// Missing Number problem ✅
// const arr = [1, 2, 4, 5];
// let n = 5;
// let expectedSum = (n * (n + 1)) / 2;
// let actualSum = 0;
// for (let num of arr) actualSum += num;
// console.log("Missing:", expectedSum - actualSum);




// let arr = [2, 0, 1, 0, 3, 12,0];

// let pos = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] !==0){
//         let temp = arr[i] 
//         arr[i] = arr[pos]
//         arr[pos] =temp;
//         pos++
//     }
    
// }
// console.log('arr:', arr);



// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];
// const res = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a[i] === b[j]) res.push(a[i]);
//   }
// }
// console.log(res);



// const arr = [4,2,3,5,6,1,1,3,4,5,6,4,2,4,5,3,6,5,4,6,8];
// const target = 13;
// function findPair(arr, target) {
//  let numbers ={}
//  for(let i=0; i<arr.length;i++){
//    let num = arr[i]
//    let needed = target -num;
//    if(numbers[needed]){
//     console.log("pair number is",needed ,num );
//    }
//    numbers[num]=true;
//  }



// let arr = [2, 0, 1, 0, 3, 12,0];
// let pos =0;
// for(let a = 0; a<arr.length; a++){
//     if(arr[a] !== 0){
//         let temp = arr[a]
//         arr[a]= arr[pos];
//         arr[pos] =temp;
//         pos++;
//     }
// }
// console.log('arr:', arr);


// const arr = [4,2,3,5,6,1,1,3,4,5,6,4,2,4,5,3,6,5,4,6,8];
// let obj ={};

// for(let i = 0; i <arr.length; i++){
//     obj[arr[i]]? obj[arr[i]] += 1 : obj[arr[i]] = 1
// }
// console.log('obj:', obj);



// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const merged = [];
// console.log('merged:', merged.length);
// for (let i = 0; i < arr1.length; i++) {
//   merged[merged.length] = arr1[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//   merged[merged.length] = arr2[i];
// }
// console.log(merged); // [1, 2, 3, 4, 5, 6]



// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const merged = [...arr1,...arr2];
// console.log('merged:', merged);



// What is Prototype?
// Prototype in JavaScript is a mechanism through which objects can inherit properties and methods from other objects.
// Every JavaScript object has a hidden property called [[Prototype]] (accessible using __proto__ or Object.getPrototypeOf()).

// // function Test(name){
//   this.name = name;
// //     this.hello=function(){
// //     console.log(`hi hi hi hi hu hu hu hu hu ${this.name}`)
// //     return `hi hi hi hi hu hu hu hu hu ${this.name}`
// //    }  
// }
// Test.prototype.hello = function(){
//     console.log(`hi hi hi hi ${this.name}`)
// }
// const ab = new Test("raja")
// console.log('ab:', ab.hello());
// // ab()


// function hello(name){
//   this.name =  name;
// }

// hello.prototype.one= function(){
//   console.log(`hello ${this.name}`);
// }

// const obj1 = new hello("raj")

// obj1.one()



// function abc(){
//     let count = 0;
//     function Inc(){
//         count +=1
//         return count
//     }
//     return Inc
// }
// let ab = abc();
// console.log('ab():', ab());
// console.log('ab():', ab());
// console.log('ab():', ab());
// console.log('ab():', ab());
// console.log('ab():', ab());


// (function(name){
//     console.log(`name is ${name}`);
// })("harshit");



// Debouncing ensures that a function runs only after a certain period of time has passed since the last event.

// Throttling ensures that a function executes at most once in a given time interval, no matter how many times the event occurs.

// Hydration is the process where React attaches event listeners and makes static HTML interactive after it has been rendered on the server.


// let arr = [45,89,77,12,2,1,6,4,98,27]


// // console.log(arr.sort());

// for(let i=1; i<=arr.length;i++){
//    for(let j=0; j<arr.length-i;j++){

//        let temp;
//        if(arr[j]<arr[j+1]){
//            temp = arr[j]
//            arr[j] = arr[j+1]
//            arr[j+1]= temp
//         }
//     }
// }

// console.log(arr);


//sort single loop
// let arr = [45,89,77,12,2,1,6,4,98,27]

//    for(let j=0; j<arr.length;j++){

//        let temp;
//        if(arr[j]>arr[j+1]){
//            temp = arr[j]
//            arr[j] = arr[j+1]
//            arr[j+1]= temp
//            j = -1;
//         }
    
// }

// console.log(arr);





// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 17, 19, 25] 
// // output = [[1,2,3],[4,5,6],[7,8,9],[17,19,25]] n=3
// let output = [] 



// let n = 3
// let arr=[];
// for(let i=0; i<input.length; i++){
//     if(n>0){
//         arr.push(input[i])
//         n=n-1;
//     }

//     if(n == 0){
//         output.push(arr)
//         arr=[]
//         n=3
//     }
  
// }

// console.log('output:', output);


// debouncing

// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }


// function dedounce(text){
// console.log("text",text)
// }


// const debouncedSearch = debounce(dedounce, 500);

// debouncedSearch("h")
// debouncedSearch("he")
// debouncedSearch("hel")
// debouncedSearch("hell")
// debouncedSearch("hello")


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

// setTimeout(()=>{
//   test("first4")
// },2000)


//curring
// function add(a){
//   return function(b){
//     return a+b;
//   }
// }

// console.log(add(5)(2))

// const curring = a => b => a*b;
// const double = curring(2);
// const triple = curring(3);
// console.log(double(5),triple(5));



// Promise.allSettled() 
// Waits for ALL promises to resolve
//Fails fast if ANY promise rejects

// const a = Promise.reject(112);
// const b = Promise.resolve(2);
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

// Promise.allSettled([p1, p2, p3])
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
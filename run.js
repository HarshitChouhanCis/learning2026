// let s = "cbbd"
// let op = ""
// for(let i=0; i<s.length;i++){
//   for(let j=i; j<s.length; j++){
//     let temp = s.slice(i,j)
//     let rev = temp.split('').reverse().join('')
//     if(temp == rev && temp.length>op.length){
//       op = temp;
//     }
//   }
//   console.log(op);
// }

//-------------------------------------------------------

//group by object by property

// const people =[{name:"alibaba",age: 21},
//   {name:"baba",age: 21},{name:"tunnu",age:23}];
//   let op = {} 
// function test(){
//   for(let i=0; i<people.length; i++){
//       if(!op[people[i].age]){
//         op[people[i].age] = []
//       }
//         op[people[i].age].push(people[i])
//   }
//   return op
// }

// console.log(test());

//------------------------------------------------------------

// missing Number
// let arr =[1,2,3,4,5,7]
// function test(){
//  let n = arr.length+1;
//  let totalSum = n*(n+1)/2
//  let curSum = arr.reduce((acc,cur)=> acc+cur,0)
//  return totalSum-curSum;
// }
// console.log(test());

//--------------------------------------------------------------

//convert array to obj with keys is index
// let arr = [1,2,3,4,5]
// let op = {}
// function test(){
//   for(let i=0; i<arr.length; i++){
//     op[i]= arr[i]
//   } return op
// }
// console.log(test());
//-----------------------------------------------------------------

// //longest subarray sum is 14 as will as its subarray
// let arr =[2,5,1,7,1,0,1,0,2,1]
// let k = 14
// let count = 0;
// let l = 0;
// let end = 0;
// let start = 0;
// function longestSub(){
//   for(let i=0; i<arr.length; i++){
//     while(count>k){
//       count-= arr[l]
//       l++
//     }
//     count += arr[i]
//     if(count == k){
//       start = l 
//       end = i         
//     }
//   }
//  return arr.slice(start,end+1);
// }

// console.log(longestSub());

//-------------------------------------------------------------

// let arr = [-2,1,-3,4,-1,2,1,-5,4]
// let count = arr[0]
// let l=0
// let max = arr[0]
// let start = 0
// let end = 0
// function test(){
// for(let i=1; i<arr.length; i++){
//   if(arr[i]>arr[i]+count){
//      count = arr[i]
//      l=i
//   }else{
//     count += arr[i]
//   }
//   if(max<count){
//     max = count;
//     start = l
//     end = i 
//   }
// }
// console.log(max);
// return arr.slice(start,end+1)

// }
// // test()
// console.log('test(): ', test());
//------------------------------------------------------------------

// function test(str){
//   let l=0
//   let count = 0
//   let set = new Set();
//   let start = 0;
//   let end = 0;
//   for(let i=0; i<str.length; i++){
//     while(set.has(str[i])){
//       set.delete(str[l])
//       l++
//     }
//     set.add(str[i])
//     if(i+1-l>count){
//       count = i+1-l
//       start = l
//       end = i
//     }
//   }
//   return str.slice(start,end+1)
// }

// console.log('longestUnique: ', test("abcabcxbb"));

//-------------------------------------------------------

// let arr = [12,43,45,21,36,76,73,23] 

// function test(){
//   for(let i=0; i<arr.length;){
//     if(arr[i]>arr[i+1]){
//       [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//       if(i>0){
//         i--
//       }
//     }else{
//       i++
//     }
//   }
//   return arr;
// }
// // test()
// console.log('test(): ', test());

//-------------------------------------------------------------


// let arr = [1,2,3,4,5]
// let k=2

// function test(){
//     let n = arr.length;
//  function rotate(arr,start,end){
//      while(start<end){
//          [arr[start],arr[end]]=[arr[end],arr[start]]
//          start++;
//          end--;
//      }
//  }
//  rotate(arr,0,n)
//  rotate(arr,0,k)   
//  rotate(arr,k,n)
//  return arr
// }

// console.log(test())

//----------------------------------------------------------------

//convert object into array where keys and value pair in array
// let obj = { name:"jhon", age:23, city:"delhi"}
// let arr = [];
// for(let keys in obj){
//     arr.push([keys,obj[keys]])
// }
//     console.log(arr)

//------------------------------------------------------------------


//Remove the falsy value from arr
// let arr = [0,1,false,2,"",3,null,undefined];
// let arr1=[]
// function remove(){
// arr.forEach((item)=>{
//  if(item){
//     arr1.push(item)
//  }}
// )
//     return arr1
// }
// console.log(remove())

//------------------------------------------------------------------

//Remove the falsy value from arr
// let arr = [0,1,false,2,"",3,null,undefined];
// function remove(){
// let arr1 = arr.filter((item)=>{
//   console.log(item)
//    return item
//  }
// )
//     return arr1
// }
// console.log(remove())

//---------------------------------------------------------------

// Trapping Rain Water 
// Calculate water stored between bars

let arr = [0,1,0,2,1,0,1,3,2,1,2,1];
let n = arr.length;
let leftArr = new Array(n);
let rightArr = new Array(n);
let totalWater = 0;

function test(){
  leftArr[0] = arr[0];
  rightArr[n-1] = arr[n-1];
  for(let i=1;i<arr.length; i++){
    leftArr[i]= Math.max(arr[i],leftArr[i-1]);
  }
    console.log('rightArr: ', rightArr);
   for(let i=n-2;i>= 0; i--){
    rightArr[i]= Math.max(arr[i],rightArr[i+1]);
  }
  console.log('rightArr: ', rightArr);
  for(let i = 0; i < n; i++) {
    totalWater += Math.min(leftArr[i],rightArr[i])-arr[i];
  }
  return totalWater;
}

console.log(test())

//-------------------------------------------------------------------
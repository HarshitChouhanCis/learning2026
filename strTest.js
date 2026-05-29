// Hello World
// let a= "hello world"
// console.log(a.split(" ").map((i)=>i.slice(0,1).toUpperCase() + i.slice(1)));





// Input: "hello"
// Output: "olleh"
// let str = "hello"
// console.log([...str].reverse().join(" "));|


// function reverseStr(str) {
//   let res = ""
//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i]
//   }
//   return res
// }


// let a = "h e l l o"
// console.log(a.split(" ").join(''));


//  v: 2, c: 3
// function countVC(str){
//   let vowels = "aeiou"
//   let v =0 , c =0;
//   for(let i=0; i<str.length;i++){
//     if(vowels.includes(str[i])){
//       v++
//     }else{
//       c++
//     }
//   }
//   return {v,c} 
// }


// console.log(countVC("hello"))


// First Non-Repeating Character (c)
// function firstUnique(str){
//   let obj = {}
//   for(let i=0; i<str.length; i++){
//     obj[str[i]] = (obj[str[i]] || 0) + 1;
//   }

//     for (let ch of str) {
//     if (obj[ch] === 1) return ch
//   }
//   return null;
// }
// console.log(firstUnique("aabbcde"))



// Anagram Check
// function isAnagram(s,t){
//  let obj ={}
//  for(let i of s){
//   obj[i] = (obj[i] || 0) + 1;
//  }
//  for(let j of t){
//   if(!obj[j]) return false;
//   obj[j]--
//  }
//  return true
// }
// console.log(isAnagram("listen", "silents"))



// let obj ={ a:0}
// if(obj.a){
//   console.log("hello");
// }else{
//   console.log("no hello");
// }



//longest sub string with repeating charactors
// function test(str){
// let set = new Set();
// let l = 0
// let max = 0
// let start = 0
// for(let i =0; i<str.length; i++){
//   while(set.has(str[i])){
//    set.delete(str[l]);
//    l++;
//   }
//   set.add(str[i])
//   if( i-l+1>max){
//     max = i-l+1;
//     start = l 
//   }
// }
//  return {subString:str.slice(start,start+max)}
// }

// console.log('longestUnique: ', test("abcabcxbb"));






// First Non-Repeating Character (c)
// function firstUnique(str){
//   let obj = {}
//   for(let i=0; i<str.length; i++){
//      obj[str[i]] = (obj[str[i]]||0)+1
//   }
//   for(let i of str){
//     if(obj[i] == 1) return i
//   }
// }
// console.log(firstUnique("aabbcde"))




// function isAnagram(a, b) {
//   let obj = {}
//   for (let i = 0; i < a.length; i++) {
//     obj[a[i]] = (obj[a[i]] || 0) + 1
//   }
//   for (let i = 0; i < b.length; i++) {
//     if (obj[b[i]]) {
//       obj[b[i]] -= 1
//     }else{
//       return false
//     }
//   }return true;
// }

// console.log(isAnagram("listen", "silent"))


// function reverse(data){
// return [...data].reverse().join('')
// }

// console.log(reverse("aabbcde"))



// function count(str){
//   let count = 1;
//   let op =""
//  for(let i =1; i<=str.length; i++){
//   if(str[i] == str[i-1]){
//     count ++
//   }else{
//     op += count + str[i-1]
//     count = 1
//   }
//  }
//  return op;
// }
// console.log('count("aabbcde"): ', count("aabbcde"));


// function count(str){
//  let count = 1;
//  let op = ""

//   for(let i =1 ; i<str.length; i++){
//     if(str[i] == str[i-1]){
//       count ++
//     }else{
//       op += count + str[i-1]
//       count = 1
//     }
//   }
//   return op
// }

// console.log('count("aabbcde"): ', count("aabbcde"));


// op:  [ 24, 12, 8, 6 ]
// let arr = [1,2,3,4]
// let n = arr.length;
// let op = new Array(n).fill(1)
// let l = 1;
// let r = 1;
// for(let i=0; i<n; i++){
//   op[i] *= l;
//   l = arr[i]*l;
//   op[n-1-i] *= l;
//   r =arr[n-1-i]*r;
// }
// console.log(op);


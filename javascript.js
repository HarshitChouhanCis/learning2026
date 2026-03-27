// let a = "hello"
// let reverse =""
// function Test(data){
//   for(let i of data){
//       reverse = i + reverse
//   }
// }
// Test(a)



// let a = "Aaabbrrrrooab"
// let b 
// let count = 0
// let temp ;
// for(let i of a){
//  if(temp !== ""){ if(temp !== i.toLocaleLowerCase()){
//        if(b){  
//          b = b + temp + count;
//     }  else{
//       b = temp + count;
//     }   
//   }}else{
//     temp = i.toLocaleLowerCase()
//   }
//   if(temp == i.toLocaleLowerCase()){
//      count += 1;
//   }
//   else{
//     temp = i.toLocaleLowerCase()
//     count = 1
//   }
// }
// console.log(b);




// let a = "Aaabbrrrrooab".toLocaleLowerCase()
// let result=""
// let count = 1 
// for (let i = 0; i < a.length; i++) {
//   if(a[i] == a[i+1])
//   {
//    count = count +1;
//   }
//   else{
//        result = result + a[i] + count;
//        count = 1;
//   }
// }
// console.log(result);




// let a = "madam"
// let b = ""
// for(let i of a){
//   b = i + b
// }

// let a = "JavaScript".toLowerCase();
// let result = 0
// for(let i of a){
//   if("aeiou".includes(i)){
//     result +=1
//   }
// }
// console.log('result: ', result);


//remove the duplicate value
// let str = "programming";
// let result = "";
// for(let i of str){
//   if(!result.includes(i)){
//     result = result + i
//   }
// }
// console.log('result: ', result);


// let str = "abcabcbc";

// let max =0;

// for(let i=0; i<str.length; i++){
//   let temp = "";
//   for(let j=i; j<str.length; j++){
//     if(temp.includes(str[j])){
//       break;
//     }
//     temp = temp + str[j];
//   }
//   if(temp.length>max)
//   { max = temp.length

//   }

// }
// console.log(max);

// let haystack = "hello";
// let check = "ll"
// console.log(haystack.indexOf(check))


// let a = "ABCD";
// let b = "CDAB";

// console.log((a + a).includes(b));

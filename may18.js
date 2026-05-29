

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// var addTwoNumbers = function(l1, l2) {
//   let num1 = Number(l1.reverse().join(""))
//   let num2 = Number(l2.reverse().join(""))
//   let re = num1 + num2
//  return re.toString().split("").reverse().map((item)=> Number(item))
// };

// // addTwoNumbers()
// console.log('addTwoNumbers(): ', addTwoNumbers([2,4,3],[5,6,4]))


// let arr = [2,4,5]
// console.log( Number(arr.reverse().join('')))


//-----------------------------------------------------

// var findMedianSortedArrays = function(nums1, nums2) {
//   let arr = [...nums1,...nums2]
//   let n =  arr.length;
//   let m = Math.floor(n/2)
//   if(n%2 !== 0){
//     return arr[m]
//   }else{
//     return (arr[m]+arr[m-1])/2
//   }

// };



// console.log(findMedianSortedArrays([2,2,4,4],[2,2,2,4,4]));

// var lengthOfLongestSubstring = function(s) {
//     let set = new Set()
//     let max = 0;
//     let start = 0;
//     let l = 0;                                                                                                                                                                                                                                                                          
//     for(let i=0; i<s.length; i++){
//       while(set.has(s[i])){
//        set.delete(s[l])
//        l++
//       }
//       set.add(s[i])

//     if(i+1-l>max){
//       max = i+1-l
//       start = l
//     }
//   }
//   return s.slice(start,start+max)
// };
// console.log(lengthOfLongestSubstring("abcabcbb"));


// var longestPalindrome = function(s) {

//     if (s.length < 2) return s;

//     let start = 0;
//     let maxLength = 0;

//     function expand(left, right) {

//         while (
//             left >= 0 &&
//             right < s.length &&
//             s[left] === s[right]
//         ) {
//             left--;
//             right++;
//         }

//         let length = right - left - 1;

//         if (length > maxLength) {
//             maxLength = length;
//             start = left + 1;
//         }
//     }

//     for (let i = 0; i < s.length; i++) {

//         // Odd palindrome
//         expand(i, i);

//         // Even palindrome
//         expand(i, i + 1);
//     }

//     return s.substring(start, start + maxLength);
// };


var longestPalindrome = function(s) {
 let longestPalingrome  = "";
  if(s.length <= 2){
    return s
  }
 for(let i=0; i<s.length; i++){
  for(let j=i+1; j<=s.length; j++){
    let sub = s.slice(i,j)
    let reverse = sub.split('').reverse().join('')
    if(sub == reverse && sub.length > longestPalingrome.length){
      longestPalingrome = sub;
    }
  }
 }
 console.log(longestPalingrome);
  return longestPalingrome;
};
console.log('longestPalindrome("oabac"): ', longestPalindrome("sc"));


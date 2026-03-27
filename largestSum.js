let arr = [2,5,1,7,10];
let k = 14;

let l = 0;
let r = 0
let sum = 0;
let count = 0;

while(r<arr.length){
  sum += arr[r]
  while(sum > k){
    sum -=arr[l];
    l++;
  }

  count = Math.max(count,r + 1 -l)
  r++;
}

console.log("count",count,"sum",sum);
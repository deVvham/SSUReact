const arr = [1, 2, 3];
const sliced = arr.slice(2);   //2 ~ 끝까지
console.log(sliced); //[3]

const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.slice(-1));  //[5] 끝에서 1개
console.log(arr2.slice(-2));  //[4, 5] 끝에서 2개

const sliced2 = arr2.slice(0, 2);  //start ~ end-1 추출
console.log(sliced2);
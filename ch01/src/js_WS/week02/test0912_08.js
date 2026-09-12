const arr = [1,2,3,4,5]
let i = 0;
while(true) { //무한루프, while(조건식)
    if(arr[i++] % 2 === 0) break;
}
console.log(i);
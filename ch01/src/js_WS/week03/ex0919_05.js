function cb(item, i) { console.log(`${i}번째 요소: ${item}`); }
const arr0 = [1, 2, 3, 4]; //배열 생성
arr0.forEach(cb);

function determine(item) { if (item % 2 === 0) { return true; } else {return false; } }
let index = arr0.findIndex(determine);
console.log(index);  //3

let arr = [{ name: "권현지" }, { name: "권보리" }, { name: "가나디" }];
let element = arr.find((item) => item.name === "권보리");  
console.log(element);  //{name: '권보리'}

let filteredArr = arr.filter((item) => item.name.startsWith("권")); //권씨만 추출
console.log(filteredArr);

let newArr = arr0.map((item) => item * 3);
console. log(newArr);  //[3, 6, 9, 12]
console.log(arr0.join());  //하나의 문자열로 반환(기본 , 로 연결) 1, 2, 3, 4
console.log(arr0.join("*"));  //1*2*3*4

let result = arr0.reduce( (acc, item) => acc + item, 0); //데이터 누적 합
console.log(result); //10
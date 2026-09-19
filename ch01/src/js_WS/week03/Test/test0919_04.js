let person = {
    name: "권현지",
    age: 26, 
    location: "인천"
};

const keyArr = Object.keys(person); //Object.keys는 객체 프로퍼티의 key를 배열로 반환함
console.log(keyArr); //['name', 'age', 'location']
for (let key of keyArr) { //for..of문으로 객체를 순회하면, for문보다 더 간결한 코드를 작성할 수 있음
    let value = person[key];
    console.log(key, value);
}
const valueArr = Object.values(person);
console.log(valueArr);

//in 오른쪽에 있는 객체에서 프로퍼티의 key를 하나씩 순서대로 변수에 저장함
for (let key in person) {
    const value  = person[key];
    console.log(key, value);
}
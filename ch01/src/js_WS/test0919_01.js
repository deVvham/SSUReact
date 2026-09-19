let person = {  //객체 생성
    name: "이정환",
    age: 25, 
    sayHi: function () { console.log("안녕"); },
};

console.log(person.b);  //undefined
if("name" in person) console.log(person.name);
else console.log("name 속성 없음");
person.sayHi();  //객체의 메서드 호출
console.log(person) //객체의 참조 출력
//console.log(JSON.stringify(person))  //객체의 내용 출력
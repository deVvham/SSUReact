//객체 생성
let person = { name: "이정환", age: 25, "like cat": true};

//삽입(추가)
person.gender = "male";
let keyName = "email";
person[keyName] = "abc@test.com";
console.log(person.gender);
console.log(person["email"]);
console.log(person[keyName]);

//수정
person.name = "치삼";
person["age"] = 5;
console.log(person);

//삭제
delete person.gender;
delete person["age"];
console.log(person);
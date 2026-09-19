const varA = 0;
const varB = "권현지";

const resultA = varA || varB; //varA는 falsy, varB는 truthy한 값이기 때문에 || 연산의 결과 varB의 값인 "권현지"를 resultA에 저장
const resultB = varA ?? varB; //varA와 varB에서 첫 번째로 확정된 값은 varA의 0이므로 이 값을 resultB에 저장

console.log(resultA);
console.log(resultB);

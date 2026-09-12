//스코프(범위) 실습
let uName = '권현지';
let age = 22;
const age2 = 25;
{
    let age = 33;
    const age2 = 35;
    console.log('uName* ' + uName); //권현지
    console. log('age* ' + age); //33
    console.log('age2* ' + age2); //35
}
console.log('uName ** ' + uName); //권현지
console.log('age** ' + age); //22
console.log('age2** ' +age2); //25
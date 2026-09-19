let objA = { a: 1, b: 2 };
let objB = { ...objA, c: 3, d: 4 }; //개별요소로 분해

console.log(objB);  //{a: 1, b: 2, c: 3, d: 4}

function func(a, b, c) { console.log(a, b, c); }
let arr = [1, 2, 3];
func(...arr);  //개별요소로 분해

function func2(param, ...rest) { //개별요소를 묶어줌(...rest)
    console.log(param);   //1
    console.log(rest); //[2, 3, 4]
}    
func2(1, 2, 3, 4);

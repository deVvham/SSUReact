function funDouble(num, callback) { 
    setTimeout(() => {
        const doubleNum = num * 2; //20
        callback(doubleNum);
    }, 1000);
}

funDouble(10, result => { console.log(result); });
//funDouble 호출, 1초 뒤 20 출력

console.log("비동기");
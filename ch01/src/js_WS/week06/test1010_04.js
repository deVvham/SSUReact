const prom = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            resolve("성공");
            reject("실패");
        }, 2000);  //2초 후 작업 완료(비동기)
    }
);

prom.then(function(res) { console.log(res);});
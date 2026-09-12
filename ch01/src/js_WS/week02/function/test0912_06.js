function parentFunc(callBack) {
    //매개변수 callBack에는 함수 childFunc이 저장
    console.log("parent"); 
    callBack();
}

function childFunc() {
    console.log("child");
}

parentFunc(childFunc);
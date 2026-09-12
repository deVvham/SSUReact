let greeting = (name) => {
    let greetingText = `hello ${name}`;
    return greetingText;
};

console.log(greeting("권현지"));
///////////////////////////////////
let isConfirm = true;
function confirm(onYes, onNo) {
    if (isConfirm) onYes();
    else onNo();
}
confirm( () => console.log("승인"), () => console.log("거부") );
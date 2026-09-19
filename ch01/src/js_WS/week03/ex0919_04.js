const cart = [
    { name: "사과", price: 3000, quantity: 2 },
    { name: "바나나", price: 2000, quantity: 3 },
    { name: "포도", price: 5000, quantity: 1 } 
];

//총 가격
let total = 0;
for(let i = 0; i < cart.length; i++) {
    let itemTotal = cart[i].price * cart[i].quantity;
    console.log(cart[i].name + "총 가격: ", itemTotal);
    total += itemTotal;
}
console.log("전체 금액: ", total)

//배송비
if (total >= 20000) {
    console.log("무료배송");
} else {
    console.log("배송비 3,000원 추가");
}

//수량 2개 이상
const cnt = cart.filter(item => item.quantity >= 2);
console.log("2개 이상 상품: ", cnt);

//상품 추가 함수
function addItem(name, price, quantity) {
    cart.push({  name, price, quantity });
}
addItem("딸기", 4000, 2);
console.log("추가 후: ", cart);
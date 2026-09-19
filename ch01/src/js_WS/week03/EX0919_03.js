const products = [
    { name: " 노트북", price: 1000000 },
    { name: "마우스", price: 20000 },
    { name: "키보드", price: 50000 }
];

//1. 총 가격
let total = 0; 
for(let i = 0; i < products.length; i++) {
    total += products[i].price;
}
console.log("총 가격: ", total);

//2. 50,000이상 배열 생성(index 활용)
const expensive = []; let idx = 0;
for (let i = 0; i < products.length; i++) {
    if(products[i].price >= 50000) {
        expensive[idx] = products[i];
        idx++;
    }
}
console.log("고가 상품: ", expensive);

//3. 마우스가격 수정
for (let i = 0;i < products.length; i++) { 
    if (products[i].name === "마우스") { 
        products[i].price = 25000;
    }
}
console.log("수정 후 목록: ", products);
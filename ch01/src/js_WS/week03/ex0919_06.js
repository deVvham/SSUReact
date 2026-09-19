const users = [
    { id: 1, name: "현지", age: 26, active: true },
    { id: 2, name: "", age: 4, active: false },
    { id: 3, name: "보리", age: 60, active: true },
]

const result = users
.map(user => ({
    ...user,
    name: user.name || "이름없음"
}))
.filter(user => user.active && user.age >= 20)
.map(user => user.name);

console.log(result);
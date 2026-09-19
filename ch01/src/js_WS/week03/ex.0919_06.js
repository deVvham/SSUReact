function login(user) {
    if(!user) return "사용자 정보 없음";
    if(!user.name) return "이름 필요";
    return "로그인 성공";
}

console.log(login(null));
console.log(login({}));
console.log(login({ name: "현지" }));
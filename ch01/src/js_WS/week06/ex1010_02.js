function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { name: "철수", active: true},
                { name: "영희", active: false},
                { name: "민수", active: true}
            ]);
        }, 1000);
    });
}

fetchUsers().then((users) => {
    const activeUsers = users.filter(user => user.active);
    const names = activeUsers.map(user => user.name);
    console.log("활성 사용자:", names);
});
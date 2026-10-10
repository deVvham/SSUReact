function func1( { name, age, location } ) {  
    console.log(name, age, location);
}

function func2( { name: n, age: a, location: l } ) {
    console.log(n, a, l);
}

let person = {
    name: "권현지",
    age: 26,
    location: "인천"
};
func1(person);
func2(person);
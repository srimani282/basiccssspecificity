// var let and const

var a = 10;
var a = 11;

console.log(a)

let b = 20;
b = 23;

console.log(b)

const c = 30;

console.log(c)

const obj = {name : "Sri Mani", role: "Dev" } 
//location : bangalore
obj = {name : "Sri Mani", role: "Dev", location: "Bangalore" }

obj["location"] = "Bangalore"
console.log(obj)

var a = 45;

function fn(){
    let a = 20;
    if(true){
        let a = 30;
        console.log(a)
    }
    console.log(a)
}

fn()


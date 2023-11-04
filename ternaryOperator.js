
var a = 8;

if(a == 10){
    console.log("inside if")
}else if(a == 8){
    console.log("inside else if")
}else{
    console.log("inside else")
}

a == 10 ? console.log("inside if") : 
a == 8 ? console.log("inside else if") : 
console.log("inside else")

a == 10 ? console.log("inside if"): a == 8? console.log("inside else if") : console.log("inside else")
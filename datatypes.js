//primitive
//number
//boolean
//string
//undefined
//null

//non-promitive
//objcets
    // Array
    // Object
    // Date

var a = 10
var b = "srimani"
var c = true
var d ;
var e = null

var f = [2,3,5,6,7,"dev"]
var g = {
            name : "Sri",
            role : "dev"
        }
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)
// console.log(typeof g)
// var key = "role"
// console.log(f[4])
// console.log(f.length)
// // console.log(g["role"])
// console.log(g[key])

var num = 10
var num2 = 20
var str = " hello "

console.log(num+num2+str)
console.log(str+num+num2)

function fn(a,b,c){
    return a + " " +b + " " +c
}

 var val = fn("Sri", "Mani", "B");
 console.log(val)

 var fn2 = (a,b)=>{
    return a+b
    // console.log("fn2 arrow exectuing")
 }
 var fn3 = (a,b) => a+b

 console.log(fn2(10,20))
 console.log(fn3(40,30))
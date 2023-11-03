//...

var ar = [1,2,3,4,5,77]

var ar3 = [65,85,858,858,373]

var ar2 = [...ar,...ar3]

ar[3] = "changed"

// console.log(ar)
// console.log(ar2)




var obj = {name : "The fit coder", role:"full stack"}
var obj3 = { name:"Sri",address: "bangalore" , isWorking:true}

var obj2 = {...obj, ...obj3, name:"Ashok"}

obj["name"] = "Sri Mani"

// console.log(obj)
// console.log(obj2)

//Destructuring

var numArr = [34,5,6,788,5,6]
var [num2,num3,...restArr] = numArr;
var num = numArr[3]
// console.log(num2,num3,restArr)


var val = {name : "The fit coder", role:"full stack"}
// var name = val.name
// var role = val.role
var {name,role} = val
console.log(name,role)




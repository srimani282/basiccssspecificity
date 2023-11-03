//

for (var i = 1; i <= 20; i++) {

    if( i%2 == 1){
        // console.log(i)
    }
    // console.log("loop"+i)
}
// console.log("done")

var ar = [74,84,84,9499,849]

var len = ar.length
// console.log(len)

for(var i = 0; i < len; i++){
    // console.log(ar[i])
}

var returnAr = ar.map((el,i)=>{
    // console.log(el,i)
    return el + 4
})

// console.log(returnAr)

var returnArr = ar.forEach((el,i)=>{
    // console.log(el,i)
    return el
})
// console.log(returnArr)

        //[74,84,84,9499,849]

        var sum = ar.reduce((prev,el)=>{
            console.log(prev,el)
            return prev+el
        },0)
        console.log(sum)
ar.push("new val")
var ind = ar.indexOf(9499)
console.log(ar) 

var obj = {name : "Sri", role:"dev", location : "Bangalore"}

for (key in obj){
    console.log(key, obj[key])

} 

var keyAr = Object.keys(obj)
console.log(keyAr)
//var in term of hoisting
console.log(x) //undefined
var x
console.log(x) //undefined until initialization

//function in term of hoisting
myfunc()

function myfunc()
{
    console.log("function can be accessible before initialization in terms of hoisting")
}

//let & const in term of hoisting
//console.log(y) //reference error
let y
console.log(y) //undefined

//const must be assign with a value
// console.log(z) //error
// const z //error
// console.log(z) //error
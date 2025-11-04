//== comparison operator(compare if values are equal)
//=== strictly equal operator(compare if values & data types are equal)
// != enequality
// !== strictly inequality operator

//using == operator
const pi=3.14

if(pi=="3.14"){
    console.log("This is pi")
}
else{
 console.log("This is not pi")
}

const pi2=3.1416
//=== 
if(pi2==="3.1416"){
    console.log("This is not pi")
}
else{
 console.log("This is  pi")
}

// https://dorey.github.io/JavaScript-Equality-Table/

// unexpected behavior
val1=5
val2='9'
//explicit conversion
sum = val1 + val2
//output 59 instead of 14
console.log(sum)

//implicit conversion
sum2 = val1 + Number(val2)
//output 14
console.log(sum2)

num1 = "14"
//num2 = Number(num1)
num2 = 14

if(num1==num2){
    // unexpected behavior
    console.log("both are equal")
}

else{
//     if(num2==num3){
  console.log("both are not equal")
// }
}

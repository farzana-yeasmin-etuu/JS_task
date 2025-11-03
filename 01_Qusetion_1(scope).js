//var,let & const difference in term of global scope
// var ,let & const declared in global scope can be accessible from any scope 
var global_var = "this is a global variable 1"
let global_let = "this is a global variable 2(let)"
const global_const  = "this is a global variable 3(const)"

function myfunc(){
    console.log(global_var)
    console.log(global_let)
    console.log(global_const)

}

myfunc()
console.log(global_var)
console.log(global_let)
console.log(global_const)


//var  in term of local scope

//global var
var global_var2 ="this is a global variable 2(var)"

function myfunc2(){
    //global var can be accessible from anywhere
    console.log(global_var2 )
    //function var (local)
    var func_var = "this is accessible in the function scope"
    if(true)
    {   
        //block scope var(local) can be accessible in block scope & function scope only not in global scope
        var block_scope = "This is a block scope variable"
        console.log(block_scope)
    }
    
    console.log(func_var)
    //block scope var(local) accessible in function scope
    console.log(block_scope)
    
}

myfunc2()

console.log(global_var2)
//function scope and block scope cannot be accessible in global scope
//It will show a reference error 
   //console.log(func_var)
   //console.log(block_scope)

//if var is declared in a block scope and there is no function it will be a global var
 if(true)  
    {
        var globalVar = "this is a var declared in a block scope without function"
    } 

    console.log(globalVar)


//let & const in terms of local scope
function func3()
{
  let local_let = "this is declared in function scope (let)"
  const local_const =  "this is declared in function scope(const)"
  if(true)
  { //function scope let,const accessible in block scope
    console.log(local_let)
    console.log(local_const)
    //block scope let,const
    let block_let =  "this is declared in block scope (let)"
    const block_const = "this is declared in block scope (const)"
    //only accessible in block scope
    console.log(block_let)
    console.log(block_const)
  }

 // block scope let,const not accessible in function scope
// console.log(block_let) <-reference error
 //console.log(block_const) <-reference error
}

//not accessible in global scope
// console.log(local_let)
// console.log(local_const)
// console.log(block_let)
// console.log(block_const)

func3()

//var is a global window property
//let & const are not global window property
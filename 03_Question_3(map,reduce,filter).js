//map
const arr =[2,3,5,10,15,20]

function binary(x){
    return x.toString(16)
}

function double(x){
    return x*2
}

function triple(x){
    return x*3
}

console.log(arr)
const output1 = arr.map(binary)
const output2 = arr.map(double)
const output3= arr.map(triple)
//alternative syntax
// const output3= arr.map(function triple(x){
//     return x*3
// })
//const output3= arr.map((x) =>  x*3)
//console.log(arr)
console.log(output1)
console.log(output2)
console.log(output3)




//filter

const arr2=[1,2,3,4,5,6,7,8,9]

function odd(x){
   return x % 2 && x > 5
  
}

function even(x){
   return x % 2 === 0
  
}


const result= arr2.filter(odd)
const result2= arr2.filter(even)
const result3= arr2.filter((x)=>x>3)
console.log(arr2)
console.log(result)
console.log(result2)
console.log(result3)


//reduce
//syntex arr.reduce(function(acc,curr){...},intialization)

//find total sum
const arr3=[3,4,5,6,7,8]
const res= arr3.reduce(function(acc,curr){
    acc=acc+curr
    return acc;
},5)
console.log(res)

//find max using reduce
const m_arr=[3,2,4,5,1,7,3,2,1]
const res2= m_arr.reduce(function(acc,curr){
    if(acc<curr){
    acc=curr
    }
    return acc;
},0)
console.log(res2)

//find min using reduce
const min_arr=[3,2,4,5,1,7,3,2,1]
const res3= min_arr.reduce(function(acc,curr){
    if(acc>curr){
    acc=curr
    }
    return acc;
},100)
console.log(res3)



//print full name using map (example 2)
const users=[
    {firstName:"Farzana",LastName:"Yeasmin", Age:22 },
    {firstName:"Naima",LastName:"Jahan", Age:19 },
    {firstName:"Samia",LastName:"Yeasmin", Age:21 },
    {firstName:"Nadia",LastName:"Jahan", Age:22 },
]
function names(x){
    return `${x.firstName} ${x.LastName}`
}
const fullName=users.map(names)
console.log(fullName)

//print first name of users age<22 using filter & map

const find_age=users.filter((x)=>x.Age<22).map((x)=>x.firstName)
console.log(find_age)

//find number of unique ages using reduce

const uniqueAge=users.reduce(function(acc,curr){
    if(acc[curr.Age]){
        acc[curr.Age]= ++acc[curr.Age]
    }
    else{
        acc[curr.Age]=1
    }
    return acc
},{},{})

console.log(uniqueAge)


//first name ,age>20 using reduce
const uniqueAge2=users.reduce(function(acc,curr){
    if(curr.Age>20){
        acc.push(curr.firstName)
    }
    
    return acc
},[])

console.log(uniqueAge2)

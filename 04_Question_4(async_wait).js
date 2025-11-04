//async function
//always return a promise

async function getDataAsPromise()
{
    return "hello"
}

//return promise instead of the value
//automatically wraped the value inside a promise
//const data=getDataAsPromise()
//output =>promise
console.log(getDataAsPromise())

async function getData(){
    return ("promise resolved")
}

//output the actual data
//getData().then((res)=>console.log(res))


//async-await
const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise is resolve through async-await")
    }, 5000);
});

async function handlePromise(){
    //await can only be used inside async function
    console.log("printed befor async-await")
    const val = await p;
    console.log(val);
    console.log("printed after async-await")
}
handlePromise()

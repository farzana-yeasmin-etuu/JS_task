const prac=`{
    "name": "farzana",
    "contact": 9876654 ,

"adress":{
    "city":"jhgfd",
    "road no":29
}
}`


console.log(prac);
//console.log(prac.name);

//parse json for operations
const user = JSON.parse(prac)
console.log(user);
console.log(user.name);

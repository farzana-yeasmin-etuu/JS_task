//promises
const hasContest = true
const contest = new Promise((resolve,reject) => {
   if(hasContest){
    const details = {
      time : "8.30 Pm",
      platform : "Codeforces",
    
};
resolve(details)
   }
   else
   {
    reject(new Error("There is no contest today"))
   }
});

contest
//return resolve if true
    .then((result)=>{
    console.log(JSON.stringify(result))
    })
    //return reject if false
    .catch((err)=>{
 console.log(err.message)
    })
//JSON all task


const products = [
  {
    ID: "P101",
    Name: "Laptop",
    Price: 80000,
    category: "Electronics",
    avgRating: 4.123,
    features: [
      "WiFi",
      "Water Resistant",
      "Bluetooth",
      "SSD",
      "Backlit Keyboard",
    ],
    stock: 50,
    reviews: [
      {
        userID: "U101",
        rating: 4,
        comments: [
          "Excellent",
          "Amazing camera",
          "Very fast",
          "Highly recommended",
          "heavy",
        ],
      },
      {
        userID: "U103",
        rating: 2,
        comments: [
          "poor",
          "Amazing camera",
          "Very fast",
          "Highly recommended",
          "heavy",
        ],
      },
      {
        userID: "U104",
        rating: 5,
        comments: [
          "Excellent",
          "Amazing camera",
          "Very fast",
          "Highly recommended",
          "complex",
        ],
      },
    ],
  },
  {
    ID: "P102",
    Name: "Smartphone",
    Price: 50000,
    category: "Electronics",
    avgRating: 5.0,
    features: ["Bluetooth", "Water Resistant", "Touchscreen", "4G", "Camera"],
    stock: 30,
    reviews: [
      {
        userID: "U101",
        rating: 5,
        comments: [
          "Amazing camera",
          "Very fast",
          "Highly recommended",
          "complex",
        ],
      },
    ],
  },
  {
    ID: "P103",
    Name: "Desk Chair",
    Price: 15000,
    category: "Furniture",
    avgRating: 3.234,
    features: ["Ergonomic", "Adjustable Height", "Swivel"],
    stock: 60,
    reviews: [
      {
        userID: "U102",
        rating: 2,
        comments: ["Comfortable", "Average quality", "Good for office"],
      },
    ],
  },
  {
    ID: "P104",
    Name: "Smart Watch",
    Price: 500,
    category: "Electronics",
    avgRating: 3.335,
    features: [
      "Bluetooth",
      "Water Resistant",
      "Heart Rate Monitor",
      "Waterproof",
      "heavy",
    ],
    stock: 90,
    reviews: [
      {
        userID: "U103",
        rating: 3,
        comments: [
          "Lightweight",
          "Good",
          "Very fast",
          "Screen small",
          "Affordable",
          "complex",
        ],
      },
      {
        userID: "U108",
        rating: 4,
        comments: [
          "Excellent",
          "Screen glare issue",
          "Slow response",
          "Lightweight and portable",
        ],
      },
    ],
  },
  {
    ID: "P105",
    Name: "Digital Camera",
    Price: 7000,
    category: "Electronics",
    avgRating: 4.437,
    features: ["WiFi", "Zoom Lens", "HD Video"],
    stock: 120,
    reviews: [
      {
        userID: "U104",
        rating: 4,
        comments: ["poor", "Easy to use", "Value for money"],
      },
    ],
  },
  {
    ID: "P106",
    Name: "Bluetooth Speaker",
    Price: 3000,
    category: "Electronics",
    avgRating: 4.019,
    features: ["Bluetooth", "Portable", "Rechargeable", "Waterproof"],
    stock: 101,
    reviews: [
      {
        userID: "U102",
        rating: 4,
        comments: ["Portable", "Good sound", "Battery lasts long"],
      },
    ],
  },
  {
    ID: "P107",
    Name: "E-book Reader",
    Price: 12000,
    category: "Electronics",
    avgRating: 2.458,
    features: ["WiFi", "Touchscreen", "Backlight", "Long Battery Life"],
    stock: 70,
    reviews: [
      {
        userID: "U105",
        rating: 2,
        comments: [
          "Excellent",
          "Screen glare issue",
          "Slow response",
          "Lightweight and portable",
        ],
      },
      {
        userID: "U108",
        rating: 5,
        comments: [
          "Excellent",
          "Screen glare issue",
          "Slow response",
          "Lightweight and portable",
        ],
      },
    ],
  },
];

/* a.Write a function that takes a category (e.g., "Electronics") as input and returns an array of product names (strings) for that category, sorted alphabetically. */
function getProducts(category)
{
    let result=[]
    for(let product of products){
        if(product.category===category){
            result.push(product.Name)
        }
    }
    return result.sort()
}
let prod = getProducts("Electronics")
console.log("a : ",prod);

// for(p of prod){
//     console.log(p)
//  }

/* b.Write a function that returns an array of objects containing each product’s name and its average rating (rounded to 2 decimal places) based on the reviews. */
function getProductRating(){
    return products.map(product=>{
       return { name:product.Name ,
        avgrating:product.avgRating.toFixed(2) }
    })
}
console.log("b : ",getProductRating())


/* c.Write a function that takes a feature keyword (e.g., "Bluetooth") and returns an array of product IDs for products whose features array contains that keyword (case-insensitive). Example for "Bluetooth": ["P1002", "P1010"] */

function getProdFeature(products,Keyword){
    const key= Keyword.toLowerCase()
    return products.filter(product=> product.features.some(feature => feature.toLowerCase()===key)).map(product=>product.ID)
}
const prodByKey = getProdFeature(products,"Bluetooth")
console.log("c : ",prodByKey)

/* d.Write a function that groups products into three categories based on stock: "Low" (< 50), "Medium" (50–100), and "High" (> 100). Return an object where each key is a stock level and the value is an array of product names. Example output: { Low: ["Cookbook: World Cuisine", "Digital Camera"], Medium: [...], High: ["Cotton T-Shirt"] }  */

let low=[],med=[],high=[]

for(let product of products){
if(product.stock<50){
 low.push(product.Name)
}

if(product.stock>=50  && product.stock<100 ){
 med.push(product.Name)
}

if(product.stock>=100){
 high.push(product.Name)
}
}
console.log("d: ")
console.log("Low: ",low)
console.log("Medium: ",med)
console.log("High: ",high)

/* e.Write a function that returns all unique user IDs from the reviews across all products. Example output: {"U101", "U102", "U103", ..., "U141"} */
const user =new Set()
for(let product of products){
  for(let rev of product.reviews){
    user.add(rev.userID)
  }
}
console.log("e: ")
for(let u of user){
  console.log(u)
}

/*f. Write a function that finds the top 3 products with the highest average ratings, but only includes products with at least 4 reviews. Return an array of objects with product_id, name, and avgRating (sorted by avgRating descending). Example output: [{ product_id: "P1003", name: "Running Shoes", avgRating: 4.20 }, ...] */
function getTopThree(){
  const prod=products.filter(product=>product.reviews.length>=2)
  const top=prod.sort((a,b)=>b.avgRating-a.avgRating)

  return top.slice(0,3).map(prod=>({
    id:prod.ID,
    name: prod.Name,
    avgRate:prod.avgRating.toFixed(2)
  }))
}
console.log("f: ")
console.log(getTopThree())

/*g. Write a function that analyzes all review comments and returns an object where the keys are words (lowercase, no punctuation) and the values are the number of times they appear across all comments. Ignore words shorter than 3 characters. Example output: {"great" => 6, "good" => 5, "comfortable" => 4, ...} */
function words(){
  const wordCount={}
  for(let prod of products){
    for(let rev of prod.reviews){
      for(let com of rev.comments){
        let clean = com.toLowerCase()
        clean=clean.replaceAll(",","").replaceAll("!","").replaceAll("?","").replaceAll(".","")
        let word=clean.split(" ")
        for(let w of word){
          if(w.length>=3){
            wordCount[w]=(wordCount[w] || 0)+1
          }
        }

      }
    }
  }
  return wordCount
}

console.log("g :")
console.log(words())

/* h. Write a function that identifies products with "mixed reviews," defined as having at least one rating of 5 and at least one rating of 2 or lower. Return an array of product names. */
function getRev(){
  let arr=[];

for(let p of products){
  let l=false,h=false
  for(let rev of p.reviews){
    let r = rev.rating
    {
      if(r===2){
         l=true
      }
      if(r===5){
        h=true
      }
    }
     
   
      
    }
     if(l && h){
      arr.push(p.Name)
     }
     
  }
  return arr;
}
console.log("h :")
console.log(getRev())


/* i. Write a function that calculates the average price of products that have a specific feature (e.g., "Water Resistant") and compares it to the overall average price of all products. Return an object with both averages and the difference. Example output for "Water Resistant": { featureAvg: 165.00, overallAvg: 242.80, difference: -77.80 } */

function specificFeature(feature){
  let totalFeature=0
  let featureCount=0 ,total=0
  let allCount=products.length
  for(p of products){
    total+=p.Price


    for(let f of p.features){
      if(f.toLowerCase()===feature.toLowerCase()){
        totalFeature+=p.Price
        featureCount++
        break
      }
    }
  }

  let avgFeature=0
  {
    if(featureCount>0){

         avgFeature= totalFeature/featureCount
    }
    else{
      avgFeature=0
    }
    let allavg= total/allCount
    let diff= avgFeature-allavg
    return{
      avgFeature : avgFeature.toFixed(2),
      allavg:  allavg.toFixed(2),
      diff : diff.toFixed(2)
    }
  }


}
console.log("i :")
console.log(specificFeature("Water Resistant"))

/*j. Write a function that categorizes products based on their review comments. For each product, count how many comments contain positive words ("great", "excellent", "good", "amazing", "comfortable") versus negative words ("poor", "bad", "heavy", "complex"). */

function getComment(){
  const positive=["great", "excellent", "good", "amazing", "comfortable"]
  const negative=["poor", "bad", "heavy", "complex"]

  let res=[]
  for(let p of products){
    let posCount=0,negCount=0
    for(let r of p.reviews){
      for(let c of r.comments){
        let com=c.toLowerCase()

        for(let pos of positive){
          if(com.includes(pos))
            posCount++

        }

        for(let neg of negative){
          if(com.includes(neg))
            negCount++

        }
      }
    }
    res.push({
      Product_ID: p.ID,
      Name: p.Name,
      PositiveWord: posCount,
      negativeWord: negCount

    })
  }
  return res
  
}
console.log("j :");
console.log(getComment())

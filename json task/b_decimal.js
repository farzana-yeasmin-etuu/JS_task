const products =`[
    {"id": "p1", "name" : "Laptop Pro X","category": "Electronics"},
    {"id": "p2" ,"name" : "Wireless Headphones","category": "Electronics"},
    {"id": "p3", "name" : "Smart Watch","category": "Electronics"},
    {"id": "p4" ,"name" : "Digital Camera","category": "Electronics"},
    {"id": "p5", "name" : "Bluetooth Speaker","category": "Electronics"},
    {"id": "p6","name" : "Mobile","category": "Electronics"},
    {"id": "p7" ,"name" : "Mixer","category": "Electronics"} 
]
`
const review = [
    {pId :'p1', rating: 5},
    {pId :'p1', rating: 3},
    {pId :'p1', rating: 2},
    
    {pId :'p2', rating: 3},
    {pId :'p2', rating: 4},

    {pId :'p1', rating: 3},
    {pId :'p1', rating: 4},

    {pId :'p1', rating: 3},
    {pId :'p1', rating: 5},
    {pId :'p1', rating: 2},

    {pId :'p1', rating: 3},
    {pId :'p1', rating: 2},
    {pId :'p1', rating: 2},
    {pId :'p1', rating: 2},

    {pId :'p1', rating: 3},
    {pId :'p1', rating: 2},
    {pId :'p1', rating: 2},

    {pId :'p1', rating: 3},
    {pId :'p1', rating: 2},
    {pId :'p1', rating: 3},
    {pId :'p1', rating: 2},

]

function avg(prod,rev){
    const ratings = rev.reduce((acc,rev)=>{
        const id = rev.pId;

        if(!acc[id]){
            acc[id]={total: 0,count: 0};
        }
        acc[id].total+=rev.rating
        acc[id].count+=1
        return acc;
    },{})

    const totalRating = prod.map(product =>{
        const review = ratings[product.pId]
        let avgRating=0

        if(review && review.count>0){
            avgRating = review.total/review.count;
        }

        const roundedRating = parseFloat(avgRating.toFixed(2))

        return {
            name: product.name,
            avgRating: roundedRating
        }
    });
    return totalRating

}
const allItem = JSON.parse(products);

const avgRating = avg(allItem, review)
console.log(avgRating);

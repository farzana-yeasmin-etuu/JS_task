const products = `

    [{ "name" : "Laptop Pro X","category": "Electronics"},
    { "name" : "Wireless Headphones","category": "Electronics"},
    { "name" : "Smart Watch","category": "Electronics"},
   { "name" : "Digital Camera","category": "Electronics"},
    { "name" : "Bluetooth Speaker","category": "Electronics"},
    { "name" : "Mobile","category": "Electronics"},
    { "name" : "Mixer","category": "Electronics"} ]
`

const allItem = JSON.parse(products)
allItem.sort((a,b)=>{
    return a.name.localeCompare(b.name,'en',{sensitivity:'base'})
})
const sortedName = allItem.map(product=>product.name)
console.log('" Electronics ": ', sortedName ,  )

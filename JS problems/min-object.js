const mobiles = [
    {name: 'realme', price: 27000, color:'black',quantity:4},
    {name: 'xiaomi', price: 17000, color:'black',quantity:3},
    {name: 'redmi',  price: 17800, color:'black',quantity:2},
    {name: 'pixel',  price: 20000, color:'black',quantity:5},
    {name: 'poco',   price: 22000, color:'black',quantity:1}
];

function getMin(phones){
    let min = phones[0];
    for(const phn of phones){
        if(phn.price < min.price){
            min = phn;
        }
    }
    return min;
}

function cartTotal(phones){
    let total = 0;
    for (const phn of phones){
        total += (phn.price*phn.quantity);
    }
    return total;
}

const cheapest = getMin(mobiles);
console.log(cheapest);

console.log(cartTotal(mobiles));
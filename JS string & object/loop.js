//for loop(for of): in case of array
//for loop(for in): in case of object


const mobile = {
    brand: 'Realme',
    price: 27990,
    color: 'blue',
    camera: '64 mp',
    isNew: false
}
//1st way
// for(const prop in mobile){
//     console.log(prop)
//     console.log(mobile[prop])
// }

//2nd way

const keys = Object.keys(mobile);
console.log(keys);

for(const k of keys){
    console.log(k,mobile[k]);
}

const pen = new Object({brand: 'econo',price:20});
console.log(pen);
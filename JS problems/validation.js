function multiply(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('provide number please :(')
    }

    const mult = a*b;
    return mult;
}

const result = multiply(3,'three');
console.log(result);

// validate object

function getPrice(product){
    if(typeof product !== 'object'){
        return 'provide an object';
    }
    return product.price; //as product.price is written means its an object
}

const price = getPrice(30)
console.log(price);

// array validation

function getSecond(numbers){
    if(!Array.isArray(numbers)){
        
        return 'please provide an array'
    }
    const second = numbers[1];
    return second;
}

console.log(getSecond(4));
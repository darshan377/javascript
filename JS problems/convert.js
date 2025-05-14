// convert inch to feet

function inchToFeet(inch){
    const feetFraction = inch / 12;
// return feetFraction;
    const feet = parseInt(feetFraction);
    // return feet
    const fractionInch = inch % 12;
     const result = feet + ' feet ' + fractionInch + ' inch'
     return result;
}

const height = inchToFeet(71)
console.log(height);
// check whether a year is leap year or not??
function isLeapYear(year){
    if(year%100 !==0 && year%4===0){
        return true;
    }
    if(year % 400 === 0 && year%100 === 0){
        return true;
    }
    return false;
}

let leap = isLeapYear(2024);
console.log(leap);
const district = `b-baria`;
const thana = new String('sarail');

// console.log(typeof thana);
// console.log(district);

// const school = "RAJUK UTTARA MODEL COLLEGE"

// console.log(school);

// const lowerCase = school.toLowerCase();

// console.log(lowerCase);

const drink1 = 'water '
const drink2 = ' water ' //trim-->remove space(cant remove space between characters)

if(drink1.trim() === drink2.trim()){
    console.log('fine');
}
else{
    console.log('not fine');
}

const school = "RAJUK UTTARA MODEL COLLEGE";

console.log(school.split(' '));

const first = "Darshan";
const second = "Das";
const third = "Gupta";

const fullName = first.concat(' ').concat(second).concat(' ').concat(third);
const fullName2 = first.concat(' ',second,' ',third);

console.log(fullName)
console.log(fullName2);
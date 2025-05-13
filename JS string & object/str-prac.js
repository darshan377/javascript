// task 1

const school = "AAAAAAAAAA";

let count = 0;
for(let c of school){
    if(c === 'A'){
        count++;
    }
}

console.log(count);

// task 3

let str = "Education";
str = str.toLowerCase();

let hasA = hasE = hasI = hasO = hasU = false;

for(let c of str){
   if (c === 'a') {
        hasA = true;
    } else if (c === 'e') {
        hasE = true;
    } else if (c === 'i') {
        hasI = true;
    } else if (c === 'o') {
        hasO = true;
    } else if (c === 'u') {
        hasU = true;
    }
}

if(hasA && hasE && hasI && hasO && hasU){
    console.log('it contains all vowels');
}
else{
    console.log(`it doesnt have`);
}
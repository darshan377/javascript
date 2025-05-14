const numbers = [2,4,2,43,56,7,43,69];
const persons = ['abul','babul','kabul','babul','kabul'];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const dupli1 = noDuplicate(persons);
const dupli2 = noDuplicate(numbers);
console.log(dupli1);
console.log(dupli2);
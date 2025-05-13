// check whether a string is even sized or not??

function evenSized(str){
    const len = str.length;
    if(len % 2 === 0){
        console.log('even size')
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}

// WAF to give the sum of all numbers in an array

function sumOfNumbers(numbers){
    let sum = 0;
   for(const n of numbers){
       sum += n;
       
   }
   return sum;
}

const nums = [12,56,69,2,99];
const sum = sumOfNumbers(nums);
console.log(sum);


// WAF that will return only the sum of even nums

function sumOfEvenNumbers(nums){
        let sum = 0;
        let evenNums = [];
        for (const n of nums){
            if(n % 2 === 0){
                evenNums.push(n);
                sum += n;
            }
        }
        console.log(evenNums);
        return sum;
}
 
const numbers = [12,56,69,2,99];
const total = sumOfEvenNumbers(numbers);
console.log(total);


function getMenu() {
 console.log("Burger, Pizza, Pasta");
}

getMenu();
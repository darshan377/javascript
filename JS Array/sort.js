// in case of sorting fuction -->sort() it follows ASCII values...thats why it doesnt work properly

const person = ['rakib','anis','sakib','Akib','aakib'];
const p = person.sort()
console.log(p);

const num = [1,23,14,0o1,5,4]
// let n = num.sort();
// console.log(n); 
//output-->[ 1, 1, 14, 23, 4, 5 ]
//as comparing 2 is less than 4 so it gives 23 before 4

const n1 = num.sort(function(a,b){return a-b});
console.log(n1);
const n2 = num.sort(function(a,b){return b-a});
console.log(n2);
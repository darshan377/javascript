const human = ['balam','kalam','salam','manlam','khechlam'];
 
const num = [];
const age = 15;
const food = 'i love tomato';
console.log(human.includes("salam"));

if(human.includes('alam')){
    console.log("oh yeah fuck");
}
else{
    console.log('get lost...huh');
}

console.log(human.indexOf('kalam'));

console.log(Array.isArray(num));
console.log(Array.isArray(food));

console.log(human.slice(0,2));
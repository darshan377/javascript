// for(let i=10;i>=0;i--){
//     console.log(i);
// }

let sum = 0;
for(let i=0;i<=30;i++){
    if(i % 5 === 0){
        console.log(i);
        sum += i;
    }
}

console.log('sum: ',sum);
// ternery ---> (condition) ? do when true : do when false

// const age = 13;

// age >= 18 ? console.log("you can vote...") : console.log("you can't...");

 let price = 3000  ;
 const isLeader = true;

// price = isLeader === true ? 0 : price + 100;

// console.log(price);


// if(isLeader === true) {
//        if(price > 1000){
//         price = price/2;
//        }
//        else{
//         price = 0;
//        }
// }
// else{
//     price = price + 100;
// }       ||
//         V

price = (isLeader) ? (price > 1000 ? price/2 : 0) : price + 100;

console.log(price);

const isPassed = false;

if(!!isPassed){
    console.log("get out");
}
else{
    console.log("good one");
}
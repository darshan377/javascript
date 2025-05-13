const sentence = 'i want to learn';

//1st way
// for(let i=sentence.length-1;i>=0;i--){
//     console.log(sentence[i]);
// }


//2nd way
// let rev = '';
// for(let i=0;i<sentence.length;i++){
//    const letter = sentence[i];
//    rev = letter + rev;
// }

// console.log(rev);

//3rd way

let reversed = sentence.split('').reverse().join('');
console.log(reversed);

const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}

let str = "Mississippi";
console.log(str.indexOf("i", 3));
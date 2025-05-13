//object can store many properties in a single variable
//non-primitive

const bottle = {
    brand: 'lamborghini',
    color: 'red',
    price: 30,
    isClean: true
};

const subject = {
    name : `biology`,
    teacher : "mam",
    exam: '25 feb',
    'chap ters': [2,3,4],
    topics:{
        name: `neuron`,
        type: `multiple-choice`,
    }
};

// console.log(subject,bottle);

//dot notation

console.log(subject.topics.type);

//bracket notation

console.log(bottle[`price`]);

const col = bottle[`color`];
console.log(col);

console.log(subject['chap ters']);

const subName = 'name';
subject[subName] = `CSE`;

console.log(subject); 

const keys = Object.keys(subject);
console.log(keys);

delete subject.exam;
console.log(subject); 

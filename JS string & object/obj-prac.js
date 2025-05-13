const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors['golden rod'])

colors.passangerCapacity = 5;

console.log(colors)

// task 3

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks)
console.log(Object.keys(student.physics).length);

// task 4

let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const count = Object.keys(student2).length
console.log(count);

// task 5

let myobj = {
name: 'John Doe', 
age: 25,
city: 'Example City',
isStudent: true
}

for(let key in myobj){
    console.log('key: ',key ,' | ','type: ',typeof(myobj[key]));
}
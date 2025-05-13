//basic structure
//function name(){} then to show output we have to call the function

function work(){
    console.log('pickup brush')
    console.log('hello everyone');
}

//call the function
work();


//square function

function square(n){
    console.log(n*n);
}

square(405)

function minus(n1,n2,n3){
    let minimize = n1-n2-n3;
    console.log(n1,n2,n3)
    console.log(minimize);
}

minus(1,2,3);


// return a value

function Square(n){
    let result = n*n;
    return result
}

const val = Square(405)
console.log(val);

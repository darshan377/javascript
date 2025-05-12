let weight = 65, height = 2.727;

let BMI = weight / (height)^2;

if(BMI < 18.5){
    console.log("underweight");
}
else if(BMI >= 18.5 && BMI<=24.9){
    console.log("normal");
}
else{
    console.log("obese");
}
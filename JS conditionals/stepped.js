const price = 3080;

if(price >= 5000){
    // 10% discount
    const discount = price * 10 / 100
    const amount = price - discount;
    console.log(amount);
}

else if(price > 3000){
    // 5% discount
    const discount = price * 5 / 100
    const amount = price - discount;
    console.log(amount);
}
else{
    console.log(price)
}
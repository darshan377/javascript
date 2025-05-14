/**
 * first100 --> 100tk
 * second100 --> 90tk
 * third100 --> 70tk
 */

function layerDiscountTotal(quantity){
       const first100P  = 100;
       const second100P = 90;
       const third100P  = 70;
        
       let total = 0
       if(quantity <= 100){
          total = quantity * first100P;
          return total;
       }

       else if(quantity <= 200){
        const first100total = 100 * first100P;
        const remainingQunatity = quantity - 100;
        const remainingQunatityP = remainingQunatity * second100P;

        total = first100total + remainingQunatityP;
        return total;
       }

       else{
        const first100total = 100 * first100P;
        const second100total = 100 * second100P;
        const remainingQunatity = quantity - 200;
        const remainingQunatityP = remainingQunatity * third100P;

        total = first100total + second100total + remainingQunatityP;

        return total;

       }
}

const Q = layerDiscountTotal(250);
console.log(Q);



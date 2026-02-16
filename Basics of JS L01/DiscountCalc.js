//Discount calculator using high order function

function discountCalculator (val){
    return function(value){
        return value*(1-(val/100));
    };
}

let discount = discountCalculator (10); //this will return 10% off over any price set.
console.log(discount(200)); //this will return off value of set price. 


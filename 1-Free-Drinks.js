/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
function getDrinkPrice(burgerPrice) {
    if (burgerPrice > 500) {
        return "Free Coke!";
    } else {
        return "Coke: 30tk";
    }
}

// উদাহরণ হিসেবে রান করতে পারেন:
console.log(getDrinkPrice(600)); // Output: Free Coke!
console.log(getDrinkPrice(400)); // Output: Coke: 30tk

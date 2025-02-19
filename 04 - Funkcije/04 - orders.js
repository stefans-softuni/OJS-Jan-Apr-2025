function solve(product, quantity) {
    let price = 0;
    if (product == "coffee") {
        price = 1.5 * quantity;
    } else if (product == "water") {
        price = quantity;
    } else if (product == "coke") {
        price = 1.4 * quantity;
    } else {
        price = 2 * quantity;
    }
    console.log(price.toFixed(2));
}

solve("coffee", 2);


function solveArrow(product, quantity) {
    let generatePrice = (p, q) => (p == "coffee") ? 1.5 * q : (p == "water") ? q : (p == "coke") ? 1.4 * q : 2 * q;
    console.log(generatePrice(product, quantity).toFixed(2));
}

solveArrow("coffee", 2);


/*
if (uslov) {
    return v1;
} else {
    return v2;
}

return uslov ? v1 : v2;

Ove dve komande isto rade
*/
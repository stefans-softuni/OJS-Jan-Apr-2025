function solve(num1, num2, operator) {
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;

    let result = 0;
    switch (operator) {
        case "multiply": 
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
    }
    console.log(result);
}

solve(5, 5, "multiply");


function solve2(num1, num2, operator) {
    let calc = (x, y, o) => (o == "multiply") ? x * y : (o == "divide") ? x / y : (o == "add") ? x + y : x - y;
    console.log(calc(num1, num2, operator));
}
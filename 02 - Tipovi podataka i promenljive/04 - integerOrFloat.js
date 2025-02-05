function solve(first, second, third) {
    let sum = first + second + third;
    if (sum == Math.floor(sum)) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
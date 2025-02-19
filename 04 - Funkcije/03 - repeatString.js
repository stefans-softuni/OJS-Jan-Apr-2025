function solve(str, n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += str;
    }
    return result;
}

let p = solve("abc", 3);
console.log(p);

console.log(solve("String", 2));
function solve(fn, ln, a) {
    let obj = {};
    obj.firstName = fn;
    obj.lastName = ln;
    obj.age = a;
    return obj;
}

console.log(solve("Peter", "Pan", "20"));
let x = 5;
let y = x;   // kopiranje po vrednosti

console.log(x, y);  // 5 5
y = 8;
console.log(x, y);  // 5 8


// -----------------------------------

let a = [1, 4, 6];
let b = a;   // kopiranje po referenci

console.log(a, b);   // [1, 4, 6]  [1, 4, 6]
b[0] = 9;
console.log(a, b);   // [9, 4, 6]  [9, 4, 6]


// -----------------------------------

let obj1 = { name: "Pera", age: 19 };
let obj2 = obj1;

obj2.name = "Mika";
console.log(obj1, obj2);    // { name: 'Mika', age: 19 } { name: 'Mika', age: 19 }



//  ----------------------------------


let p = 5;

function solve(q) {
    q = q + 4;
}

solve(p);
console.log(p);   


//  ----------------------------------


let auto = { marka: "Audi", boja: "bela" };

function solveAuto(a) {
    a.boja = "crna";
}

solveAuto(auto);
console.log(auto);
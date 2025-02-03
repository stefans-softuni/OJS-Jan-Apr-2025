let n = 5;
console.log(typeof n);   // number

n = "Pera";   // Deklaracija promenljive samo jednom!
console.log(typeof n);   // string

n = -8.95;
console.log(typeof n);   // number

let p;
console.log(p);    // undefined

p = 8;    // typeof p = number
p = null;
console.log(typeof p);  // null (prazna vrednost)

let q = null;
console.log(typeof q);  


// Petlje u JS
let counter = 0;
while (counter <= 9) {
    console.log(counter);
    counter++;
}

// For petlja u JS
for (let i = 0; i <= 9; i++) {
    console.log(i);
}

// console.log(i); - ne moze ovde da se pristupi promenljivoj `i`
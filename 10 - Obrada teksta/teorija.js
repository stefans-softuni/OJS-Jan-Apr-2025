// Definisanje stringova
let str1 = "John's address";
let str2 = 'John\'s address';

let x = 5;
let str3 = "Value of x is ${x}";
let str4 = `Value of x is ${x}`;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

// Konkatenacia stringova
console.log(str3 + " " + x);


// Konverzija stringa u broj
let str5 = "56";
let num1 = Number(str5);
console.log(num1, typeof num1);

// Konverzija broja u string
// let str6 = `${num1}`;
let str6 = num1 + "";
console.log(str6, typeof str6);

// Stringovi su immutable (read-only)
console.log(str1[2]); // h
console.log(str1[-2]);  // undefined
console.log(str1[100]); // undefined
str1[2] = 'p';    // ovo mozemo da kazemo, ali nista se ne menja
console.log(str1);      //  stringovi nisu nizovi!
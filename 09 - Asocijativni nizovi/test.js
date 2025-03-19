/*let visine = {};
visine["pera"] = 189;
visine["milena"] = 167;
visine["laza"] = 178;*/

let visine = {
    "pera": 189,
    "milena": 167,
    "laza": 178
};

visine["milena"] = 162;

console.log(visine);

// Kako da iteriramo kroz sve elemente asocijativnog niza???

let niz = [1, 2, 3];
//for (let i = 0; i < niz.length; i++) {
//    console.log(niz[i]);
//}
// FOR petlja u ovom obliku ne moze da se koristi za asocijativne nizove!!!

//for (let x of niz) {
//    console.log(x);
//}
// FOR-OF petlja takodje ne moze da se koristi za asocijativne nizove (asocijativni nizovi nisu iterabilni)


// Za iteraciju kroz sve elemente asocijativnog niza, postoje dva nacina:

// 1) FOR-IN petlja prolazi kroz sve KLJUCEVE elemenata
for (let key in visine) {
    console.log(key + " " + visine[key]);
}

// 2) Da se asocijativni niz konvertuje u obican uz pomoc Object.entries() metode
let entries = Object.entries(visine);
console.log(entries);   // [ [ 'pera', 189 ], [ 'milena', 167 ], [ 'laza', 178 ] ]

for (let x of entries) {
    let key = x[0];
    let value = x[1];
    console.log(`${key} -> ${value}`);
}


// Isto to, samo na drugi nacin:
for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
}
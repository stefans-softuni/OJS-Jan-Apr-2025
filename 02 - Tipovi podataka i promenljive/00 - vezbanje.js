// console.log(y);   // ReferenceError: Cannot access 'y' before initialization (let ne radi hoisting)
console.log(z);   // promenljiva z postoji ovde jer var radi hositing (gde god se nalazi promenljiva, deklaracija se pomera na pocetak funkcije/programa)

let y = 5;
var z = 8;

function testFunkcija() {
    console.log(x);   // undefined (deklarisana je promenljiva, ali jos nije dodeljena vrednost)
    if (5 === 5) {
        var x = 2;
    }
    var x;    // nije greska, moze vise puta da se deklarise zbog hoistingovanja
    console.log(x);   // 2 (promenljiva je deklarisana i dodeljena je vrednost)
}

testFunkcija();
// console.log(x);   // GRESKA! (oblast vazenja za var je unutar funkcije)


function drugaTestFunkcija() {
    // console.log(x);  // OVO NE MOZE! (let moze samo unutar bloka da se pristupa)
    if (5 === 5) {
        let x = 2;
        console.log(x);
    }
    //console.log(x);   // OVO NE MOZE! (let moze samo unutar bloka da se pristupa)
    let x = 6;  // Ovo ovde je nova promenljiva (nema veze sa x iz prethodnog bloka)
    console.log(x);
    for (let x = 1; x <= 5; x++) {
        console.log(x);
    }
}

drugaTestFunkcija();


console.log(y);   // 5
console.log(z);   // 8
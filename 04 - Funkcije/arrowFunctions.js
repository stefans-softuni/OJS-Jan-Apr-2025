// "Obicna" funkcija (imenovana funkcija)
function increment(x) {
    return x + 1;
}

// Poziv imenovane funkcije:
increment(5);



// Anonimna funkcija (neimenovana funkcija)
let inc = function(x) {
    return x + 1;
}

// Poziv anonimne funkcije ide preko promenljive:
inc(5);



// Arrow funkcija:
// Skraceni zapis anonimne funkcije koja vraca neku vrednost
// let inc2 = (x) => x + 1;
// Ako arrow funkcija prihvata jedan parametar, tada cak ni zagrade ne mora da se pisu!
let inc2 = x => x + 1;
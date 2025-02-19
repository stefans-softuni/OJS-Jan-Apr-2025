function solve(num, power) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= num;
    }
    console.log(result);
}

solve(2, 8);

/*
// Sta ako hocemo da ispisemo:
// Stepen 2 na 8 jednako je 256?

let x = 2;
let y = 8;
let z = solve(x, y);
console.log(`Stepen ${x} na ${y} jednako je ${z}`);

// Sta ako imamo formu gde unosimo x i y
// I klikom na dugme, da se prikaze x^y

dugme.onEventListener('click', function(e) {
    let x = // pokupi vrednost iz prvog polja
    let y = // pokupi vrednost iz drugog polja
    let z = solve(x, y);
});
*/
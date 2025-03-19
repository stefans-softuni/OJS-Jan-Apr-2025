let imena = ["Pera", "Mika", "Ana"]

imena.sort();   // imena = ["Ana", "Mika", "Pera"]

let brojevi = [8, 9, 1];

brojevi.sort( (a, b) => { return b - a; } );  
                 //  brojevi = [1, 8, 9]


let entries = [ ["Tim", "0876566344"], ["Bill", "0896543112"] ]

entries.sort( (a, b) => {
    let keyA = a[0];
    let keyB = b[0];
    return keyA.localeCompare(keyB);
} );

// Isto kao i prethodno, samo drugacije zapisano:
entries.sort( ([keyA, valueA], [keyB, valueB]) => {
    return keyA.localeCompare(keyB);
});
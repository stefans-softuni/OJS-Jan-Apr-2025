function solve(arr) {
    // 1) Kreira kolekcija kompozicija (treba da se ucita n vrednosti u asocijativni niz)
    let myPieces = {};
    let n = Number(arr.shift());
    for (let i = 0; i < n; i++) {
        let composition = arr.shift();
        let [piece, composer, key] = composition.split("|");
        if (!myPieces.hasOwnProperty(piece)) {
            myPieces[piece] = {};
            myPieces[piece].composer = composer;
            myPieces[piece].key = key;
        }
    }

    // 2) Ucitavamo komande sve do "Stop" komande
    let command = arr.shift();
    while (command !== "Stop") {
        let tokens = command.split("|");
        let action = tokens[0];
        switch (action) {
            case "Add":
                let piece = tokens[1];
                let composer = tokens[2];
                let key = tokens[3];
                if (!myPieces.hasOwnProperty(piece)) {
                    myPieces[piece] = {};
                    myPieces[piece].composer = composer;
                    myPieces[piece].key = key;
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case "Remove":
                let cName = tokens[1];
                if (myPieces.hasOwnProperty(cName)) {
                    delete myPieces[cName];
                    console.log(`Successfully removed ${cName}!`);
                } else {
                    console.log(`Invalid operation! ${cName} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                let pieceName = tokens[1];
                let newKey = tokens[2];
                if (myPieces.hasOwnProperty(pieceName)) {
                    myPieces[pieceName].key = newKey;
                    console.log(`Changed the key of ${pieceName} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                }
                break;
        }

        command = arr.shift();
    }

    // 3) Po dobijanju Stop komande, stampamo sve informacije o kompozicijama
    let allPiecesNames = Object.keys(myPieces);
    for (let piece of allPiecesNames) {
        console.log(`${piece} -> Composer: ${myPieces[piece].composer}, Key: ${myPieces[piece].key}`);
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  );
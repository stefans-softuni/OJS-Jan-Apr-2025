function solve(arr) {
    let assocArray = {};

    for (let elem of arr) {
        let tokens = elem.split(" ");   // tokens = ['Lilly', '4', '6', '6', '5']
        let name = tokens.shift();   // name = 'Lilly',  tokens = ['4', '6', '6', '5']
        let grades = tokens.map(Number);  // grades = [4, 6, 6, 5]
        if (!assocArray.hasOwnProperty(name)) {
            assocArray[name] = grades;
        } else {
            let oldGrades = assocArray[name];
            oldGrades.push(...grades);
            assocArray[name] = oldGrades;
        }
    }

    let entries = Object.entries(assocArray);
    entries.sort( ([keyA, valA], [keyB, valB]) => {
        return keyA.localeCompare(keyB);
    } );

    for (let [name, grades] of entries) {
        let avg = 0;
        for (let grade of grades) {
            avg += grade;
        }
        avg /= grades.length;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
    );
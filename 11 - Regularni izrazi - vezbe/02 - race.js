function solve(arr) {
    let allNames = arr.shift().split(", ");
    let racers = {};
    for (let name of allNames) {
        racers[name] = 0;
    }

    let lettersPattern = /[A-Za-z]/g;
    let digitsPattern = /[0-9]/g;
    for (let item of arr) {
        if (item === 'end of race') {
            break;
        }
        let letters = item.match(lettersPattern);
        let digits = item.match(digitsPattern);
        let racerName = letters.join("");
        let distances = digits.map(Number);
        let totalDistance = 0;
        for (let d of distances) {
            totalDistance += d;
        }
        if (racers[racerName] !== undefined) {
            racers[racerName] += totalDistance;
        }
    }

    let result = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    if (result[0] !== undefined) {
        console.log(`1st place: ${result[0][0]}`);
    }
    if (result[1] !== undefined) {
        console.log(`2nd place: ${result[1][0]}`);
    }
    if (result[2] !== undefined) {
        console.log(`3rd place: ${result[2][0]}`);
    }
}

solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
    );
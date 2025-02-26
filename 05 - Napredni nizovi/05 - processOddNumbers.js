function solve(arr) {
    let elemOddPositions = arr.filter( (x, i) => i % 2 == 1 );
    let dobuleValues = elemOddPositions.map( (x) => 2 * x );
    let reverseArray = dobuleValues.reverse();
    console.log(reverseArray.join(" "));
}

solve([3, 0, 10, 4, 7, 3]);
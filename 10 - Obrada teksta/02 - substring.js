function solve(str, startIdx, count) {
    let result = str.substring(startIdx, startIdx + count);
    console.log(result);
}

solve('ASentence', 1, 8);

// BONUS: "Rucno", bez koriscenja ugradjene funkcije
function solve2(str, startIdx, count) {
    let result = "";
    for (let i = 0; i < count; i++) {
        result += str[startIdx + i];
    }
    console.log(result);
}
solve2('ASentence', 1, 8);
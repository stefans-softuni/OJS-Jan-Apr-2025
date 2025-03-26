function solve(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        // console.log(str.charAt(i));
        // console.log(str.at(i));
    }
}

function solve2(str) {
    for (let c of str) {
        console.log(c);
    }
}

solve('AWord');
solve2('Sentence');
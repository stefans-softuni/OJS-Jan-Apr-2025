function solve(n) {
    for (let i = 1; i <= n; i++) {
        let str = i.toString();
        let sum = 0;
        for (let j = 0; j < str.length; j++) {
            sum += Number(str[j]);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
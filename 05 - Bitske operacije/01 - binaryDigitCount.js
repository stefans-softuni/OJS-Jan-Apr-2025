function solve(n, b) {
    let count = 0;
    while (n > 0) {
        let currentBit = n % 2;
        n = Math.floor(n / 2);
        if (currentBit == b) {
            count++;
        }
    }
    console.log(count);
}

solve(20, 0);   // 3
solve(15, 1);   // 4
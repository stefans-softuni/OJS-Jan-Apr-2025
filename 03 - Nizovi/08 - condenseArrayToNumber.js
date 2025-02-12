function solve(arr) {
    while (arr.length > 1) {
        let cond = [];
        for (let i = 0; i < arr.length - 1; i++) {
            cond.push(arr[i] + arr[i + 1]);
        }
        arr = cond;
    }
    console.log(arr[0]);
}
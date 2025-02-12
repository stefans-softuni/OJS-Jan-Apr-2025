function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let evenSum = 0, oddSum = 0;
    for (let elem of arr) {
        if (elem % 2 == 0) {
            evenSum += elem;
        } else {
            oddSum += elem;
        }
    }
    console.log(evenSum - oddSum);
}

solve([1,2,3,4,5,6]);
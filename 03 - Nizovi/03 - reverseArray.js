function solve(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr[i] = arr[i];
    }

    let output = "";
    for (let i = n - 1; i >= 0; i--) {
        output += `${newArr[i]} `;
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);

function solve2(n, arr) {
    let newArr = arr.slice(0, n);
    let newArrRev = newArr.reverse();
    let result = newArrRev.join(" ");
    console.log(result);
}

solve2(3, [10, 20, 30, 40, 50]);

function solve3(n, arr) {
    console.log(arr.slice(0, n).reverse().join(" "));
}

solve3(3, [10, 20, 30, 40, 50]);
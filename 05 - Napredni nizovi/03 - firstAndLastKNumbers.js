function solve(arr) {
    let k = arr.shift();
    let n = arr.length;
    let firstKElems = arr.slice(0, k);   // Prvih k elemenata sa indeksima  0, 1, 2, ..., k - 1
    // let lastKElems = arr.slice(n - k, n);     // Poslednjih k elemenata sa indeksima  n-k, ..., n-3, n-2, n-1
    let lastKElems = arr.slice(-k); 

    console.log(firstKElems.join(" "));
    console.log(lastKElems.join(" "));
}

solve([2, 
    7, 8, 9]
);

solve([3,
    6, 7, 8, 9]
   );
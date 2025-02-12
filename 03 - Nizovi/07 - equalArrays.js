function solve(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }

    let sum = 0;
    let diffIndex = undefined;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
            sum += arr1[i];
        } else {
            diffIndex = i;
            break;
        }
    }

    if (diffIndex === undefined) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
    }
}
function solve(letters) {
    function palindromeLen(leftIndex, rightIndex) {
        while (leftIndex >= 0 && rightIndex < letters.length && letters[leftIndex] === letters[rightIndex]) {
            leftIndex--;
            rightIndex++;
        }
        return rightIndex - leftIndex - 1;
    }

    let maxLen = 0;

    // 1) Prolazimo kroz sve karaktere i formiramo palindrome oko tih centralnih tacaka (detektuje palindrome neparnih duzina)
    for (let c = 0; c < letters.length; c++) {
        let len = palindromeLen(c, c);
        if (len > maxLen) {
            maxLen = len;
        }
    }

    // 2) Prolazimo kroz sve parove susednih karaktera i formiramo palindrome oko tih parova (detektuje palindrome parnih duzina)
    for (let c = 0; c < letters.length - 1; c++) {
        let len = palindromeLen(c, c + 1);
        if (len > maxLen) {
            maxLen = len;
        }
    }

    console.log(maxLen);
}

solve("ahcchxu");
solve("hhxhxh");
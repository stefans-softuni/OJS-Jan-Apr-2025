function solve(grade, arr) {
    if (pass(grade)) {
        printHeader();
        printName(arr);
        formatGrade(grade);
    } else {
        console.log(`${arr[0]} ${arr[1]} does not qualify`);
    }

    function pass(grade) {
        return grade >= 3;
    }

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function printName(arr) {
        console.log(`${arr[0]} ${arr[1]}`);
    }

    function formatGrade(grade) {
        if (grade < 3) {
            console.log(`Fail (2)`);
        } else if (grade < 3.5) {
            console.log(`Poor (${grade.toFixed(2)})`);
        } else if (grade < 4.5) {
            console.log(`Good (${grade.toFixed(2)})`);
        } else if (grade < 5.5) {
            console.log(`Very good (${grade.toFixed(2)})`);
        } else {
            console.log(`Excellent (${grade.toFixed(2)})`);
        }
    }
}

solve(5.25, ['Peter', 'Carter']);
solve(2.99, ["Pera", "Peric"]);
function solve(month) {
    switch (month) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        // case 3: ///
        // case 4: ///
        case 12:
            console.log("December");
            break;
        default:
            console.log("Error!");
            break;
    }
}

solve(2);
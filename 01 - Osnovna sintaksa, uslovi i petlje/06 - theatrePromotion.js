function solve(day, age) {
    switch (day) {
        case "Weekday":
            // odrediti cenu karte za radni dan
            if ( (0 <= age && age <= 18) || (64 < age && age <= 122) ) {
                console.log("12$");
            } else if (18 < age && age <= 64) {
                console.log("18$");
            } else {
                console.log("Error!");
            }
            break;
        case "Weekend": 
            // odrediti cenu karte za vikend
            if ( (0 <= age && age <= 18) || (64 < age && age <= 122) ) {
                console.log("15$");
            } else if (18 < age && age <= 64) {
                console.log("20$");
            } else {
                console.log("Error!");
            }
            break;
        case "Holiday":
            // odrediti cenu karte za praznik
            if (0 <= age && age <= 18) {
                console.log("5$");
            } else if (18 < age && age <= 64) {
                console.log("12$");
            } else if (64 < age && age <= 122) {
                console.log("10$");
            } else {
                console.log("Error!");
            }
            break;
    }
}

solve('Weekday', 42);   // 18$
solve('Holiday', -12);  // Error!
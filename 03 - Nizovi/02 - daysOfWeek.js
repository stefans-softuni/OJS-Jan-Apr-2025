function solve(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day >= 1 && day <= 7) {
        let currentDay = days[day - 1];
        console.log(currentDay);
    } else {
        console.log("Invalid day!");
    }
}

solve(3);
solve(11);
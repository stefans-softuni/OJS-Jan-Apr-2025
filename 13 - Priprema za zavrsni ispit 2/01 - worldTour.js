function solve(arr) {
    let tour = arr.shift();
    let command = arr.shift();
    while (command !== "Travel") {
        let [action, par1, par2] = command.split(":");
        switch (action) {
            case "Add Stop":
                let idx = Number(par1);
                let val = par2;
                if (idx >= 0 && idx < tour.length) {
                    tour = tour.slice(0, idx) + val + tour.slice(idx);
                }
                break;
            case "Remove Stop":
                let idx1 = Number(par1);
                let idx2 = Number(par2);
                if (idx1 >= 0 && idx1 < tour.length && idx2 >= 0 && idx2 < tour.length) {
                    tour = tour.slice(0, idx1) + tour.slice(idx2 + 1);
                }
                break;
            case "Switch":
                let str1 = par1;
                let str2 = par2;
                if (tour.includes(str1)) {
                    tour = tour.replace(str1, str2);
                }
                break;
        }
        console.log(tour);
        command = arr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${tour}`);
}

solve(["A:B:C:D",
    "Add Stop:3:N",
    "Remove Stop:4:8",
    "Switch:A:AA",
    "Travel"]);
    
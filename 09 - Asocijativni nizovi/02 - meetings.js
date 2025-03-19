function solve(arr) {
    let meetings = {};

    for (let elem of arr) {
        let [day, name] = elem.split(" ");
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    let entries = Object.entries(meetings);
    for (let [day, name] of entries) {
        console.log(`${day} -> ${name}`);
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   );
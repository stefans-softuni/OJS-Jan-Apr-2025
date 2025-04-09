function solve(arr) {
    let text = arr[0];

    let pattern = /([#|])(?<name>[a-zA-Z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,4}|10000)\1/g;
    let totalCals = 0;
    let messages = [];

    let pointer = pattern.exec(text);
    while (pointer !== null) {
        let name = pointer.groups['name'];
        let date = pointer.groups['date'];
        let cal = Number(pointer.groups['cal']);
        messages.push(`Item: ${name}, Best before: ${date}, Nutrition: ${cal}`);
        totalCals += cal;
        pointer = pattern.exec(text);
    }

    let totalDays = Math.floor( totalCals / 2000 );
    console.log(`You have food to last you for: ${totalDays} days!`);

    for (let message of messages) {
        console.log(message);
    }
}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    );
function solve(arr) {
    let message = arr.shift();
    let command = arr.shift();
    while (command !== "Decode") {
        let tokens = command.split("|");
        let instruction = tokens[0];
        switch (instruction) {
            case "Move":
                let num = Number(tokens[1]);
                let firstSubstring  = message.slice(0, num);
			    let secondSubstring = message.slice(num);
			    message = secondSubstring + firstSubstring;
                break;
            case "Insert":
                let idx = Number(tokens[1]);
                let val = tokens[2];
                let firstSub  = message.slice(0, idx);
			    let secondSub = message.slice(idx);
			    message = firstSub + val + secondSub;
                break;
            case "ChangeAll":
                let s1 = tokens[1];
                let s2 = tokens[2];
                while (message.includes(s1)) {
                    message = message.replace(s1, s2);
                }
                break;
        }
        
        command = arr.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  );
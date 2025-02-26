function solve(arr) {
    let numsAsString = arr.shift();           // numsAsString = '4 19 2 53 6 43'
    let numsAsArr = numsAsString.split(" ");  // numsAsArr = ['4', '19', '2', '53', '6', '43']
    let arrNums = numsAsArr.map(Number);      // arrNums = [4, 19, 2, 53, 6, 43]

    for (let command of arr) {
        let commandArr = command.split(" ");  // commandArr = ['Add', '3']
        let commandName = commandArr[0];      // commandName = 'Add'
        let firstNumber = Number(commandArr[1]); // firstNumber = 3

        switch (commandName) {
            case "Add":
                arrNums.push(firstNumber);
                break;
            case "Remove":
                arrNums = arrNums.filter( x => x != firstNumber );
                break;
            case "RemoveAt":
                arrNums.splice(firstNumber, 1);
                break;
            case "Insert":
                let secondNumber = Number(commandArr[2]);
                arrNums.splice(secondNumber, 0, firstNumber);
                break;
        }
    }

    console.log(arrNums.join(" "));
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
    );

/*
- Add v      => arr.push(v)
- Remove v   => arr.filter( x => x != vr )
- RemoveAt i => arr.splice(i, 1)
- Insert v i => arr.splice(i, 0, v)
*/
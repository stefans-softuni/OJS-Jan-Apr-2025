function solve(arr) {
    let phoneBook = {};

    // Iteracija po ulaznom nizu (tu se nalaze imena i brojevi)
    for (let elem of arr) {
        // elem = 'Tim 083421255'
        let tokens = elem.split(" ");  // tokens = ['Tim', '083421255']
        let name = tokens[0];
        let phone = tokens[1];
        phoneBook[name] = phone;
    }

    // Iteracija po asocijativnom nizu phoneBook
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   );
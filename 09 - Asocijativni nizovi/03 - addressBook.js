function solve(arr) {
    let addressBook = {};

    for (let elem of arr) {
        let [name, address] = elem.split(":");
        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);
    //console.log(entries);

    entries.sort( ([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    } );
    //console.log(entries);

    for (let [name, address] of entries) {
        console.log(`${name} -> ${address}`);
    }
}


solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   );
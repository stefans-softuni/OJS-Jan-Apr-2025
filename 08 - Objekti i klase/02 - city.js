function solve(obj) {
    let allKeys = Object.keys(obj);  // ['name', 'area', 'population', 'country', 'postCode']
    for (let key of allKeys) {
        let value = obj[key];
        console.log(`${key} -> ${value}`);
    }
}


function solve2(obj) {
    let keysAndValues = Object.entries(obj);   // [ ['name', 'Sofia'], ['area', 492], ['population', 1238438], ... ]
    for (let [key, value] of keysAndValues) {
        console.log(`${key} -> ${value}`);
    }
}

// Za prolazak kroz kljuceve moze da se koristi i for-in petlja
function solve3(obj) {
    for (let key in obj) {
        let value = obj[key];
        console.log(`${key} -> ${value}`);
    }
}


solve3({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);
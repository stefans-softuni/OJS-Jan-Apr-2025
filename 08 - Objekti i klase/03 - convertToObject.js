function solve(text) {
    let obj = JSON.parse(text);
    for (let key in obj) {
        let val = obj[key];
        console.log(`${key}: ${val}`);
    }
}

solve('{ "name": "Geogre", "age": 40, "town": "Sofia"}');
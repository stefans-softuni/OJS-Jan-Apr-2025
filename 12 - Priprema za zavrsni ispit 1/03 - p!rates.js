function solve(arr) {
    // 1) Kreiramo asocijativni niz gde su kljucevi gradovi, a vrednosti su objekti sa populacijom i zlatom
    let cities = {};
    let command = arr.shift();
    while (command !== "Sail") {
        let [name, population, gold] = command.split("||");
        population = Number(population);
        gold = Number(gold);

        if (!cities.hasOwnProperty(name)) {
            cities[name] = {};
            cities[name].population = population;
            cities[name].gold = gold;
        } else {
            cities[name].population += population;
            cities[name].gold += gold;
        }

        command = arr.shift();
    }

    // 2) Posle Sail komande, citaju se komande "Plunder" ili "Prosper", sve do "End" komande
    command = arr.shift();
    while (command !== "End") {
        let tokens = command.split("=>");
        let event = tokens[0];
        let town = tokens[1];

        if (event === "Plunder") {
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            cities[town].population -= people;
            cities[town].gold -= gold;
            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            }
        } else if (event === "Prosper") {
            let gold = Number(tokens[2]);
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }

        command = arr.shift();
    }

    // 3) Na kraju ispis
    let remainingCities = Object.keys(cities);
    if (remainingCities.length > 0) {
        console.log(`Ahoy, Captain! There are ${remainingCities.length} wealthy settlements to go to:`);
        for (let town of remainingCities) {
            console.log(`${town} -> Population: ${cities[town].population} citizens, Gold: ${cities[town].gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);        
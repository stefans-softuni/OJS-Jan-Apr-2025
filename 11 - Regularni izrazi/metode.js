// Metoda regexp.test(string): Odredjuje da li postoji poklapanje po regexp-u (true ili false)

let text = 'Today is 2025-04-02';
let regexp = /\d{4}-\d{2}-\d{2}/g;

let result = regexp.test(text);
console.log(result);


// Metoda string.match(regexp): Vraca niz stringova sa kojima ima poklapanje

let text2 = 'Peter: 123, Mark: 456';
let regexp2 = /([A-Z][a-z]+): (\d+)/g;

let result2 = text2.match(regexp2);
console.log(result2);

// Ispis svih stringova sa kojima ima poklapanje: iteracija po nizu
for (let x of result2) {
    console.log(x);
}

// Nedostatak match metode je da ne moze da izdvoji podizraze



// Metoda regexp.exec(string): Vraca niz na koji ukazuje pointer, i pointer podesava na sledeci string
// Kao match metoda, samo ne vraca sve stringove odjednom, nego jedan po jedan
// I moze da vrati pojedinacne podizraze

/*
let s1 = regexp2.exec(text2);
console.log(s1);
s1 = regexp2.exec(text2);
console.log(s1);
s1 = regexp2.exec(text2);
console.log(s1);
*/

let s1 = regexp2.exec(text2);
while (s1 !== null) {
    let stringKojiTrazimo = s1[0];
    let prvaGrupa = s1[1];
    let drugaGrupa = s1[2];
    console.log(`String: ${stringKojiTrazimo}, Grupa1: ${prvaGrupa}, Grupa2: ${drugaGrupa}`);
    s1 = regexp2.exec(text2);
}


// Metoda string.replace(regexp, stringReplacement): menja sva poklapanja sa stringReplacement

let text3 = 'Peter: 123, Mark: 456';
let regexp3 = /\d{3}/g;

let result3 = text3.replace(regexp3, '999');
console.log(result3);


// Metoda string.split(regexp): konvertuje niz u string, a separator je dat sa regexp
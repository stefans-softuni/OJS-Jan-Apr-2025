let str = "SoftUniRSSoft";

// Za pristup karatkerima, postoje tri nacina:

// 1) Preko operatora []
// 2) Preko metode charAt()
// 3) Preko metode at() (od verzije ES2022)

console.log(str[-2]);        // undefined
console.log(str.charAt(-2)); // "" 
console.log(str.at(-2));     // "R"


// Metoda charCodeAt(idx):  Vraca kod karaktera sa indeksom idx
console.log(str.charCodeAt(2));   // 102 ('f')
console.log(str.charCodeAt(-2));  // NaN


// Metoda concat(str):  Za konkatenaciju stringova (concat() isto sto i +, znaci ne menja operande)
let str2 = " Osnove JS";
let str3 = str.concat(str2);
console.log(str, str2, str3);


// Metoda indexOf(str): Vraca indeks PRVOG pojavljivanja str, ili -1 ako str ne postoji (vraca broj)
console.log(str.indexOf("SoftUni"));   // 0

// Kako proveriti da li neki string sadrzi drugi?
if (str.indexOf("RS") !== -1) {
    console.log(`String "${str}" sadrzi rec "RS"`);
}


// Metoda lastIndexOf(str): Vraca indeks POSLEDNJEG pojavljivanja str, ili -1 ako str ne postoji (vraca broj)
console.log(str.lastIndexOf('f'));  // 11

// Kako proveriti da li neki string sadrzi drugi?
if (str.lastIndexOf("RS") !== -1) {
    console.log(`String "${str}" sadrzi rec "RS"`);
}


// Metoda includes(str): Proverava da li se str nalazi kao podstring datog stringa (vraca true/false)
console.log(str.includes("RS"));      // true
console.log(str.includes("Softuni")); // false


// Za ekstrakciju podstringova, postoje 3 metode:
// 1) slice(startIdx, endIdx = null)
// 2) substring(startIdx, endIdx = null)
// 3) substr(startIdx, length)  (DEPRECATED!)

// Metoda slice(): Izvlaci podstring (od indeska startIdx do indeksa endIdx, ne ukljucujuci endIdx) i vraca podstring
// Parametri mogu da budu negativne vrednosti
// str = "SoftUniRSSoft"

let str4 = str.slice(4, 7);   // "Uni"
console.log(str4);
console.log(str.slice(7));  // "RSSoft"
console.log(str.slice(-6)); // "RSSoft"
console.log(str.slice(-6, -4));  // "RS"


// Metoda substring(): Isto kao i slice(), samo negativne vrednosti parametara tretira kao 0
console.log(str.substring(4, 7));   // "Uni"
console.log(str.substring(-6));     // "SoftUniRSSoft"


// Metoda substr(): Isto kao i slice(), samo je drugi parametar duzina podstringa
// DEPRECATED!!! (ne preporucuje se koriscenje)

console.log(str.substr(4, 3));   // Ovo je isto kao i str.slice(4, 7)   ("Uni")


// Metoda replace(search, replace): Menja prvo pojavljivanje search podstringa u replace
// Ne menja originalni string, nego vraca promenjeni string
let str5 = "U okviru SoftUni-a ucimo JavaScript i Java programske jezike";
let str6 = str5.replace("Java", "Python");
console.log(str5);
console.log(str6);


// Metoda replaceAll(search, replace): Menja SVA pojavljivanja search podstringa u replace
// Ne menja originalni string, nego vraca promenjeni string
// NAPOMENA!!! Dostupna u novoj verziji JavaScripta!
let str7 = str5.replaceAll("Java", "Python");
console.log(str5);
console.log(str7); 


// Metoda split(delimiter): Konvertuje string u niz podstringova razdvojenih delimiter
// (vise puta radjena do sada)



// Metoda repeat(num):  Vraca string ponovljen num puta
console.log("SoftUni".repeat(3));   



// Metoda trim(): Krati visak razmaka sa pocetka i kraja stringa
// Metoda trimStart(): Isto, samo sa pocetka
// Metoda trimEnd(): Isto, samo sa kraja
console.log("      Soft Uni    RS      ".trim());


// Metoda startsWith(str): Proverava da li string pocinje sa str (vraca bool)
// Metoda endsWith(str): Proverava da li se string zavrsava sa str (vraca bool)
console.log("SoftUniRS".startsWith("Soft"));


// Metoda padStart(length, str): Dodaje str na pocetak sve dok duzina rezultujuceg stringa ne postane length
// Metoda padEnd(length, str): Dodaje str na kraj sve dok duzina rezultujuceg stringa ne postane length
console.log("Mart".padStart(10, "*"));
console.log("April".padEnd(10, "_"));
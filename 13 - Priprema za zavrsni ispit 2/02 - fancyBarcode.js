// regex.test(str) metodu koristiti samo kada se jedanput poziva nad regex
// inace, ako vise stringova treba nad regex da se testira, koristiti str.match(regex)

function solve(arr) {
    let n = Number(arr.shift());
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;

    for (let i = 0; i < n; i++) {
        let barcode = arr.shift();
        let m = barcode.match(pattern);   // vraca null ako nema poklapanja, vraca niz poklapanja ako ga ima

        if (m) {
            let productGroup = '';
            let digitPattern = /\d/g;
            let allDigits = barcode.match(digitPattern);   //  test primer: barcode="@##Che4s6E@##", allDigits=['4', '6']
            if (allDigits) {
                productGroup = allDigits.join("");         //  test primer: productGroup = "46"
            } else {
                productGroup = "00";
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

/*
solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);    
*/

solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);    
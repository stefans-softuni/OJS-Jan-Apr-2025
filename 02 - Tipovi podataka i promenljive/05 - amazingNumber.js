function solve(num) {
    // 1) Treba konvertovati num u string
    let str = `${num}`;

    // 2) Idemo po karakterima stringa `str`, konvertujemo karaktere u cifre i sabiramo ih
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    // 3) Treba proveriti da li broj sum sadrzi cifru 9
    // (konvertujemo sum u string, i proveravamo da li taj string sadrzi karakter '9')
    let sumStr = `${sum}`;
    if (sumStr.includes("9")) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

solve(1233);
solve(999);
// 15 / 4 = 3 "cele cetvorke", i ostatak je 3   (15 = 4 *   3   +   3   )
//                                                        (kol)   (ost)
// 15 % 4 ->  3

function solve() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

// solve();

function solve2() {
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
}

solve2();
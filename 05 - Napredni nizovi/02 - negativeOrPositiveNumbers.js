function solve(arr) {
    let result = [];
    for (let elem of arr) {
        let num = Number(elem);
        if (num >= 0) {
            result.push(num);
        } else {
            result.unshift(num);
        }
    }
    console.log(result.join("\n"));
}

solve(['7', '-2', '8', '9']);


// string -> niz  (split(delimiter))
// "a-b-c".split("-")  =>  ["a", "b", "c"]


// niz -> string  (join(delimiter))
// ["a", "b", "c"].join("-")  =>   "a-b-c"
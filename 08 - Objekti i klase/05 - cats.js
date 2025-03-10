function solve(arr) {
    class Cat {
        constructor(n, a) {
            this.name = n;
            this.age = a;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let catInfo of arr) {
        let tokens = catInfo.split(" ");
        let catName = tokens[0];
        let catAge = tokens[1];
        let cat = new Cat(catName, catAge);
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);


/*
let c = new Cat("Mellow", 2);
console.log(c);
c.meow();

let d = new Cat("Tom", 5);
d.meow();
*/
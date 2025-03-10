class Student {
    constructor(n, g) {
        this.name = n;
        this.grade = g;
    }
}

let s1 = new Student("Pera", 5);   // s1.name = "Pera", s1.grade = 5
console.log(s1);

let s2 = new Student("Jelena", 4.8);  // s2.name = "Jelena", s2.grade = 4.8
console.log(s2);

s2.grade = 4;
s2.hairColor = "black";
console.log(s2);
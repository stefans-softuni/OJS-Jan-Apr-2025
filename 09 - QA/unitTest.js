/*
Koraci:
1) U terminalu, pozicionirati se u folder `09 - QA`, i pokrenuti komandu: npm install mocha
2) U terminalu, pokrenuti komandu: mocha .\unitTest.js
3) Ako se umesto describe funkcije koristi suite, pokrenuti komandu: mocha --ui tdd .\unitTest.js
*/


const { describe, it } = require("node:test");
const { sum } = require("./sum.js");
const assert = require("assert");


describe("Testiranje funkcije sume elemenata niza sum(arr)", function() {
    it("Da li je sum([1, 2]) == 3", function() {
        assert.equal(sum([1, 2]), 3);
    });
    it("Da li je sum([]) == 0", function() {
        assert.equal(sum([]), 0);
    });
    it("Da li je sum([5, -1, 2]) == 6", function() {
        assert.equal(sum([5, -1, 2]), 6);
    });
});
// Za ovaj nacin, u konzoli treba pozvati komandu mocha .\unitTest.js


/*
suite("Testiranje funkcije sume elemenata niza sum(arr)", function() {
    test("Da li je sum([1, 2]) == 3", function() {
        assert.equal(sum([1, 2]), 3);
    });
    test("Da li je sum([]) == 0", function() {
        assert.equal(sum([]), 0);
    });
    test("Da li je sum([5, -1, 2]) == 6", function() {
        assert.equal(sum([5, -1, 2]), 6);
    });
});
// Za ovaj nacin, u konzoli treba pozvati komandu mocha --ui tdd .\unitTest.js
*/
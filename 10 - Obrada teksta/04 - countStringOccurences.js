/*function solve(text, word) {
    let count = 0;
    while (text.includes(word)) {
        count++;
        text = text.replace(word, "");
        console.log(text);
    }
    console.log(count);
}
// Ovo ne moze u ovom zadatku, jer se trazi broj pojavljivanja RECI, a ne podstringa    
*/

function solve(text, word) {
    let allWords = text.split(" ");
    let count = 0;
    for (let w of allWords) {
        if (w == word) {
            count++;
        }
    }
    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');
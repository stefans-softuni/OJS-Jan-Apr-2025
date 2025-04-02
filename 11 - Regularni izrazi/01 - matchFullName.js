function solve(text) {
    let regexp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let allMatches = text.match(regexp);
    let result = allMatches.join(' ');
    console.log(result);
}


solve(" Peter Smith, peter smith, Peter smith, peter Smith, PEter Smith, Peter SmIth, Lily Everett");
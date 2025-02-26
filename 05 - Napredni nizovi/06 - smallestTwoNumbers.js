function solve(arr) {
    /*let sortedArray = arr.sort( (x, y) => x - y );
    let result = sortedArray.slice(0, 2);
    console.log(result.join(" "));*/
    console.log( 
        arr.sort( (x, y) => x - y )
        .slice(0, 2)
        .join(" ") 
    );
}

solve([3, 0, 10, 4, 7, 3]);
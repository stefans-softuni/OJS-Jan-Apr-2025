function solve(arr) {
    class Song {
        constructor(tl, n, d) {
            this.typeList = tl;
            this.name = n;
            this.time = d;
        }
    
        print() {
            console.log(this.name);
        }
    
        printTest() {
            console.log(`Song: ${this.name}, time: ${this.time}, list type: ${this.typeList}`);
        }
    }

    let n = Number(arr.shift());
    let filter = arr.pop();
    for (let i = 1; i <= n; i++) {
        let songInfo = arr.shift();   // 'favourite_DownTown_3:14'
        let tokens = songInfo.split("_");
        let typeList = tokens[0];
        let name = tokens[1];
        let time = tokens[2];
        let song = new Song(typeList, name, time);
        if (filter == typeList || filter == "all") {
            song.print();
        }
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

//let s = new Song("favourite", "DownTown", "3:14");
//s.printTest();
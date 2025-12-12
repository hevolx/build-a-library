// Parent class
class Media {
    constructor(title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    //#region "getters & setters"
    get ratings() {
        return this._ratings;
    }
    
    get title() {
        return this._title;
    }
    
    get isCheckedOut() {
        return this._isCheckedOut;
    }

    set isCheckedOut(bool) {
        this.isCheckedOut == bool;
    }
    //#endregion

    //#region "methods"
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
   
    getAverageRating() {
        // Se dokumentation angående .reduce()
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce?v=example
        const ratingSum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return Math.floor(ratingSum / this._ratings.length);
    }
        
    addRating(rating) {
        if (rating > 5 || rating == 0) {
            return console.log('only ratings between 1-5 accepted')
        } else {
            return this._ratings.push(rating);
        }
    }
    //#endregion
}

//#region "Subclasses"
class Book extends Media {
    constructor(author, title, pages, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
        this._author = author;
        this._pages = pages;
    }

    //#region "getters"
    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
    //#endregion
}

class Movie extends Media {
    constructor(director, title, runTime, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
        this._director = director;
        this._runTime = runTime;
    }

    //#region "getters"
    get director() {
        this._director;
    }

    get runtTime() {
        this._runtTime;
    }
    //#endregion
}

class CD extends Media {
    constructor(artist, title, songs, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings)
        this._artist = artist;
        this._songs = [];
    }

    //#region "getters"
    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
    //#endregion

    addSongs(songs) {
        return this._songs.push(...songs);
    }

    /** @function Fisher-Yates random sorting algorithm */
    shuffle() {
        for(let i = this._songs.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));

            [this._songs[i], this._songs[random]] = [this._songs[random], this._songs[i]];
        }
    }
}
//#endregion

//#region "Instances"
// Book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(`Is checked: ${historyOfEverything.isCheckedOut}`); // true

historyOfEverything.addRating(3);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);

console.log(`Average rating: ${historyOfEverything.getAverageRating()}`);

// Movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(`Is checked: ${speed.isCheckedOut}`);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(`Average rating: ${speed.getAverageRating()}`);

// CD instance
const greatTaste = new CD('Lana del Ray', 'Brooklyn Baby');

greatTaste.addSongs(['Brooklyn Baby', 'Ultraviolence', 'Sad girl', 'Summertime Sadness']);

greatTaste.shuffle();
console.log(greatTaste.songs);

greatTaste.addRating(5);
greatTaste.addRating(5);
greatTaste.addRating(3);

console.log(`Average rating: ${greatTaste.getAverageRating()}`);
//#endregion
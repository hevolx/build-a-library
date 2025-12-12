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
        return ratingSum / this._ratings.length;
    }
        
    addRating(rating) {
        return this._ratings.push(rating);
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

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
        this.director = director;
        this.runTime = runTime;
    }

    get director() {
        this.director;
    }

    get runtTime() {
        this.runtTime;
    }
}
//#endregion

//#region "Instances"
// Book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

console.log(historyOfEverything.isCheckedOut); // false
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // true

historyOfEverything.addRating(3);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

// Movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
//#endregion
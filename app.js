// Parent class
class Media {
    constructor(title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
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
        if (this._isCheckedOut == true) 
        {
            return this._isCheckedOut == false;
        } else {
            return this._isCheckedOut == true;
        }
    }
   
    getAverageRating() {
        //  Se dokumentation: [.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce?v=example)
        const ratingSum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return ratingSum / this._ratings.length;
    }
        
    addRating(rating) {
        rating.push(this._ratings);
    }
    //#endregion
}
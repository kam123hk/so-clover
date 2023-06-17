export class Card {
    constructor(card) {
        this._words = card
        this.orientation2 = 0
    }
    get words() {
        const numberOfWords = this._words.length
        return this._words.map((_, index, arr) => arr[(index + this.orientation2) % numberOfWords]) 
                }
    get clockwise() {
        this.orientation2 += 3;
        return this.words;
                    }
    get antiClockwise() {
        this.orientation2 += 1;
        return this.words;
    }
    }

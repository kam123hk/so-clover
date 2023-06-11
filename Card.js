export class Card {
    constructor(words) {
        this._words = words
        this.orientation = 0
    }
    get words () {
        const numberOfWords = this._words.length
        return this._words.map((_, index, arr) => arr[numberOfWords - index - this.orientation]) 
        
    }
}
import { Wordlist } from './Wordlist.js';

export class Card {
    constructor(wordlist) {
        this._words = this.generateWords(wordlist);
        this.orientation2 = 0;
        this.boardPosition = null;
        this.offBoardPosition = null;
    }

    generateWords(array) {
        const newCard = array.slice(0,4);
        array.splice(0,4);
        return newCard
    }

    get words() {
        const numberOfWords = this._words.length
        return this._words.map((_, index, arr) => arr[(index + this.orientation2) % numberOfWords]) 
    }

    clockwise() { 
    this.orientation2 += 3; 
    }

    anticlockwise() {
        this.orientation2 += 1;
    }
}
 
// now all the rotating is done on the board.




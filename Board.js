import flatten from "lodash/flatten.js";

export class Board {
    constructor(cards) {
        this.cards = cards
        this.clues = [];
    }
    get edgeWords () {
        const words = this.cards.map((card, cardIndex) => card.words.filter((word, wordIndex) => wordIndex === cardIndex));
        return flatten(words);
    }
}
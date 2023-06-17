import flatten from "lodash/flatten.js";
// import {Card} from './Card.js';

export class Board {
    constructor(slots) {
        this.cards = null;
        this.slots = slots;
        this.clues = ['clue1', 'clue2', 'clue3', 'clue4'];
        this.orientation = 0;
        this.cardOrientation = 0;
    }
    addCard(card) {
        // if (this.card === null)
        {
        this.cards = card;
        this.cardOrientation = card.orientation2;
        
        // this.cards.orientation2 = card.orientation;
                        }
            }
    removeCard(card) {
        if (this.cards) {
        // this.cards.orientation2 += this.orientation; (wrong)
        // card.orientation2 += this.cardOrientation; (wrong)
        // card.orientation2 = this.cardOrientation; (WHY IS THIS WRONG?!!)
        this.cards = null;
                        }
            }
    get edgeWords () {
        const words = this.cards.map((card, cardIndex) => card.words.filter((word, wordIndex) => wordIndex === cardIndex));
        return flatten(words);
                    }
    get clueWords() {
        const numberOfClues = this.clues.length;
        
        const boardClues = this.clues.map((clue, index, arr) => arr[(index + this.orientation) % numberOfClues]);
        const emptyCard = [];
        if (this.cards !== null) {
        //    this.cards.orientation2 = 
            const cardsOnBoard = this.cards._words.map((_, index, arr) => arr[(index + this.cards.orientation2) % numberOfClues]);
        return {cardsOnBoard, boardClues};
                    } else {
                        return {emptyCard, boardClues};
                    }
                }
    clockwise() {
        if (this.cards !== null) {
            this.cardOrientation += 3;
            this.cards.orientation2 = this.cardOrientation;
           // card.orientation2 = this.cardOrientation;
        }
        this.orientation += 3;
                }
    antiClockwise() {
        if (this.cards !== null) {
            this.cardOrientation += 1;
           this.cards.orientation2 = this.cardOrientation;
        }
        this.orientation += 1;
                        }
    }
    

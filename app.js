import {Card} from './Card.js'
import wordlist from "wordlist-english";
import shuffle from "lodash/shuffle.js";
import { Board } from './Board.js';
import { Slot } from './Slot.js';
// import { remove } from 'lodash';

const commonWords = wordlist["english/10"];
const shuffledEnglishWords = shuffle(commonWords);
const words = shuffledEnglishWords.filter(word => word.length > 3).slice(0, 4);
const words2 = ['a', 'b', 'c', 'd'];
const words3 = [1,2,3,4];
const words4 = ['alpha', 'beta' , 'gamma', 'delta'];
const card = new Card(words); // new card
const card2 = new Card(words2);
const card3 = new Card(words3);
const card4 = new Card(words4);
console.log(card4.words);
console.log(card.words); 
const slots = new Slot();
const board = new Board(slots); //log board
console.log(board.clueWords);
board.addCard(card); // adds cards to board
board.removeCard(card); // removes card from board
card.clockwise; // rotates card clockwise
board.antiClockwise(); // rotates board anti-clockwise
console.log(board.clueWords);
console.log(card.words);
board.addCard(card);
board.addCard(card2);
console.log(board.clueWords); 
console.log(slots.slot);
slots.add(card4.words, 1);
slots.add(card2.words, 0);
console.log(slots.slot);
slots.remover(1);
console.log(slots.slot);


// the card2 replaces the card in board.cards so i need 3 more card properties for the board?
// need a slot class. each slot moves clockwise or anti depending on board rotation. so could do slot as empty 4-array? cycles as rotation of board occurs. 
//change the board.poop so that it only returns the state of the clues on the board.
// continuing above, the slot class can determine the cards in the middle (if card in slot, then displays card, but card class still shows orienatation of card)
// all this means that each class is responsible for one thing, so board.poop returns clues, card.poop returns card, slot.whatever returns card positions within the middle grid.
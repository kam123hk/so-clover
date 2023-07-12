import {Card} from './Card.js'
import wordlist from "wordlist-english";
import shuffle from "lodash/shuffle.js";
import { Board } from './Board.js';
import {Wordlist} from './Wordlist.js';
// import { remove } from 'lodash';

function generateBoards(gameWords) {
  let numberOfPlayers = 2;
  let boards = [];
  for (let i = 0 ; i < numberOfPlayers; i++ ) {
    boards[i] = new Board(gameWords);
  }
  return boards;
}

const _wordlist = new Wordlist(wordlist["english/10"]);
const boards = generateBoards(_wordlist.gameWords);


console.log(boards[0].cards);
// console.log(board.slots);
console.log(boards[1].cards[0]);
boards[1].boardClockwise();

console.log(boards[1].cards[0]._words);

console.log(boards[1].cards[0].words);
console.log(boards[1].originalCards);

console.dir(boards[1]);
/*
const shuffledEnglishWords = shuffle(commonWords);
const words1 = shuffledEnglishWords.filter(word => word.length > 3).slice(0, 4);
const words2 = ['a', 'b', 'c', 'd'];
const words3 = [1,2,3,4];
const words4 = ['alpha', 'beta' , 'gamma', 'delta'];
const card1 = new Card(words1); // new card
const card2 = new Card(words2);
const card3 = new Card(words3);
const card4 = new Card(words4);
const card5 = 'pooopop';
const cards = [card1,card2,card3,card4];
const board = new Board(cards);
board.getCardsOnBoardPosition;
console.log(card4.words);
board.addCardToBoard(0,4); // card1 in Slot4, null in Card0
board.boardClockwise();
board.cardClockwise(0);
board.cardClockwise(1);
board.cardAnticlockwise(2);
board.boardClockwise();
board.addCardToBoard(1,0);
board.cardClockwise(1);
board.cardAnticlockwise();
board.cardAnticlockwise(1);
board.addCardToBoard(3,1);
board.slotAnticlockwise(1);
board.slotClockwise(0);
console.log(board);
console.log(card5);
*/

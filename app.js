import {Card} from './Card.js'
import wordlist from "wordlist-english";
import shuffle from "lodash/shuffle.js";

const commonWords = wordlist["english/10"];
const shuffledEnglishWords = shuffle(commonWords);
const words = shuffledEnglishWords.filter(word => word.length > 3).slice(0, 4);
const card = new Card(words);
card.orientation = 1;
console.log(card.words);


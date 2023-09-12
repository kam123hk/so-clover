import {_wordlist, updateBoard2} from './app.js'; // import flatten from "lodash/flatten.js";
import {Card} from './Card.js';
import {soCloverWords} from './app.js'; import {duetWords} from './app.js'; import {undercoverWords} from './app.js'; import {codenamesWords} from './app.js'; // 5/9/23 newly imported words from codenames x3
import { difficulty } from './app.js'; // 31/8/23
export class Board {
        constructor(wordlist) {
        this.cards = this.generateCards(wordlist); // ORIGINALLY ITS AN ARRAY [...this.generateCards(wordlist)]
        this.originalCards = [...this.cards];
        this.slots;      //STRANGLEY, IF this.slots = [] or anything defined, THEN THE for loop for this.slots in the generateCards function has no effect. ASK DAN. 
        this.clues = ['clue1', 'clue2', 'clue3', 'clue4'];
        this.orientation = 0;
        } 


 // let currentPressedButtonId = null;  // the buttonId of button that is currently pressed (null means no button pressed)
  toggleButton(buttonId) {
  const button = document.getElementById(buttonId); // button id of toggled button in html body (what you are pressing now)
  if (button === currentPressedButtonId) {    // if button id of toggled is same as id of button currently pressed
    
    currentPressedButtonId = null;    // denotes no button is pressed (unpress this buttonId) so no buttons pressed on the board
    button.classList.remove('pressed'); // Remove the pressed class from this buttonId
    button.classList.add('unpressed'); // Add the unpressed class to this buttonId
  } else if (currentPressedButtonId === null) {
    currentPressedButtonId = button;
    
    button.classList.remove('unpressed');
    button.classList.add('pressed');
  } else {
    
    boards[0].addCardToBoard(boards[0].cards,parseInt(currentPressedButtonId),boards[0].cards,parseInt(button));
   // currentPressedButtonId.classList.remove('pressed');
   // currentPressedButtonId.classList.add('unpressed');
   // button.classList.remove('unpressed');
   // button.classList.add('pressed');
    currentPressedButtonId = button;
    updateBoard2();
  }
}
  


        generateCards(wordlist) {
        this.cards = [];   //I THINK I NEED this.cards here because even though its in board class, IT NEEDS TO KNOW IT IS AN ARRAY??
        //this.originalCards = [];
this.slots = [];
//let ploopy = [];
        for (let i = 0 ; i < 4 ; i++) {
 this.cards[i] = new Card((wordlist));
//ploopy[i] = new Card(wordlist);
//console.log(this.cards);
          }
        for (let i = 0 ; i < 4 + difficulty; i++) { // 31/8/23 WAS just i < 6
            this.slots[i] = null;               //ADDED THIS TO CREATE SLOTS, ASK DAN WHY.. (see this.slots in Board class above)
        
    }
    
    
    
        this.getCardsOnBoardPosition; // THIS WAS ORIGINALLY HERE> BUT CAUSES ERROR WHEN TOGETHER WITH PLOOPY


return this.cards;
//return ploopy;
        }
        
        // reset back to board orientation 0 to check against originalCards
        get reset() {
          while (this.orientation % 4 !== 0) {
            this.boardClockwise()
          };
        }

        //only need to check first word of each _words:
        removeIncorrectCards() { 
const currentBoardOrientation = this.orientation % 4; // 7/8/23 NEED THIS FOR LATER ON IN THIS FUNCTION
// 17/8/23 removed these two lines: if (this.cards.some( _ => _ === null )) {
// return console.log('You foolish person, you need to fill all the spaces on the board with a card before submitting your guess!');} else {
            this.cards.forEach( _ => _.orientation2 = _.orientation2 % this.cards.length);
this.slots.forEach((element, index, arr) => {
if (element !== null && index !== this.cards.length + difficulty - 1) {  // 6/8/23 SENDS CARD NOT PUT ON BOARD TO END OF SLOTS
    arr[this.cards.length + difficulty - 1] = element;                     // 8/8/23 NOW REMOVED THIS forEach (see below)
         // 31/8/23 These 7 lines from this.slots.forEach onwards now reinstated, with 'difficulty' instead '5'.
    arr[index] = null;
  }
});
      //      this.slots.map( (_, index, arr) => { 
       //       if (_ !== null && index !== this.slots.length - 1) {
       //         arr[this.slots.length - 1] = _;
      //          arr[index] = null; console.log(arr[index]);} else {    // 6/8/23 NOW HAVE FIXED this.slots.map, CARD NOT USED IN GUESS TO GO TO END OF SLOT
      //          return _;                     // BUT SHOULD CONSIDER NOT USING .MAP AS CREATES NEW ARRAY BUT I ONLY WANT TO CHANGE ELEMENTS
      //          }
      //        })
       //       console.log(this.slots);
       this.reset;    // 6/8/23 NEEDED THIS TO RESET BOARD BEFORE CHECKING CARDS
         for ( let i=0; i < this.cards.length; i++)  { 
          if (this.cards[i].words[0] !== this.originalCards[i]._words[0] )  { // 5/8/23 CHANGED _words to .words in this.cards[i] now working as intended (essentially checking the orientation of the card as well)
            this.cards[i].orientation2 += currentBoardOrientation;
            this.addCardToBoard(this.cards, i, this.slots, (i+4-currentBoardOrientation)%4); // 5/9/23 NOW cards are send to the ith slot no matter the board orientation
          if (this.cards[i] !== null) {     //8/8/23 ADDED if STATEMENT TO REMOVE forEach ABOVE (extra card only sent to end of slots if it replaced a card from board)
            this.addCardToBoard(this.cards, i, this.slots, 5); // 5/9/23 ACTUALLY this if is redundent now, as spare card always sent to end
          } } ;
         }
for (let i=currentBoardOrientation ; i > 0 ; i--) { this.boardAnticlockwise() };
// 7/8/23 for LOOP ABOVE GETS THE ORIENTATION SAME AS BEFORE RESET. NEED THIS AS BOARD NOT UPDATED AFTER GUESS SUBMITTED, BUT CARDS ARE RESET.
// 17/8/23 removed the 'You're foolish statement for not submitting all cards        }

        }

        // this pushes (up to) six null at the end of slots to initalise the slots (NOT ANYMORE 5/8/23, see below). Then as long as there are cards on the board, they will be placed in a random slot. This function is only done once as part of the card initialisation.
        randomise() {
        this.cards.forEach( element => {
           
            element.orientation2 = Math.floor(Math.random()*this.cards.length);
          
          });

        let usedSlotIndex = [];
//        let difficulty = 1; 31/8/23 WAS = 2 for two extra slots (now difficulty is exported from app.js)
//      for (let i=0; i < this.cards.length + difficulty; i++) {    // 5/8/23 DONT NEED THIS ANYMORE IF I 
//        this.slots.push(null);                                    //ALREADY HAVE SLOTS ON BOARD AT START
//        };
        const extraCardPosition = Math.floor(Math.random() * (this.cards.length + difficulty));
        let extraCard = new Card(soCloverWords);
  
        while (this.clues.some( clue => extraCard._words.some( word => clue.toLowerCase() === word.toLowerCase() ) )) {
          extraCard = new Card(soCloverWords);
        }  // 7/8/23 NOW CANNOT HAVE CLUE WORDS IN EXTRA CARD WITH THIS while LOOP (GETS NEW CARD ALONG THE WORDLIST)
   
        this.slots.splice(extraCardPosition, 1, extraCard);
        usedSlotIndex.push(extraCardPosition);
        while (this.cards.some( _ => _ !== null)) {
          for (let i = 0; i < this.cards.length; i++) {
          let index = Math.floor(Math.random() * this.slots.length);
        if ( !usedSlotIndex.includes(index) && this.cards[i] !== null) {
          usedSlotIndex.push(index);
          this.addCardToBoard(this.cards, i, this.slots, index); } }  }
        this.getCardsOnBoardPosition;
        this.getCardsOffBoardPosition;
        }
        
        // Initialises the cards onto the board. This is the only function of this getter. BUT CHECK, IT IS INITIALISE SOMEWHERE....
        get getCardsOnBoardPosition() {
          this.cards.forEach(card => {
          if (card !== null)
          {card.boardPosition = this.cards.indexOf(card);
          card.offBoardPosition = null}
                         } );
                        }
        
        // gets card's off board position. CHECK WHERE ELSE IT IS INITIALISED...
        get getCardsOffBoardPosition() {
          this.slots.forEach(card => {
          if (card !== null)
          {card.offBoardPosition = this.slots.indexOf(card);
          card.boardPosition = null};
                                 }
                            );
                         }
        
        cardClockwise(index) {
          if (this.cards[index] !== null)
          this.cards[index].clockwise();
        }
        cardAnticlockwise(index) {
          if (this.cards[index] !== null)
          this.cards[index].anticlockwise();
        }
        slotClockwise(index) {
          if (this.slots[index] !== null)
          this.slots[index].clockwise();
        }
        slotAnticlockwise(index) {
          if (this.slots[index] !== null)
          this.slots[index].anticlockwise();
        }

        // board goes clockwise: orientation changes for each card on board, and for the board clues itself, and for the cards on board.
        boardClockwise() {
          for (let i = 0; i < 4; i++) {
            this.cardClockwise(i);
            // adds 1 to board position (mod 4) so new board position. this is incongruous to orientation definitions but WHO CARES???
             if (this.cards[i] !== null)
             {this.cards[i].boardPosition = (this.cards[i].boardPosition + 1) % 4 };
             };
        // below is the card changing position. NEED TO DESIGN A GETTER THAT SHOWS WHAT boardPosition ACTUALLY MEANS FOR THE CARD???
        
            this.orientation += 3;  // I PUT index + 3 instead of INDEX + THIS.ORIENTATION. CHECK THIS WORKS BELOW:
            this.cards = this.cards.map( (_, index, arr) => arr[ (index + 3) % 4]);
            this.clues = this.clues.map( (_, index, arr) => arr[  (index + 3) % 4] );
          
          // so the cards rotate clockwise too. i guess everything is relative to person viewing the screen:

        ;
        }
        boardAnticlockwise()
            {for (let i = 0; i < 4; i++) {
                this.cardAnticlockwise(i);
           if (this.cards[i] !== null)
             {this.cards[i].boardPosition = (this.cards[i].boardPosition + 3) % 4 }; 
              }  
          this.orientation += 1;

          //WHAT I DID BEFORE WAS DEFINE THIS.CARDS IN TERMS OF this.orientation?? SO DO I NEED TO CHANGE BELOW?? OR AT LEAST index +1??
          this.cards = this.cards.map( (_, index, arr) => arr[ (index + 1) % 4] );
          this.clues = this.clues.map( (_, index, arr) => arr[ (index + 1) % 4] );

        }
        
// index1 is the slot position, index 2 is the board position. This swaps cards (or null)
        addCardToBoard(arr1, index1, arr2, index2) {
        const placedCard = arr1[index1];
        const replacedCard = arr2[index2]; 
        arr2.splice(index2, 1, placedCard);  
        arr1.splice(index1, 1, replacedCard);
        
        /* NOT NEEDED:
        if (this.cards[index2] !== null && this.slots[index1] !== null) {
        this.cards[index2].boardPosition = index2 ;
        this.slots[index1].offBoardPosition = index1} else if (
        this.cards[index2] === null && this.slots[index1] !== null) {
        this.slots[index1].offBoardPosition = index1} else if (
        this.cards[index2] !== null && this.slots[index1] === null) {
        this.cards[index2].boardPosition = index2};
        */
       
         this.getCardsOnBoardPosition;
         this.getCardsOffBoardPosition;
        }
}


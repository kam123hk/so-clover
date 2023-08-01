import {updateBoard2} from './app.js'; // import flatten from "lodash/flatten.js";
import {Card} from './Card.js';

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
    console.log('poopywoopy');
    currentPressedButtonId = null;    // denotes no button is pressed (unpress this buttonId) so no buttons pressed on the board
    button.classList.remove('pressed'); // Remove the pressed class from this buttonId
    button.classList.add('unpressed'); // Add the unpressed class to this buttonId
  } else if (currentPressedButtonId === null) {
    console.log('luupy');
    currentPressedButtonId = button;
    button.classList.remove('unpressed');
    button.classList.add('pressed');
  } else {
    console.log('tyiirp');
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
        for (let i = 0 ; i < 6; i++) {
            this.slots[i] = null;               //ADDED THIS TO CREATE SLOTS, ASK DAN WHY.. (see this.slots in Board class above)
        console.log(this.slots);
    }
    console.log('po');
    console.log(this.cards);
    console.log('poo');
        this.getCardsOnBoardPosition; // THIS WAS ORIGINALLY HERE> BUT CAUSES ERROR WHEN TOGETHER WITH PLOOPY
console.log(this.cards);
console.log('pootoyy');
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
         if (this.cards.some( _ => _ === null )) {
          return console.log('You foolish person, you need to fill all the spaces on the board with a card before submitting your guess!');} else {
            this.cards.forEach( _ => _.orientation2 = _.orientation2 % this.cards.length);
         for ( let i=0; i < this.cards.length; i++)  {
          if (this.cards[i]._words[0] !== this.originalCards[i]._words[0] )  {
          this.addCardToBoard(this.cards, i, this.slots, i) };
         }
        }
        }

        // this pushes (up to) six null at the end of slots to initalise the slots. Then as long as there are cards on the board, they will be placed in a random slot. This function is only done once as part of the card initialisation.
        randomise() {
        let usedSlotIndex = [];
        let difficulty = 2;
        for (let i=0; i < this.cards.length + difficulty; i++) {
          this.slots.push(null);
          };
        const extraCardPosition = Math.floor(Math.random() * (this.cards.length + difficulty));
        const extraCard = new Card(arrayOfWords);
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
console.log('i am ready');
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


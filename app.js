// import wordlist from "wordlist-english";


import {Card} from './Card.js'
// import wordlist from "./node_modules/wordlist-english";
// import shuffle from "lodash/shuffle.js";
import { Board } from './Board.js';
import {Wordlist} from './Wordlist.js';
// import { remove } from 'lodash';

function generateBoards(gameWords) {
    let numberOfPlayers = 1;
    let boards = [];
    for (let i = 0 ; i < numberOfPlayers; i++ ) {
      boards[i] = new Board(gameWords);
    }
  //updateBoard();
    return boards;
  }

const _wordlist = ['apple', 'block', 'carrot', 'duck', 'egret', 'fruit', 'good', 'hi','igloo','jog','kick','llama','manners','norse','ogle','poop','quick','rabbit','spout','tarot','ugly','vouch','wombat','xenophobe','yippee','zoo','a poo','be calm','cut off','dry it','egg him','for me','get at','hats off','i like','jack ass','kick out', 'lucky git', 'my food', 'nice play', 'on mars', 'pee wee', 'quota full', 'rise up', 'shit storm', 'too foolish', 'under over', 'volcano erupts', 'wee wee','x rated', 'your mum', 'zany bastard'];

// const _wordlist = new Wordlist(wordlist["english/10"]);

// const cardContainers = Array.from(document.getElementsByClassName('card-container'));
// const cardContainers = Array.from(document.getElementsByClassName('grid-item'));    //THIS ONE
/*
function updateBoard() {
  console.log('uyui');
  const gridElement = document.getElementById('grid');
  console.log(gridElement);
  // Clear existing content in the grid
  gridElement.innerHTML = '';
  // console.log(gridElement);
  // Iterate over each board and card
  boards.forEach((board) => {
    board.cards.forEach((card) => {
      console.log('Card boardPosition:', card.boardPosition);
      let cardContainer;
      if (card.boardPosition === 0) {
        cardContainer = cardContainers[0];
      } else if (card.boardPosition === 1) {
        cardContainer = cardContainers[1];
      } else if (card.boardPosition === 2) {
        cardContainer = cardContainers[2];
      } else {
        cardContainer = cardContainers[3];
      }
      console.log('Selected cardContainer:', cardContainer);
      console.log('tplppoo')
      cardContainer.innerHTML = ''; // Clear existing content in the card container
      cardContainer.appendChild(document.createTextNode(card.words.join('\n')));
      gridElement.appendChild(cardContainer);
    });
  });

} 
export { updateBoard }; */

  const boards = generateBoards(_wordlist); // Your implementation for generating boards
  //boards[0].getCardsOnBoardPosition;
  console.log('now lers see') ;
  console.log(boards[0].slots);
  console.log(boards[0]);
  //boards[0].boardClockwise();
  // boards[0].cardAnticlockwise(0);
  const gridElement = document.getElementById('grid');
console.log(gridElement);
  console.log('ypooppoo');
 // gridElement.innerHTML = '';
 //updateBoard();

// Get the rotate button element
const boardAnticlockwiseButton = document.getElementById('boardAnticlockwiseButton');
const boardClockwiseButton = document.getElementById('boardClockwiseButton');

// Add a click event listener to the button
boardAnticlockwiseButton.addEventListener('click', () => {
  boards[0].boardAnticlockwise();
  updateBoard2(); // Update the board after rotation
  unpressCards();
})
boardClockwiseButton.addEventListener('click', () => {
  boards[0].boardClockwise();
  updateBoard2();
  unpressCards();
});


const startGameButton = document.getElementById('startGameButton');
startGameButton.addEventListener('click', () => {
//  boards[0].getCardsOnBoardPosition;
 updateBoard2();
});
const card0ClockwiseButton = document.getElementById('card0ClockwiseButton');
card0ClockwiseButton.addEventListener('click', () => {
  const button = Array.from(document.getElementsByClassName('pressed'));
  const buttonNames = button.map(butt => butt.id);
  
  console.log(buttonNames);
  console.log(buttonNames[0].replace(/\D/g, "")); // DIGITS ONLY
  console.log(buttonNames[0].replace(/\d/g, "")); // LETTERS ONLY
  console.log(button[0].id);

  if (button.length > 0) {
    let buttonPosition = button[0].id.replace(/\D/g, "");
    if (button[0].id.includes('card')) {
      boards[0].cardClockwise(buttonPosition -1);
    } else if (button[0].id.includes('slot')) {
      boards[0].slotClockwise(buttonPosition -1);
    }
  }

  if (button[0].id.includes('card')) {console.log('i rotated')

  }
  
  //boards[0].cardClockwise(0);
  updateBoard2();
  updateSlots();
});
const card0AnticlockwiseButton = document.getElementById('card0AnticlockwiseButton');
card0AnticlockwiseButton.addEventListener('click', () => {
  const button = Array.from(document.getElementsByClassName('pressed'));
  if (button.length > 0) {
    let buttonPosition = button[0].id.replace(/\D/g, "");
    if (button[0].id.includes('card')) {
      boards[0].cardAnticlockwise(buttonPosition -1);
    } else if (button[0].id.includes('slot')) {
      boards[0].slotAnticlockwise(buttonPosition -1);
    }
  updateBoard2();
  updateSlots();
  }
});
const swapSlot0Card0Button = document.getElementById('swapSlot0Card0Button');
swapSlot0Card0Button.addEventListener('click', () => {
  boards[0].addCardToBoard(boards[0].cards,0,boards[0].slots,0);
  updateBoard2();
  updateSlots();
});
const seeOriginalCardsButton = document.getElementById('seeOriginalCardsButton');
seeOriginalCardsButton.addEventListener('click', () => {
  console.log(boards[0].originalCards);
  console.log(boards[0].originalCards[0]._words);
  console.log(boards[0].originalCards[1]._words);
});

/*
let currentPressedButtonId = null;  // the buttonId of button that is currently pressed (null means no button pressed)
export function toggleButton(buttonId) {
  const button = document.getElementById(buttonId); // button id of toggled button in html body (what you are pressing now)
  if (buttonId === currentPressedButtonId) {    // if button id of toggled is same as id of button currently pressed
    currentPressedButtonId = null;    // denotes no button is pressed (unpress this buttonId) so no buttons pressed on the board
    button.classList.remove('pressed'); // Remove the pressed class from this buttonId
    button.classList.add('unpressed'); // Add the unpressed class to this buttonId
  } else if (currentPressedButtonId === null) {
    currentPressedButtonId = button;
    button.classList.remove('unpressed');
    button.classList.add('pressed');
  } else {
    currentPressedButtonId.classList.remove('pressed');
    currentPressedButtonId.classList.add('unpressed');
    button.classList.remove('unpressed');
    button.classList.add('pressed');
  }
}
*/

/*
function updateBoard() {
    const gridElement = document.getElementById('grid');
    console.log(gridElement);
    // Clear existing content in the grid
    gridElement.innerHTML = '';
  
    // Iterate over each board and card
    boards.forEach((board) => {
      board.cards.forEach((card) => {
        if (card.boardPosition !== null) {
          let cardContainer;
          if (card.boardPosition === 0) {cardContainer = cardContainers[1]} else if (card.boardPosition === 1) {
            cardContainer = cardContainers[2]} else if (card.boardPosition === 2) {
              cardContainer = cardContainers[3]} else {
                cardContainer = cardContainers[0]}
          cardContainer.innerHTML = ''; // Clear existing content in the card container
          cardContainer.appendChild(document.createTextNode(card.words.join('\n')));
/*            const sides = cardContainer.getElementsByClassName('card-side');
THESE LINES WERE FOR TRYING TO GET WORDS AROUND OUTSIDE OF CARDS 2x2 GRID . ALSO LINE ABOVE WITH .join WAS REMOVED. BUT DID NOT WORK!
            for (let i = 0; i < sides.length; i++) {
            const side = sides[i];
            const word = card.words;

              if (word) {
                const wordElement = document.createElement('span');
                wordElement.innerText = word[i];
                side.appendChild(wordElement);
              }
            }   //
            gridElement.appendChild(cardContainer);
          }
        });
      });
    }
    export { updateBoard };*/


    const cardContainers = Array.from(document.getElementsByClassName('grid-item'));
    const customOrder = [0,1,3,2];
    console.log('customOrder:', customOrder);
    console.log('cardContainers length:', cardContainers.length);

 //   const cardContainers2 = Array.from(document.getElementsByClassName('grid-item'));
 //   const cardContainers3 = cardContainers2.map( _ => { if (indexOf(_) === 0 || indexOf(_) === 1) {return _} else if
 //   (indexOf(_) === 2) {return cardContainers2[3]} else {return cardContainers2[2]}});
    function updateBoard2() {
      console.log('poopoopop');
     const gridElement = document.getElementById('grid');
 //     const gridItems = gridElement.getElementsByClassName('grid-item');
 //     const gridArray = Array.from(gridItems);
      // Clear existing content in the grid
      gridElement.innerHTML = '';
      // console.log(gridElement);
      // Iterate over each board and card
      boards.forEach((board) => { customOrder.forEach( index => {let cardContainer2; cardContainer2 = cardContainers[index];
        
        
          cardContainer2.innerHTML = ''; // Clear existing content in the card container
          if (board.cards[index] !== null) {  //ADDED THIS IF STATEMENT FOR NULL CARDS, REMOVE IF GOES WRONG
          cardContainer2.appendChild(document.createTextNode(board.cards[index].words.join('\n')))} else {
            cardContainer2.appendChild(document.createTextNode('')) };
          
          gridElement.appendChild(cardContainer2); 
        });
      });
    
    }
export {updateBoard2};

/*
const words1 = ['roo', 'soo', 'too', 'voo'];
const words2 = ['woo', 'xoo', 'yoo', 'zoo'];
const words3 = ['roow', 'soow', 'toow', 'voow'];
const words4 = ['roox', 'soox', 'toox', 'voox'];
const words5 = ['rooy', 'sooy', 'tooy', 'vooy'];
const words6 = ['rooz', 'sooz', 'tooz', 'vooz'];

const card1 = new Card(words1);
const card2 = new Card(words2);
const card3 = new Card(words3);
const card4 = new Card(words4);
const card5 = new Card(words5);
const card6 = new Card(words6);

boards[0].slots = [null,card2,card3,card4,card5,card6];
*/
console.log('popop');
console.log(boards[0].slots);

const slotsContainers = Array.from(document.getElementsByClassName('slot'));

function updateSlots() {
  console.log('foottu');
 const slotsElement = document.getElementById('row-slots');

  slotsElement.innerHTML = '';
  
    boards.forEach((board) => { [0,1,2,3,4,5].forEach( index => {let slotsContainer3; slotsContainer3 = slotsContainers[index];
    
    
      slotsContainer3.innerHTML = ''; // Clear existing content in the card container
      if (board.slots[index] !== null) {  //ADDED THIS IF STATEMENT FOR NULL CARDS, REMOVE IF GOES WRONG
      slotsContainer3.appendChild(document.createTextNode(board.slots[index].words.join('\n'))) } else {
        slotsContainer3.appendChild(document.createTextNode(''))
      };
      slotsElement.appendChild(slotsContainer3); 
    });
  });

}
export {updateSlots};

// updateBoard2();
updateSlots();

let buttonsy = ['S1', 'S2'];
console.log(buttonsy[0].replace(/\D/g, ""));



//NEW SHIT 25/7/23: Make it so you can swap out cards. First lets try the cards selector again?
const swapSlotsButton = document.getElementById('swapSlotsButton');
swapSlotsButton.addEventListener('click', () => {
console.log('fuck u');
let buttons = Array.from(document.getElementsByClassName('pressed'));
const buttonNames = buttons.map(button => button.textContent);
if (buttons.length === 2) {
  console.log(buttonNames);
  console.log(buttonNames[0].replace(/\D/g, ""));
  boards[0].addCardToBoard(boards[0].slots, (buttonNames[0].replace(/\D/g, "")-1), boards[0].slots, (buttonNames[1].replace(/\D/g, ""))-1);
  updateSlots();
}
});

//NEW SHIT 26/7/23 now for cards vs slots:
const swapCardsButton = document.getElementById('swapCardsButton');
swapCardsButton.addEventListener('click', () => {
console.log('Boo u');
const gridContainer = document.querySelector('#grid');
let cardButtons = Array.from(gridContainer.getElementsByClassName('pressed'));
//let cardButtons = Array.from(gridContainer.querySelectorAll('button[id^="card"]'));
console.log(cardButtons);
const cardButtonNames = cardButtons.map(button => button.id);
console.log(cardButtonNames);
if (cardButtonNames.length === 2) {
  console.log(cardButtonNames);
  console.log(cardButtonNames[0].replace(/\D/g, ""));
  boards[0].addCardToBoard(boards[0].cards, (cardButtonNames[0].replace(/\D/g, "")-1), boards[0].cards, (cardButtonNames[1].replace(/\D/g, ""))-1);
  updateBoard2();
}
});

//NEW SHIT 27/7/23 NOW ACTUALLY DOING THE CARDS and SLOTS (ANY SWAP possible) // REMOVE ANY REFERENCE TO SWAPSWAPBUTTON AS SWAPCARDS DOES ALL OF IT NOW
const swapSwapButton = document.getElementById('swapSwapButton');
swapSwapButton.addEventListener('click', () => {
console.log('SCREW YOU');
let cardButtons = Array.from(document.getElementsByClassName('pressed'));
//let cardButtons = Array.from(gridContainer.querySelectorAll('button[id^="card"]'));
console.log(cardButtons);
const cardButtonNames = cardButtons.map(button => button.id);
console.log(cardButtonNames);
if (cardButtonNames.length === 2) {
  console.log(cardButtonNames);
  console.log(cardButtonNames[0].replace(/\D/g, ""));
  let firstCard;
  let secondCard;
  if (cardButtonNames[0].includes('card') && cardButtonNames[1].includes('card')) {
    console.log('card card2');
    firstCard = boards[0].cards;
    secondCard = boards[0].cards;
  } else if (cardButtonNames[0].includes('card') && cardButtonNames[1].includes('slot')) {
    console.log('card slot2');
      firstCard = boards[0].cards;
      secondCard = boards[0].slots;
    } else if (cardButtonNames[0].includes('slot') && cardButtonNames[1].includes('card')) {
      console.log('slot card2');
      firstCard = boards[0].slots;
      secondCard = boards[0].cards;
    } else {
      console.log('slot slot2');
      firstCard = boards[0].slots;
      secondCard = boards[0].slots;
    }
  boards[0].addCardToBoard(firstCard, (cardButtonNames[0].replace(/\D/g, "")-1), secondCard, (cardButtonNames[1].replace(/\D/g, ""))-1);
  updateBoard2();
  updateSlots();
}
});



function swapCards(otherButton) {
console.log('SCREW YOU');
console.log(document.getElementsByClassName('pressed'));
const cardButtons = [document.getElementsByClassName('pressed')[0], otherButton];
console.log(cardButtons);
const cardButtonNames = cardButtons.map(button => button.id);
console.log(cardButtonNames);
console.log(cardButtonNames[0].replace(/\D/g, "")); //replace letters with blank ie remove letters?
  let firstCard;
  let secondCard;
  if (cardButtonNames[0].includes('card') && cardButtonNames[1].includes('card')) {
    console.log('card card2');
    firstCard = boards[0].cards;
    secondCard = boards[0].cards;
  } else if (cardButtonNames[0].includes('card') && cardButtonNames[1].includes('slot')) {
    console.log('card slot2');
      firstCard = boards[0].cards;
      secondCard = boards[0].slots;
    } else if (cardButtonNames[0].includes('slot') && cardButtonNames[1].includes('card')) {
      console.log('slot card2');
      firstCard = boards[0].slots;
      secondCard = boards[0].cards;
    } else {
      console.log('slot slot2');
      firstCard = boards[0].slots;
      secondCard = boards[0].slots;
    }
  boards[0].addCardToBoard(firstCard, (cardButtonNames[0].replace(/\D/g, "")-1), secondCard, (cardButtonNames[1].replace(/\D/g, ""))-1);
   //AMENDED THIS 29/7/3 so that CURRENTLY PRESSED BECOMES UNPRESSED
   cardButtons[0].classList.remove('pressed');
   cardButtons[0].classList.add('unpressed');
   otherButton.classList.remove('unpressed');
   otherButton.classList.add('pressed');
  updateBoard2();
  updateSlots();
  unpressCards();
  unpressSlots();
  console.log('should unpress button after swap');
};

//<script> THIS toggleButton BELOW CHECKS IF A CARD IS CLICKED (ie it has text). IF SO , IT THEN GOES TO toggleButton2 (CURRENTLY toggleButton below it)
    
/*    function toggleButton(pressedButton) {
      const button = document.getElementById(pressedButton);
      if (button.textContent) {
        return toggleButton2(pressedButton);
      }     CURRENTLY THIS FUNCTION ABOVE IGNORES ANY PRESS THAT IS NOT A CARD, SO NOT FIT FOR PURPOSE.
    }
*/
    let currentPressedButtonId = null;  // the buttonId of button that is currently pressed (null means no button pressed)
    // let secondPressedButtonId = null;
    window.toggleButton = function(buttonId) {  // 29/3/23 NOW THIS FUNCTION IS IN GLOBAL SCOPE WITH THE window. METHOD.
      const button = document.getElementById(buttonId); // button id of toggled button in html body (what you are pressing now)
      console.log(button);
    /*  if (button === currentPressedButtonId) {    // if button id of toggled is same as id of button currently pressed
        console.log('poopywoopy');
        currentPressedButtonId = secondPressedButtonId;  // denotes oldest button pressed is now the secondButton (which was newest)
        secondPressedButtonId = null;     //only one button is pressed now
        button.classList.remove('pressed'); // Remove the pressed class from this buttonId
        button.classList.add('unpressed'); // Add the unpressed class to this buttonId  */
        if (currentPressedButtonId === null && button.textContent) {
          console.log('press button');
          currentPressedButtonId = button;
          button.classList.remove('unpressed');
          button.classList.add('pressed');
        }
        else if (button === currentPressedButtonId) {    // 26/7/23 -AMENDED THIS FIRST IF STATEMENT THE DELETIONS ABOVE:
        console.log('remove pressed')
        currentPressedButtonId = null;              // : SO THAT NO NEED TO CHANGE BETWEEN CURRENT AND SECOND BUTTON.
        button.classList.remove('pressed'); // Remove the pressed class from this buttonId
        button.classList.add('unpressed');
          }  else if (button !== currentPressedButtonId && currentPressedButtonId !== null) {
              console.log('switch cards');       //ADDED THIS 28/7/23
              currentPressedButtonId = button;
              //button.classList.remove('unpressed');
              //button.classList.add('pressed');
              swapCards(button);
              } 
      //  updateBoard2();
      }
    
   // </script>



function unpressCards() {
  let button = Array.from(document.getElementsByClassName('pressed'));
  console.log(button);
  if (button.length > 0) {if (button[0].id.includes('card')) {
  // console.log(button[0].id);
    currentPressedButtonId = null;
    button[0].classList.remove('pressed');
    button[0].classList.add('unpressed');
  }
}
}

function unpressSlots() {
  let button = Array.from(document.getElementsByClassName('pressed'));
  if (button.length > 0) {if (button[0].id.includes('slot')) {
    currentPressedButtonId = null;
    button[0].classList.remove('pressed');
    button[0].classList.add('unpressed');
  }
}
}
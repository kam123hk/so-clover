// import wordlist from "wordlist-english";
//let currentPressedButtonId = null;  // the buttonId of button that is currently pressed (null means no button pressed)
export let difficulty = 1;  // 31/8/23 difficulty = 1 means normal game of one extra card.
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
const clover4 =['shirt', 'tail', 'menu', 'child', 'strength', 'couch', 'farm', 'helmet', 'cougar', 'stone', 'coffee', 'puzzle', 'past', 'flash', 'capital', 'doll', 'dance', 'prison', 'matter', 'crown', 'casino', 'mind', 'moon', 'hide', 'chest', 'pit', 'paintbrush', 'nightmare', 'ink', 'stitches', 'garden', 'spear', 'heart', 'gas', 'appetite', 'war', 'wheat', 'museum', 'roof', 'canal', 'box', 'eye', 'sea', 'bouquet', 'port', 'gamble', 'mask', 'sugar', 'hole', 'march', 'wood', 'skeleton', 'charge', 'antarctica', 'armour', 'curtain', 'tank', 'challenge', 'friend', 'bill', 'noodle', 'weapon', 'bakery', 'tent', 'rose', 'volume', 'ammo', 'vacation', 'defence', 'piano', 'sense', 'bridge', 'permanent', 'cannon', 'potato', 'champion', 'screw', 'tomato', 'grey', 'forecast', 'studio', 'cave', 'mosquito', 'magician', 'explore', 'giant', 'bucket', 'barn', 'new', 'violin', 'fairy', 'cuddle', 'cat', 'record', 'monster', 'body', 'country', 'secret', 'cigarette', 'stick', 'underground', 'autumn', 'machine', 'curry', 'berry', 'electricity', 'spy', 'tube', 'bell', 'fruit', 'whale', 'wild', 'nude', 'well', 'rooster', 'alcohol', 'ball', 'night', 'tree', 'school', 'candy', 'court', 'danger', 'grass', 'mustard', 'apprentice', 'heritage', 'bedroom', 'chain', 'cold', 'advocate', 'fur', 'engine', 'letter', 'safari', 'sewer', 'minor', 'white', 'fable', 'cavalry', 'console', 'voice', 'recipient', 'cell', 'pizza', 'moustache', 'surgeon', 'silver', 'mouse', 'yellow', 'toilet', 'earth', 'astronaut', 'fish', 'padlock', 'inside', 'park', 'donkey', 'virgin', 'mug', 'crescent', 'outlet', 'size', 'camp', 'jungle', 'frame', 'weight', 'pumpkin', 'lady', 'blanket', 'pearl', 'carrot', 'carpet', 'laugh', 'luxury', 'battery', 'judge', 'herbs', 'dresser', 'suitcase', 'utensil', 'middle', 'grape', 'shower', 'fashion', 'movie', 'tile', 'bite', 'oasis', 'cereal', 'evening', 'plank', 'lighter', 'shelter', 'ireland', 'medusa', 'soldier', 'ghost', 'storm', 'pad', 'liquid', 'twins', 'patio', 'africa', 'master', 'skin', 'border', 'log', 'target', 'leak', 'flask', 'marriage', 'ladder', 'pilot', 'skates', 'circus', 'cage', 'bump', 'green', 'pie']
const clover3 = ['hero', 'emergency', 'metal', 'lighthouse', 'father', 'internet', 'snack', 'captain', 'medal', 'wave', 'fair', 'dirty', 'lemon', 'dog', 'ramp', 'television', 'house', 'hood', 'pear', 'lamp', 'cinema', 'cup', 'jump', 'dream', 'dungeon', 'ring', 'cane', 'wool', 'kitchen', 'finger', 'note', 'hard', 'universe', 'chameleon', 'wheel', 'balance', 'nerve', 'plane', 'nut', 'bath', 'salt', 'cotton', 'chef', 'square', 'mummy', 'flight', 'bread', 'chess', 'sound', 'gold', 'melon', 'lake', 'blonde', 'trailer', 'decor', 'recipe', 'spice', 'detective', 'town', 'sky', 'club', 'loop', 'stylist', 'pyramid', 'space', 'accessory', 'brain', 'alarm', 'dough', 'queen', 'water', 'attic', 'double', 'silence', 'air', 'police', 'match', 'mother', 'rope', 'paradise', 'smoke', 'needle', 'knot', 'butcher', 'bay', 'pipe', 'magic', 'slow', 'tool', 'hall', 'heroine', 'hair', 'leaf', 'career', 'swing', 'bottom', 'ambulance', 'fox', 'mountain', 'dictator', 'pan', 'orange', 'tiny', 'feather', 'fountain', 'ice', 'walk', 'chick', 'first', 'fever', 'building', 'boxing', 'arrow', 'shadow', 'picture', 'market', 'jelly', 'computer', 'demon', 'revolver', 'dwarf', 'science', 'cross', 'hot', 'work', 'cream', 'laser', 'arm', 'turtle', 'statue', 'grain', 'shed', 'track', 'milk', 'taste', 'hell', 'north', 'bottle', 'group', 'beard', 'board', 'button', 'union', 'axe', 'bone', 'marine', 'spring', 'band', 'small', 'humour', 'garbage', 'car', 'feline', 'garage', 'tobacco', 'clown', 'stamp', 'bang', 'owl', 'ruin', 'straw', 'religion', 'promotion', 'thunder', 'solitary', 'grave', 'train', 'bear', 'sand', 'oven', 'entry', 'round', 'hunt', 'thread', 'sponge', 'black', 'birthday', 'press', 'military', 'dinosaur', 'pocket', 'suite', 'missile', 'comedy', 'zoo', 'angel', 'key', 'bed', 'polar', 'short', 'drink', 'horse', 'foot', 'winter', 'island', 'high', 'wolf', 'guardian', 'moist', 'sunday', 'report', 'string', 'blood', 'magniscope', 'handle', 'talent', 'vegetable', 'foam', 'animal', 'map', 'waiter', 'fool', 'rail', 'pig', 'sage', 'trade', 'toy', 'basket', 'weak', 'knight'];
const clover2 = ['month', 'stroke', 'cabbage', 'stunt', 'rain', 'asset', 'race', 'closet', 'family', 'flame', 'sleeve', 'architecture', 'elastic', 'triangle', 'weather', 'order', 'furniture', 'comforter', 'brown', 'covered', 'princess', 'cactus', 'bulb', 'cake', 'duck', 'trim', 'barracks', 'kiss', 'cemetery', 'bracelet', 'deep', 'region', 'blade', 'peace', 'bowl', 'mouth', 'sock', 'door', 'cow', 'circle', 'plush', 'archaeology', 'cork', 'distributor', 'stock', 'crane', 'district', 'lazy', 'shop', 'file', 'magnet', 'tennis', 'nest', 'bubble', 'poetry', 'sweet', 'antiquity', 'exit', 'plant', 'candle', 'limit', 'pirate', 'intersection', 'instrument', 'volcano', 'root', 'screen', 'beast', 'face', 'butterfly', 'road', 'cocktail', 'quit', 'soap', 'full', 'branch', 'business', 'dish', 'myth', 'big', 'pigeon', 'robot', 'america', 'wand', 'hammer', 'drawing', 'bin', 'forbidden', 'charm', 'tame', 'flour', 'sail', 'diamond', 'book', 'soft', 'poison', 'cockroach', 'landscape', 'champagne', 'switzerland', 'cookie', 'craft', 'shell', 'flea', 'right', 'forest', 'display', 'octopus', 'alliance', 'cabin', 'old', 'tiger', 'pump', 'season', 'card', 'porcelain', 'bench', 'patron', 'stud', 'camera', 'end', 'commerce', 'trophy', 'shovel', 'grease', 'wish', 'buckle', 'sword', 'thief', 'theatre', 'smell', 'oar', 'blue', 'tunnel', 'dress', 'vision', 'office', 'pair', 'protect', 'chocolate', 'slide', 'snail', 'dynamite', 'pliers', 'ray', 'boot', 'rat', 'gate', 'punch', 'soup', 'game', 'canvas', 'plastic', 'detergent', 'castle', 'frost', 'bird', 'treasure', 'nurse', 'sticky', 'cushion', 'necklace', 'oil', 'vampire', 'food', 'gift', 'library', 'bomb', 'day', 'shield', 'inspection', 'history', 'ear', 'cavern', 'shark', 'feed', 'major', 'dead', 'radar', 'reptile', 'wine', 'boat', 'iron', 'whirlwind', 'drum', 'fire', 'sister', 'hotel', 'banana', 'tattoo', 'doe', 'clothing', 'perfume', 'chariot', 'limb', 'napkin', 'bank', 'lava', 'dessert', 'god', 'hand', 'river', 'radio', 'crow', 'roast', 'essence', 'joke', 'hospital', 'mint', 'recent', 'layer', 'devil', 'revolution', 'fry', 'ruler', 'mail', 'shape', 'ground', 'asia', 'glove'];
const clover1 = ['witness', 'sausage', 'hardware', 'ticket', 'table', 'mushroom', 'truck', 'church', 'mirage', 'airport', 'sport', 'currency', 'ship', 'apple', 'common', 'exhibition', 'cantina', 'lightning', 'phone', 'music', 'handicap', 'lion', 'rich', 'star', 'honey', 'desert', 'paper', 'virus', 'diet', 'explosion', 'top', 'show', 'heavy', 'tea', 'room', 'life', 'powder', 'labyrinth', 'party', 'assassin', 'fault', 'france', 'physical', 'rabbit', 'jewel', 'summit', 'bug', 'genius', 'summer', 'species', 'temple', 'suit', 'illness', 'column', 'cloud', 'cheese', 'beer', 'marker', 'technology', 'edge', 'heel', 'revenge', 'watch', 'motor', 'europe', 'repair', 'victory', 'dragon', 'painting', 'speaker', 'ladybug', 'restaurant', 'bag', 'thin', 'rice', 'balcony', 'glasses', 'syrup', 'king', 'place', 'tongue', 'wizard', 'attraction', 'rake', 'mobile', 'oak', 'raft', 'suspect', 'beach', 'morning', 'head', 'device', 'egg', 'nail', 'newspaper', 'bus', 'hobbies', 'series', 'glass', 'turn', 'skull', 'award', 'fly', 'calendar', 'large', 'pine', 'spicy', 'hat', 'brush', 'travel', 'flower', 'fishing', 'pepper', 'fast', 'light', 'case', 'stage', 'hearing', 'ladle', 'hearth', 'fuel', 'luck', 'roll', 'hook', 'chair', 'beef', 'doctor', 'mark', 'mirror', 'ballroom', 'hen', 'bike', 'memory', 'down', 'guide', 'love', 'snow', 'scissors', 'palace', 'wing', 'ocean', 'camouflage', 'salad', 'young', 'window', 'uniform', 'whip', 'human', 'tradition', 'bronze', 'sabre', 'broom', 'strong', 'knife', 'caterpillar', 'bar', 'song', 'station', 'throat', 'delivery', 'sight', 'base', 'subway', 'baby', 'clean', 'story', 'jar', 'chimney','tornado', 'spider', 'shelf', 'transport', 'china', 'belt', 'bark', 'wind', 'carton', 'snake', 'belgium', 'sharp', 'line', 'red', 'adventure', 'umbrella', 'mass', 'photo', 'orchid', 'performance', 'climbing', 'pond', 'sheep', 'firefighter', 'colour', 'rifle', 'post', 'boss', 'siren', 'apron', 'cube', 'degree' ,'sun', 'concert', 'cable', 'basement', 'passion', 'field', 'crab', 'flute', 'grenade', 'mud', 'claw', 'trash', 'thermometer', 'guitar', 'lock', 'schedule', 'envelop', 'turnip', 'brother', 'grate'];
const clover = [...clover1, ...clover2, ...clover3, ...clover4];





const _wordlistClover = new Wordlist(clover);
export let soCloverWords = _wordlistClover.gameWords;  // 5/9/23 was a const, but ive reassigned soCloverWords as the generic wordlist for the game?
export const _wordlist = ['apple', 'block', 'carrot', 'duck', 'egret', 'fruit', 'good', 'hi','igloo','jog','kick','llama','manners','norse','ogle','poop','quick','rabbit','spout','tarot','ugly','vouch','wombat','xenophobe','yippee','zoo','a poo','be calm','cut off','dry it','egg him','for me','get at','hats off','i like','jack ass','kick out', 'lucky git', 'my food', 'nice play', 'on mars', 'pee wee', 'quota full', 'rise up', 'shit storm', 'too foolish', 'under over', 'volcano erupts', 'wee wee','x rated', 'your mum', 'zany bastard'];

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

let boards = generateBoards(soCloverWords); // Your implementation for generating boards 17/8/23 now 'let' before 'const', as need new board for new game
  //boards[0].getCardsOnBoardPosition;
  
  

  //boards[0].boardClockwise();
  // boards[0].cardAnticlockwise(0);
  const gridElement = document.getElementById('grid');

  
 // gridElement.innerHTML = '';
 //updateBoard();
const unpressedCardslotsOnBoard = Array.from(document.getElementsByClassName('grid-item unpressed'));
const slotCards = Array.from(document.getElementsByClassName('slot-container'));
const gridCards = Array.from(document.getElementsByClassName('grid-item'));
const userClues = document.querySelectorAll('.user-clue');
const rectangleLeft = document.getElementById('rectangleLeft'); // 17/8/23 changed these 4 from getElementsByClassName to ensure only one element so no need to do rectangle[0] anymore
const rectangleTop = document.getElementById('rectangleTop');
const rectangleBottom = document.getElementById('rectangleRotated');
const rectangleRight = document.getElementById('rectangle');
const clueCards = [rectangleTop, rectangleRight, rectangleBottom, rectangleLeft]; // 17/8/23 NEED TO ENSURE THE CHANGE ABOVE WORKS
function getStyleFromElements(elementsArray) {
  const stylesFromElements = elementsArray.map( _ => getComputedStyle(_)); // 17/8/23 WAS getComputedStyle(_[0]) before, see comment above.
  return stylesFromElements;
}
// console.log(rectangleTop[0].style.backgroundColor); // 17/8/23

// Get the rotate button element
const boardAnticlockwiseButton = document.getElementById('boardAnticlockwiseButton');
const boardClockwiseButton = document.getElementById('boardClockwiseButton');

// Add a click event listener to the button
boardAnticlockwiseButton.addEventListener('click', () => {
  getCluesFromBoard();      // 7/8/23 USER MAY ADD/AMEND CLUES. THIS TRANSFERS THEM TO boards[].clues
  boards[0].boardAnticlockwise();
  const clueStyles = getStyleFromElements(clueCards);
  const clueColors1 = ['lightgreen', 'lightblue', 'lightgreen', 'lightblue'];
  
  if (clueStyles[0].backgroundColor === 'rgb(144, 238, 144)') {
    
    
    //const clueColors2 = clueColors1.map( _ => _ );
    clueCards.forEach( (rectangle, index) =>  rectangle.style.backgroundColor = clueColors1[(index +1)%4]); // 17/8/23 was rectangle[0].style (see previous comment about clueCards)
  } else {
    clueCards.forEach( (rectangle, index) =>  rectangle.style.backgroundColor = clueColors1[index]); // 17/8/23
  }
//  updateBoard2(); // Update the board after rotation
updateCardsOnBoard();
  unpressCards();
  updateCluesOnBoard();   // 7/8/23 SHOWS CLUES IN CORRECT POSITION AFTER ROTATION
  enableAllCardslots();   // 10/8/23 ADDED TO ENABLE CARD SLOTS (see clockwise below as well)
//  disableCorrectCards();
  rotateDisabledAnticlockwise();  // 10/8/23 ROTATES THE disabled array, re-disables correct cards
  highlightCorrectCards(); forbidGuess();}) // 1/9/23 added these two functions
boardClockwiseButton.addEventListener('click', () => {
  getCluesFromBoard();      // 7/8/23 USER MAY ADD/AMEND CLUES. THIS TRANSFERS THEM TO boards[].clues
  boards[0].boardClockwise();
  const clueStyles = getStyleFromElements(clueCards);
  const clueColors1 = ['lightgreen', 'lightblue', 'lightgreen', 'lightblue'];
  
  if (clueStyles[0].backgroundColor === 'rgb(144, 238, 144)') {
    
    
    //const clueColors2 = clueColors1.map( _ => _ );
    clueCards.forEach( (rectangle, index) =>  rectangle.style.backgroundColor = clueColors1[(index +1)%4]);
  } else {
    clueCards.forEach( (rectangle, index) =>  rectangle.style.backgroundColor = clueColors1[index]); // 17/8/23 NEED
  }
 // updateBoard2();
 updateCardsOnBoard();
  unpressCards();
  updateCluesOnBoard();   // 7/8/23 SHOWS CLUES IN CORRECT POSITION AFTER ROTATION
  enableAllCardslots();   // 10/8/23 ENABLES ALL CARDSLOTS ON BOARD
  
  rotateDisabledClockwise();  // 10/8/23 ROTATES pressedCardIndices array THEN DISABLES these ROTATED (correct) CARDS
 highlightCorrectCards(); forbidGuess(); // 1/9/23 these two functions
});



const cardClockwiseButton = document.getElementById('cardClockwiseButton');
cardClockwiseButton.addEventListener('click', () => {
  const button = Array.from(document.getElementsByClassName('pressed'));
 // const buttonNames = button.map(butt => butt.id);
  
 // console.log(buttonNames);
 // console.log(buttonNames[0].replace(/\D/g, "")); // DIGITS ONLY
 // console.log(buttonNames[0].replace(/\d/g, "")); // LETTERS ONLY
 // console.log(button[0].id);

  if (button.length > 0) {
    
    let buttonPosition = button[0].id.replace(/\D/g, "");
    if (button[0].id.includes('card')) {
      boards[0].cardClockwise(buttonPosition -1);
    } else if (button[0].id.includes('slot')) {
      boards[0].slotClockwise(buttonPosition -1);
    }
    updateCardsOnBoard();
  updateSlotsOnBoard(); checkFullGrid(); forbidGuess(); // 10/9/23 checkGrid must come between updateBoard and forbidGuess.
  }

 // if (button[0].id.includes('card')) {console.log('i rotated')

 // }
  
  //boards[0].cardClockwise(0);
  //updateBoard2();
  //updateSlots();

});
const cardAnticlockwiseButton = document.getElementById('cardAnticlockwiseButton');
cardAnticlockwiseButton.addEventListener('click', () => {
  const button = Array.from(document.getElementsByClassName('pressed'));
  if (button.length > 0) {
    let buttonPosition = button[0].id.replace(/\D/g, "");
    if (button[0].id.includes('card')) {
      boards[0].cardAnticlockwise(buttonPosition -1);
    } else if (button[0].id.includes('slot')) {
      boards[0].slotAnticlockwise(buttonPosition -1);
    }
  //updateBoard2();
  //updateSlots();
  updateCardsOnBoard();
  updateSlotsOnBoard(); checkFullGrid(); forbidGuess(); // 10/9/23 these last two functions essentially give conditions on when submitGuessButton shows
  }
});
const submitCluesButton = document.getElementById('submitCluesButton');
const summaryBox = document.getElementById("summaryBox"); // 17/8/23
const proceedButton = document.getElementById("proceedButton");
proceedButton.addEventListener('click', () => {
createGame(...selectWordlist()); wordlistButtons.forEach(button => {button.setAttribute('disabled', 'disabled'); button.style.cursor = "auto"; }); // 11/9/23 function to create entire wordlist for the game from the available, then disable the wordlist button(s).
// updateBoard2();
userClues.forEach( clue => clue.value = "");    // 17/8/23 these two lines remove text but place placeholder (dont actually need this first one, as clues will be written by user)
userClues.forEach( clue => clue.setAttribute("placeholder", "Write your clue here"));
updateCardsOnBoard();
summaryBox.style.display = "block";    // 17/8/23
summaryBox.innerHTML = "<b>Clue-giving phase:</b>\
<p>Think of a clue that makes a link with the two words directly below the space provided.\
<p>The clue must be one word with no numbers or special characters. It should not be in the same word family as any word on a card.\
<p>Once all four clues around the board are written, submit them and pass the controls over to your <i>team</i>."
proceedButton.style.display = "none";               // 24/8/23 changed from startGameButton.remove();

boardAnticlockwiseButton.style.display = "block";
boardAnticlockwiseButton.style.cursor = "pointer";  // 12/8/23 ADDED pointer AND textContent to highlight button only AFTER GameStart
boardAnticlockwiseButton.textContent = "Rotate board Anti-clockwise";
boardAnticlockwiseButton.style.backgroundColor = 'rgb(164, 221, 195)';
boardClockwiseButton.style.display = "block";
boardClockwiseButton.style.cursor = "pointer";    // 12/8/23 ADDED pointer, textContent and Color
boardClockwiseButton.textContent = "Rotate board Clockwise";
boardClockwiseButton.style.backgroundColor = 'rgb(164, 221, 195)';
// submitCluesButton.style.display = "block";     // 24/8/23
// clueCards.forEach( rectangle => rectangle[0].style.display = "flex");

gridCards.forEach( cardslot => cardslot.style.display = "flex");
userClues.forEach( clue => clue.removeAttribute('disabled'));

toggleButton('card1');  // ADDED THESE 4 lines 5/8/23 TO SIMULATE ONE SWAP (and back again)
toggleButton('card2');  // THIS WAS BECAUSE MY CODE ALWAYS SWAPS card3 when card4 is pressed
toggleButton('card2');  // BUT AFTER ONE SWAP, THE CODE WORKS, SO I NEEDED TO SIMULATE ONE SWAP!!!
toggleButton('card1'); submitGuessButton.style.display = 'none';  // 10/9/23 added submitguessbutton = none (see checkGridFull() function)     
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
    
    

 //   const cardContainers2 = Array.from(document.getElementsByClassName('grid-item'));
 //   const cardContainers3 = cardContainers2.map( _ => { if (indexOf(_) === 0 || indexOf(_) === 1) {return _} else if
 //   (indexOf(_) === 2) {return cardContainers2[3]} else {return cardContainers2[2]}});
    function updateBoard2() {   //THIS IS NOT LEGACY, DO NOT DELETE!!
      
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



const slotsContainers = Array.from(document.getElementsByClassName('slot'));

function updateSlots() {  //THIS IS NOT LEGACY DO NOT DELETE!!
  
 const slotsElement = document.getElementById('row-slots');

  slotsElement.innerHTML = '';
  // 31/8/23 NOW 0,1,2,3,4 for only 5 cardslots:
    boards.forEach((board) => { [0,1,2,3,4].forEach( index => {let slotsContainer3; slotsContainer3 = slotsContainers[index];
    
    
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
updateSlots();   //DELETE THIS????

let buttonsy = ['S1', 'S2'];






function swapCards(otherButton) {



const cardButtons = [document.getElementsByClassName('pressed')[0], otherButton];

const cardButtonNames = cardButtons.map(button => button.id);


  let firstCard;
  let secondCard;
  if (cardButtonNames[0].includes('card') && cardButtonNames[1].includes('card')) {
    
    firstCard = boards[0].cards;
    secondCard = boards[0].cards;
  } else if (cardButtonNames[0].includes('card') && cardButtonNames[1].includes('slot')) {
    
    
      firstCard = boards[0].cards;
      secondCard = boards[0].slots;
    } else if (cardButtonNames[0].includes('slot') && cardButtonNames[1].includes('card')) {
      
      firstCard = boards[0].slots;
      secondCard = boards[0].cards;
    } else {
      
      firstCard = boards[0].slots;
      secondCard = boards[0].slots;
    }
  boards[0].addCardToBoard(firstCard, (cardButtonNames[0].replace(/\D/g, "")-1), secondCard, (cardButtonNames[1].replace(/\D/g, ""))-1);
   
  //AMENDED THIS 29/7/3 so that CURRENTLY PRESSED BECOMES UNPRESSED (REMOVED 5/8/23 as unpressCards/Slots does same thing.)
  // cardButtons[0].classList.remove('pressed');
  // cardButtons[0].classList.add('unpressed');
  // otherButton.classList.remove('unpressed');
  // otherButton.classList.add('pressed');
   
  updateBoard2(); //THIS IS NOT LEGACY CODE- cannot replace by updateCardsOnBoard / Slots. NEED TO FIND OUT WHAT IT DOES!
  
  updateSlots();  //THIS IS NOT LEGACY CODE - without it, cards repplicate onto empty when swapped!

 // unpressCards(); 12/8/23 REMOVED NOT NEEDED?
 
 // unpressSlots();
  
 

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
      
    /*  if (button === currentPressedButtonId) {    // if button id of toggled is same as id of button currently pressed
        console.log('poopywoopy');
        currentPressedButtonId = secondPressedButtonId;  // denotes oldest button pressed is now the secondButton (which was newest)
        secondPressedButtonId = null;     //only one button is pressed now
        button.classList.remove('pressed'); // Remove the pressed class from this buttonId
        button.classList.add('unpressed'); // Add the unpressed class to this buttonId  */
        if (currentPressedButtonId === null && button.textContent) {
          
          currentPressedButtonId = button;
          button.classList.remove('unpressed');
          button.classList.add('pressed');
          highlightButtons(); // 12/8/23 ADDED this function to HIGHLIGHT option to rotate PRESSED Card
        }
        else if (button === currentPressedButtonId) {    // 26/7/23 -AMENDED THIS FIRST IF STATEMENT THE DELETIONS ABOVE:
        
        currentPressedButtonId = null;              // : SO THAT NO NEED TO CHANGE BETWEEN CURRENT AND SECOND BUTTON.
       // button.classList.remove('pressed'); // Remove the pressed class from this buttonId
       // button.classList.add('unpressed');
       // cardAnticlockwiseButton.style.backgroundColor = 'rgb(245, 245, 245)'; // 12/8/23 ADDED these two
       // cardAnticlockwiseButton.textContent = "";
       unpressCards();  // 12/8/23 ADDED two lines, REMOVED 4 lines above (unpress has color change)
       unpressSlots();
          }  else if (button !== currentPressedButtonId && currentPressedButtonId !== null) {
                     //ADDED THIS 28/7/23
              currentPressedButtonId = button;  // 4/8/23 STILL SEEMS TO WORK IF THIS IS NULL.
               //4/8/23 IN FACT COULD I... (no cos, need pressed className in swapCards function) JUST REMOVE PRESSED AT THE END OF else if HERE?
              //currentPressedButtonId = null; //ADDED 4/8/23 COS DUNNO WHY current = button, MUST BE A REASON RIGHT??
              //button.classList.remove('unpressed');
              //button.classList.add('pressed');
              swapCards(button);
              highlightButtons(); // 12/8/23 ADDED this function to HIGHLIGHT option to rotate PRESSED Card
              unpressCards(); // 12/8/23 ADDED two lines, removed these same lines from swapCards function
              unpressSlots();
              updateCardsOnBoard();
              updateSlotsOnBoard();
               checkFullGrid(); // 10/9/23
              
               forbidGuess(); // 5/9/23
              } 
      //  updateBoard2();
 //BEFORE 4/8/23 HAD updateCardsOnBoard AND updateSlotsOnBoard HERE, BUT MOVED TO AFTER else if ABOVE.
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
    unhighlightButtons(); // 12/8/23 ADDED this function to UNHIGHLIGHT option to rotate PRESSED Card
  }
}
}

function unpressSlots() {
  let button = Array.from(document.getElementsByClassName('pressed'));
  if (button.length > 0) {if (button[0].id.includes('slot')) {
    currentPressedButtonId = null;
    button[0].classList.remove('pressed');
    button[0].classList.add('unpressed');
    unhighlightButtons(); // 12/8/23 ADDED this function to UNHIGHLIGHT option to rotate PRESSED Card
  }
}
}

const cardslots = Array.from(document.getElementsByClassName('cardslot'));



// Assuming you have an array of words
const wordsArray = ['apple', 'banana', 'daikon', 'carrot'];

// Function to create and populate the square 'card'
function updateCardsOnBoard() {
//  gridElement.innerHTML = ''; // ADDED 5/8/23 see if i dont need updateBoard2 now...?
//  const cardslots = Array.from(document.getElementsByClassName('grid-item'));
//  console.log(cardslots);
//  boards.forEach( board => {
 //   [0,1,3,2].forEach( index => {if (board.cards[index] !== null) {

 // gridElement.innerHTML = '';DOES NOT SEEM TO WORK 5/8/23 also see below I WANTED TO ADD THE GRID THEN ADD CARDS.


const grid = Array.from(document.getElementsByClassName('grid-item'));




// 5/8/23 see 2 lines below for MOVE OF const AND AMENDMENT:
boards.forEach( board => {
  const wordsOnCards = board.cards;  // 5/8/23 PREVIOUSLY THIS WAS BEFORE boards.forEach AND = boards[0].cards instead
           // 5/8/23 SO IT MEANS I CAN DO THIS FOR MORE THAN ONE BOARD.
  [0,1,3,2].forEach( (index, element) => {if (wordsOnCards[element] !== null) {
    

// grid.forEach(  (element, index) => 
//  { console.log(grid[index]);
  //  const card = document.getElementById('card');
  
 grid[index].innerHTML = ''; // Clear existing content inside the card SHOULD I MOVE THIS TO boards.forEach(board => { HERE? ...}) SEE updateSlotsOnBoard BELOW.

  
  const topWordElement = document.createElement('div');
  topWordElement.className = 'word top-word';
  topWordElement.textContent = wordsOnCards[element].words[0];

  const rightWordElement = document.createElement('div');
  rightWordElement.className = 'word right-word';
  rightWordElement.textContent = wordsOnCards[element].words[1];

  const bottomWordElement = document.createElement('div');
  bottomWordElement.className = 'word bottom-word';
  bottomWordElement.textContent = wordsOnCards[element].words[2];

  const leftWordElement = document.createElement('div');
  leftWordElement.className = 'word left-word';
  leftWordElement.textContent = wordsOnCards[element].words[3];

//grid[index] = document.createElement('div')  // 5/8/23 DID NOT WORK (see gridElement = '' above)
//grid[index].className = 'grid-item unpressed cardslot';
//console.log(grid[index]);

  grid[index].appendChild(topWordElement);
  grid[index].appendChild(rightWordElement);
  grid[index].appendChild(bottomWordElement);
  grid[index].appendChild(leftWordElement);


 // gridElement.appendChild(grid[index]); // 5/8/23 DID NOT WORK (see above)
  
  } else {
    grid[index].innerHTML = ""; // ADDED to clear card contents if wordsOnCard === null, NEED IT FOR EXAMPLE WHEN ROTATING BOARD
  }
}
)
blankOutCard(); }  // 1/9/23
)
}


function updateSlotsOnBoard() {
  //  const cardslots = Array.from(document.getElementsByClassName('grid-item'));
  //  console.log(cardslots);
  //  boards.forEach( board => {
   //   [0,1,3,2].forEach( index => {if (board.cards[index] !== null) {
    
  const grid = Array.from(document.getElementsByClassName('slot'));
  
  
  
  // 5/8/23 SWAPPED const wordOnCards TO 2 LINES BELOW
  boards.forEach( board => {
    grid.forEach(element => element.innerHTML = ''); // Clear existing content inside the card 6/8/23 MOVED HERE INSTEAD OF WITHIN if STATEMENT OF forEach FUNCTION. SEEMS FINE.
    const wordsOnCards = board.slots;  // 5/8/23 PREVIOUSLY THIS WAS BEFORE boards.forEach AND = boards[0].cards instead
    
    [0,1,2,3,4].forEach( element => {if (wordsOnCards[element] !== null) { // 31/8/23 NOW only 0,1,2,3,4 for only 5 cardslots
      
  
  // grid.forEach(  (element, index) => 
  //  { console.log(grid[index]);
    //  const card = document.getElementById('card');
    
    
  
    
    const topWordElement = document.createElement('div');
    topWordElement.className = 'word top-word';
    topWordElement.textContent = wordsOnCards[element].words[0];
  
    const rightWordElement = document.createElement('div');
    rightWordElement.className = 'word right-word';
    rightWordElement.textContent = wordsOnCards[element].words[1];
  
    const bottomWordElement = document.createElement('div');
    bottomWordElement.className = 'word bottom-word';
    bottomWordElement.textContent = wordsOnCards[element].words[2];
  
    const leftWordElement = document.createElement('div');
    leftWordElement.className = 'word left-word';
    leftWordElement.textContent = wordsOnCards[element].words[3];
  
    grid[element].appendChild(topWordElement);
    grid[element].appendChild(rightWordElement);
    grid[element].appendChild(bottomWordElement);
    grid[element].appendChild(leftWordElement);
    }
  }
  )
  blankOutCard();} // 1/9/23 
  )
  }


/*  const cardContainer = document.getElementById('card1');
  console.log(cardContainer);
  cardContainer.className = 'cardslot';
console.log('does this work???')
  const words = board.cards[index].words;
console.log(words);
  // Create and set the words dynamically
  const topWordElement = document.createElement('div');
  topWordElement.className = 'word top-word';
  topWordElement.textContent = words[0];

  const rightWordElement = document.createElement('div');
  rightWordElement.className = 'word right-word';
  rightWordElement.textContent = words[1];

  const bottomWordElement = document.createElement('div');
  bottomWordElement.className = 'word bottom-word';
  bottomWordElement.textContent = words[2];

  const leftWordElement = document.createElement('div');
  leftWordElement.className = 'word left-word';
  leftWordElement.textContent = words[3];

  // Append words to the card
  cardContainer.appendChild(topWordElement);
  cardContainer.appendChild(rightWordElement);
  cardContainer.appendChild(bottomWordElement);
  cardContainer.appendChild(leftWordElement);
*/

/*  cardslots[index].appendChild(topWordElement);
  cardslots[index].appendChild(rightWordElement);
  cardslots[index].appendChild(bottomWordElement);
  cardslots[index].appendChild(leftWordElement); */ //THIS MADE THE WORDS GO EDGE OF BROWSER WINDOW
  
/*
}}
    )
  }
  )
}
*/
let invalidClue;
// Call the function with the wordsArray to populate the card
//createSquareCard(wordsArray);
const textBox = document.getElementById("textBox");

let submitCluesCount = 0; // 12/8/23 ADDED to provide a condition for pointer to show
submitCluesButton.addEventListener('click', () => {   // 7/8/23 SENDS OFF THE CLUES
proceedButton.style.display = "block";
let allWords = [];
// let difficulty = 0; 31/8/23 REMOVED, was i < boards[0].cards.length + difficulty below, but that is assuming difficulty can be adjusted by Player One to include an extra card in slots before giving clues.
for (let i=0; i < boards[0].cards.length; i++) { allWords.push(...boards[0].cards[i]._words)};
 // ALL THE WORDS ON CARDS IN SINGLE ARRAY
if ([...userClues].some(clue => clue.value === "")) {
  textBox.style.display = "flex";
  textBox.textContent = "Give a clue for every pair before submitting!";
}
else if ([...userClues].some( clue => { 
  if (!/^[A-Za-z]+$/.test(clue.value)) { invalidClue = clue.value;  return true } // 17/8/23 textbox says one word which is false
} )) {
  
  textBox.style.display = "flex";
  textBox.textContent = `Your clues must only consist of one word, with no special characters or numbers. An example of an invalid clue is "${invalidClue}".`
  console.log('You foolish person! Your clues must consist of only one word, with no special characters or numbers.')}
  else if ( allWords.some( word => [...userClues].some( 
    clue => { if ( word.toLowerCase() === clue.value.toLowerCase()) {
      invalidClue = clue.value; return true}} )   )) {  // 17/8/23 textbox to say one invalid word which is same as words on card    
    textBox.style.display = "flex";
    textBox.textContent = `You must not use a word from a card as your clue. An example of an invalid clue is "${invalidClue}".`
    console.log('You foolish person! You must not use a word from a card as your clue.')
  } else if ([...userClues].some( (clue, index) => {for (let i= index + 1; i<4; i++) {if (clue.value === userClues[i].value) {invalidClue = userClues[i].value; return true}} })) {textBox.style.display = "flex"; textBox.textContent = `You have a repeated clue! Change "${invalidClue}" to another clue.`;}
  else {  // 5/9/23 the else if statement above rejects same clues. [...userClues] needed as userClues is a NodeList not an array. However, not sure about userClues[i].value above, why does that work???
  textBox.style.display = "none";   // 17/8/23 remove the text box if present.
  submitCluesCount++  // 12/8/23 ADDED to provide extra condition for POINTER to show on CARDS
  userClues.forEach( clue => clue.value = clue.value.toUpperCase());
  
  getCluesFromBoard();  // WITHOUT IT, board.clues not updated to latest. BUT DOES IT MATTER, AS CODE WORKS WITHOUT THIS getCluesFromBoard. I WILL INCLUDE IT.
// updateCluesOnBoard();
//  userClueMap(); // 5/9/23 now removed and placed at same time as guessMap, so that the user guess syncs to clue.
  
  slotCards.forEach( cardslot => cardslot.style.display = "flex");  // DISPLAYS SLOTS, randomise cards + 1
  boards[0].randomise();
  updateCardsOnBoard();
  updateSlotsOnBoard();
  unpressCards(); // 12/8/23 Im SURE I DONT NEED THESE TWO, CARDS CANT BE PRESSED YET!!
  unpressSlots();
  userClues.forEach( clue => clue.setAttribute('disabled', 'disabled'));
  gridCards.forEach( clue => {clue.removeAttribute('disabled'); clue.style.cursor = "pointer"});
  cardAnticlockwiseButton.style.display = "block";
  cardClockwiseButton.style.display = "block";
  submitCluesButton.style.display = "none" // 17/8/23 was submitCluesButton.remove() , but this actually removes the element permanently, so would need to appendChild it again if needed. This just removes it from display.
  // submitGuessButton.style.display = "block"; 10/9/23 removed, see checkFullGrid()
  

  summaryBox.innerHTML = "<b>Team phase:</b><p>Click on a card to <i>rotate</i> and <i>position</i> it \
  onto the board.<p>Match each clue around the outside with the two words they relate to from the cards.\
  <p>Can you find the exact solution?"; }  //17/8/23
})

function convertNumberToWord(number) {
  const numberToWordMap = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
  };
  if (numberToWordMap.hasOwnProperty(number)) {
    return numberToWordMap[number];
  }
}
let newGameCount = 0; // 1/9/23
const newGameButton = document.getElementById("newGameButton"); // 17/8/23 new game
const submitGuessButton = document.getElementById('submitGuessButton');
let submitGuessCount = 0;
let gameScore = 0;
let totalScore = 0;
submitGuessButton.addEventListener('click', () => { // 7/8/23 SEND YOUR GUESS
  textBox.style.display = "none";
  unpressCards();
  unpressSlots();
  if (boards[0].cards.some( _ => _ === null )) {  // 17/8/23 ADDED this from board.removeIncorrectCards 
    textBox.style.display = "flex";
    textBox.textContent = "You must place a card in each space on the board before submitting your guess."
    return console.log('You foolish person, you need to fill all the spaces on the board with a card before submitting your guess!');} else { userGuessMap(); userClueMap(); // 5/9/23 userGuessMap added to log the users guess (now added clueMap here too to sync)
  boards[0].removeIncorrectCards();   // TAKES OFF WRONG CARDS, KEEPS ORIENTATION OF BOARD SAME
  updateCardsOnBoard();
   submitGuessButton.style.display = 'none'; // 10/9/23 added this to remove submitguessbutton after incorrect guess.
  updateSlotsOnBoard();
  disableCorrectCards();
  submitGuessCount++;  highlightCorrectCards(); // 5/9/23 added highlight after submitGuessCount to ensure correct cards are shown after one guess, but not when original are shown
  let totalScoreComment; // 1/9/23 these 6 lines on totalScoreComment to have additional totalScore
  if (submitGuessCount === 2) {   // after the second guess...
    gameScore = pressedCardsIndices.length; // the number of Cards in the grid (number of correct cards)
  } else if (submitGuessCount === 1 && pressedCardsIndices.length === 4) {
    gameScore = 6;
  }
  totalScore = totalScore + gameScore;  // 1/9/23 running total of score.
  if (newGameCount === 0) {
    totalScoreComment = "";
  } else {
    totalScoreComment = `Your <b>total score</b> across the ${convertNumberToWord(newGameCount + 1)} \
    games you have played is <b>${totalScore}</b>.`
  }
  if ( submitGuessCount === 2 && pressedCardsIndices.length < 4) { // 1/9/23 was === 4, but better at 2 as in real game (only max 2 attempts). this is for when less than 4 points (other else if when 4 points)
    disableAllCardslots(); // 17/8/23 this disables all cardslots on board but DOES NOT do slots. WHY???
    seeOriginalCardsButton.style.display = "block";
   // submitGuessButton.style.display = "none"; 10/9.23 not needed as it is stated earlier, after cards removed
   // totalScore = totalScore + gameScore;
    summaryBox.style.backgroundColor = "rgb(255, 230, 230)";
    summaryBox.innerHTML = 
    //`You have had four attempts, double the number usually attempted in this game.\
    //<br>So let us not prolong this any further.\
    `<br>Your point score for this <i>round</i> is ${gameScore}.\
    <p>This is the number of cards you have correctly guessed after two attempts.\    
    <p>${totalScoreComment}\
    <p><p>View the <i>solution</i> before proceeding to a new game.`;
}
  else if (pressedCardsIndices.length === 0) { 
    textBox.style.display = "flex";
    textBox.textContent = "None of your guesses were correct. Try again, but better!";
    summaryBox.innerHTML = "<b>Team phase:</b><p>You have <b>no</b> correct cards on the board.\
    <p>Rotate and position the cards to match the two words on separate cards with each clue on the outer \
    edge of the board.<p><b>Note:</b> Even if the <i>position</i> of the card on the \
    board is correct, the <i>orientation</i> (rotation) may not be.";
    summaryBox.style.backgroundColor = "rgb(211, 211, 211)";
  }
  else if ( boards[0].cards.every( card => card !== null && submitGuessCount === 1)) {
  //  gameScore = 6;
  //  totalScore = totalScore + gameScore;
    summaryBox.innerHTML = `You guessed them all correctly, and on your first attempt!\
    <p>For this <i>round</i> your team achieves the maximum <i>6</i> points \
    (for all four correct cards plus two bonus points for the correct solution upon the initial guess).\
    <p><p>${totalScoreComment}<br><br><b>Clue-giver:</b> Prepare for the <i>Next Round</i>.`;
    summaryBox.style.backgroundColor = "rgb(230, 255, 230)";
    // submitGuessButton.style.display = "none";  10/9.23 not needed as it is stated earlier, after cards removed
    newGameButton.style.display = "block";
    console.log(`You win! Number of guesses: ${ submitGuessCount}. Well done!`)   //10/8/23 ADDED submitGuessCount
  } else if ( boards[0].cards.every( card => card !== null) ) {
    //  totalScore = totalScore + gameScore;
      summaryBox.style.backgroundColor = "rgb(230, 255, 230)";
      summaryBox.innerHTML = `You have guessed all the cards correctly.\
      <p>Your point score for this <i>round</i> is ${gameScore} \
      as this is how many cards you correctly guessed (no bonus points as you needed an extra attempt).\
      <p><p>${totalScoreComment}<br><br><b>Clue-giver:</b> Prepare for the <i>Next Round</i>.`;
     // submitGuessButton.style.display = "none";  10/9.23 not needed as it is stated earlier, after cards removed
      newGameButton.style.display = "block";
      
  } 
}
})

function getCluesFromBoard() {
const userCluesArray = Array.from(userClues);
boards[0].clues = userCluesArray.map( (element,index,arr) => {
  if (index === 1 || index === 2) {
    return arr[index + 1].value} else if (index === 3) {
      return arr[1].value} else {
        return element.value }  // 7/8/23 THIS MAP ENSURES CLUES mapped to board.clues in CORRECT ORDER.
          } );
        }

function updateCluesOnBoard() { //NEED THIS FOR ROTATION OF BOARD.
  boards[0].clues.forEach( (clue, index) => {
    let cluesArray = Array.from(userClues);
    if (index === 0) {return cluesArray[0].value = clue} else if (index === 1) {
      return cluesArray[2].value = clue} else if (index === 2) {
        return cluesArray[3].value = clue} else if (index === 3) {
          return cluesArray[1].value = clue 
        }
   
  //  console.log(cluesArray[index].value);
  });
  
}


function enableAllCardslots() { console.log('submitGuessCount='+submitGuessCount)  // ALL BELOW ADDED FROM 10/8/23 (lock cards into position by disabling)
  if (submitGuessCount > 0 && submitGuessCount !== 2) { // MUST BE AFTER FIRST SUBMITGUESS, BUT NOT NEEDED SINCE ALL CARDSLOTS ENABLED ALREADY
    unpressedCardslotsOnBoard.forEach( cardslot => cardslot.removeAttribute('disabled'));
   } else if (submitGuessCount === 2) { // 10/9/23 added && submitguesscount != 2 above, and this else if statement so that all cardslots are disabled after second guess. Can change this if allow for more guesses, but will then have to amend some other functions. messy...
    unpressedCardslotsOnBoard.forEach( cardslot => cardslot.setAttribute('disabled', 'disabled')); }
} ;
let pressedCardsIndices = [];
let disableCardsCount = 0;

function disableCorrectCards() {  // DETERMINES THE FIRST (and subsequent) INDICES OF DISABLED CARD SLOTS
 // if (pressedCardsIndices.length > 0 || disableCardsCount === 0) {
    disableCardsCount++;
    
    
//  if (submitGuessCount === 0) {
  for (let i=0 ; i < 4; i++) { if (boards[0].cards[i] !== null && !pressedCardsIndices.includes(i)) { 
    pressedCardsIndices.push(i);
    unpressedCardslotsOnBoard[i].setAttribute('disabled', 'disabled');
    //unpressedCardslotsOnBoard[i].style.borderColor = 'rgb(0, 255, 0)'; // 5/9/23 GREEN BORDER
  } //else {unpressedCardslotsOnBoard[i].style.borderColor = 'rgb(0, 0, 0)'}  // 5/9/23
 } // } else if (submitGuessCount === 1) {
//    pressedCardsIndices.forEach( i => unpressedCardslotsOnBoard[(i+1) % 4].setAttribute('disabled', 'disabled'));
//  } else {console.log('Game ENDS');}
//}

}


function rotateDisabledClockwise() { // ANNOYING CODE TO ROTATE THE DISABLED CARDSLOTS (MAYBE CAN MAKE 'disabled' a Card property, also COLOUR OF DISABLED CARD also, or even COLOUR OF CARD can be Card property???)
  if (pressedCardsIndices.length > 0) {   
    pressedCardsIndices = pressedCardsIndices.map( i => {      
        unpressedCardslotsOnBoard[(i+1) % 4].setAttribute('disabled', 'disabled');
//        unpressedCardslotsOnBoard[(i+1) % 4].style.borderColor = 'rgb(0, 255, 0)';
//        unpressedCardslotsOnBoard[i].style.borderColor = 'rgb(0, 0, 0)';
        return (i+1) % 4 } ) }; // need this return (i+1) % 4 as the map sends i to (i+1)%4 for new pressedCardsIndices
     };

function rotateDisabledAnticlockwise() {
  if (pressedCardsIndices.length > 0) {
    pressedCardsIndices = pressedCardsIndices.map( i => {
      unpressedCardslotsOnBoard[(i+3) % 4].setAttribute('disabled', 'disabled');
        return (i+3) % 4  } );
          } 
  
    };


function highlightButtons() { // 12/8/23 THESE TWO functions HIGHLIGHT rotate card buttons when card is PRESSED
  cardAnticlockwiseButton.style.backgroundColor = 'rgb(255, 250, 205)'; // 12/8/23 ADDED these two
  cardAnticlockwiseButton.textContent = "Rotate card Anti-clockwise";
  cardAnticlockwiseButton.style.cursor = "pointer";
  cardClockwiseButton.style.backgroundColor = 'rgb(255, 250, 205)'; // 12/8/23 ADDED these two
  cardClockwiseButton.textContent = "Rotate card Clockwise";
  cardClockwiseButton.style.cursor = "pointer";
}

function unhighlightButtons() { // 12/8/23
  cardAnticlockwiseButton.style.backgroundColor = 'rgb(245, 245, 245)'; // 12/8/23 ADDED these two
  cardAnticlockwiseButton.textContent = "";
  cardAnticlockwiseButton.style.cursor = "";
  cardClockwiseButton.style.backgroundColor = 'rgb(245, 245, 245)'; // 12/8/23 ADDED these two
  cardClockwiseButton.textContent = "";
  cardClockwiseButton.style.cursor = "";
}


newGameButton.addEventListener('click', () => { unpressSlots(); // 1/9/23 unpress card if pressed
  newGameCount++;
  gameScore = 0;
  pressedCardsIndices = [];   // 31/8/23 RESETS all parameters for newGame
  submitGuessCount = 0;
  boards = generateBoards(soCloverWords); //17/8/23 this eventListener same as startGameButton, but add this since new board needs initialise
  newGameSummaryBox(); // 1/9/23 changes summaryBox to lightgray and new comment
  slotCards.forEach( cardslot => cardslot.style.display = "none");
  updateCardsOnBoard();
  summaryBox.style.display = "block";    // 17/8/23
  newGameButton.style.display = "none";  // 17/8/23 amend from startGameButton.remove, as newGamebutton remove from display but can come back
  userClues.forEach( clue => clue.value = "");
  userClues.forEach( clue => clue.setAttribute("placeholder", "Write your clue here"));
  boardAnticlockwiseButton.style.display = "block";
  boardAnticlockwiseButton.style.cursor = "pointer";  // 12/8/23 ADDED pointer AND textContent to highlight button only AFTER GameStart
  boardAnticlockwiseButton.textContent = "Rotate board Anti-clockwise";
  boardAnticlockwiseButton.style.backgroundColor = 'rgb(164, 221, 195)';
  boardClockwiseButton.style.display = "block";
  boardClockwiseButton.style.cursor = "pointer";    // 12/8/23 ADDED pointer, textContent and Color
  boardClockwiseButton.textContent = "Rotate board Clockwise";
  boardClockwiseButton.style.backgroundColor = 'rgb(164, 221, 195)';
//  submitCluesButton.style.display = "block"; // 1/9/23 NOT NEEDED cos only displays once clues written!
  // clueCards.forEach( rectangle => rectangle[0].style.display = "flex");
  
  gridCards.forEach( cardslot => {cardslot.style.display = "flex"; cardslot.style.borderColor = 'rgb(0, 0, 0)'}); // 10/9/23 added cardslot's bordercolor = black in the new game.
  userClues.forEach( clue => clue.removeAttribute('disabled'));
  
  toggleButton('card1');  // ADDED THESE 4 lines 5/8/23 TO SIMULATE ONE SWAP (and back again)
  toggleButton('card2');  // THIS WAS BECAUSE MY CODE ALWAYS SWAPS card3 when card4 is pressed
  toggleButton('card2');  // BUT AFTER ONE SWAP, THE CODE WORKS, SO I NEEDED TO SIMULATE ONE SWAP!!!
  toggleButton('card1'); submitGuessButton.style.display = 'none';  // 10/9/23 added submitguessbutton = none (see checkGridFull() function
  });

const slots = Array.from(document.querySelectorAll('cardslot')); // CHECK THIS... 11/9/23 NOW i understand ... it should be '.cardslot' !!!
  function disableAllCardslots() { // 17/8/23 disables all grid items on board, and slots as well
    gridCards.forEach( cardslot => cardslot.setAttribute('disabled', 'disabled'));
    slots.forEach( cardslot => cardslot.setAttribute('disabled', 'disabled')); // THIS DOES NOT WORK
  }

  function enableEveryCardslot() {  // 17/8/23 ACTUALLY THERE IS enableAllCardslots which is a 'lesser' 
    // implementation of this, as it uses 'grid-item unpressed' but I can CHECK later to see if i can 
    // just use this implementation instead????
    gridCards.forEach( cardslot => cardslot.removeAttribute('disabled'));
    slots.forEach( cardslot => cardslot.removeAttribute('disabled')); // THIS DOES NOT WORK
  }


  const seeOriginalCardsButton = document.getElementById('seeOriginalCardsButton');
  seeOriginalCardsButton.addEventListener('click', () => { unpressSlots(); // 1/9/23 unpresses card if pressed
    const currentBoardOrientation = boards[0].orientation % 4; // 31/8/23 SO BOARD orientation can remain same
    seeOriginalCardsButton.style.display = "none"; submitGuessButton.style.display = "none";
    newGameButton.style.display = "block";
    boards[0].reset;
    summaryBox.style.backgroundColor = "rgb(211, 211, 211)";
    summaryBox.innerHTML = `<br><b>Clue-giver:</b><p>Get ready for the next set of cards.<p><p>Ensure that the rest of the team are unable to view the screen before proceeding to the <i>next round</i>.` // 1/9/23
    updateCluesOnBoard();
    boards[0].slots.forEach( card => {if (card !== null && boards[0].originalCards.includes(card)) {
    card.orientation2 = 0; 
    boards[0].addCardToBoard(boards[0].slots, boards[0].slots.indexOf(card), boards[0].cards, boards[0].originalCards.indexOf(card))}
    });
  //  boards[0].cards = boards[0].originalCards;
    
    
    for (let i=currentBoardOrientation ; i > 0 ; i--) { boards[0].boardAnticlockwise() }; // 31/8/23 BOARD orientation same as what user left it.
    updateCardsOnBoard();  // DONE: 17/8/23 NEED TO do reset() and then make orientation2 = 0 for each card
    updateSlotsOnBoard();
    updateCluesOnBoard(); // 31/8/23
    disableCorrectCards(); // 31/8/23 ensures user cannot remove original cards from board.
    
    


});



function blankOutCard() { // 1/9/23 ensures gray color if card not on board or slot.
  for (let i=0; i<4; i++) {if (gridCards[i].textContent === "") {
  gridCards[i].style.backgroundColor = 'rgb(211, 211, 211)'} else {
    gridCards[i].style.backgroundColor = 'rgb(255, 255, 255)'}
  for (let i=0; i< 4 + difficulty; i++) { if (slotsContainers[i].textContent === "") {
  slotsContainers[i].style.backgroundColor = 'rgb(211, 211, 211)'} else {
    slotsContainers[i].style.backgroundColor = 'rgb(255, 255, 255)'}
} } }
/*
const submitButt = document.getElementById("submit");
submitButt.addEventListener('click', () => {
  proceedButton.style.display = "block";
  submitButt.style.display = "none";
}
)*/

const startGameButton = document.getElementById('startGameButton');

const returnButton = document.getElementById('returnButton');

userClues.forEach(inputField => {
  inputField.addEventListener('input', () => {
    
    // Check if all input fields have non-empty values
    const allFieldsFilled = Array.from(userClues).every(input => input.value.trim() !== '');

    // Display or hide the button based on the condition
    if (allFieldsFilled) {
      
      submitCluesButton.style.display = 'block';
    } else {
      
      submitCluesButton.style.display = 'none';
      textBox.style.display = 'none';   // 1/9/23 does not show textBox if it was revealed ealier (as submitCluesButton disappears when one clue is blank)
    }
  });
});


function checkFullGrid() {
  if (boards[0].cards.every(card => card !== null) && newGameButton.style.display !== "block") { 
    submitGuessButton.style.display = 'block';
    textBox.style.display = 'none' // removes red warning box, if present
  } else {
    submitGuessButton.style.display = 'none';
  }
}


function newGameSummaryBox() {
  summaryBox.style.backgroundColor = 'rgb(211, 211, 211)';
  summaryBox.innerHTML = "<b>Clue-giving phase:</b>\
  <p><b>Clue-giver</b>, write your new clues.\
  <p>Each clue must be a single word and should not contain any numbers or special characters.\
  <br>They must not be in the same word family as any word on a card."
}

let clueMap;    // 5/9/23 These functions map the first word of each clue to the first word of original cards.
let guessMap;
function userClueMap() {
  clueMap = [];
  for (let i=0; i<4; i++) {
    clueMap.push(boards[0].clues[i]);
  }
}

function userGuessMap() {
  guessMap = [];
  for (let i=0; i<4; i++) {
  guessMap.push(boards[0].cards[i].words[i]);
  }
}
  
function forbidGuess() {  // 5/9/23 These cause border of card to go red if that card was already guessed, and green if its the correct card
  if (submitGuessCount > 0) {
  let index = clueMap.indexOf(boards[0].clues[0]);
  
  for (let i = 0; i < 4; i++) {
    if (!gridCards[i].disabled && boards[0].cards[i] !== null) {
    
    if (boards[0].cards[i].words[i] === guessMap[(i+index)%4]) {
      
      gridCards[i].style.borderColor = 'rgb(255, 0, 0)';
      textBox.style.display = 'none';
      
    } else {      
      gridCards[i].style.borderColor = 'rgb(0, 0, 0)';
      
    }    
  } else if (boards[0].cards[i] === null) // 5/9/23 ADDED this to ensure that if cards swapped out, null card will be black border
  { gridCards[i].style.borderColor = 'rgb(0, 0, 0)' };
  }
if (gridCards.some(card => card.style.borderColor === 'rgb(255, 0, 0)')) {
  submitGuessButton.style.display = 'none'; 
//} else if (submitGuessCount === 1) { console.log('changeback'); // 10/9/23 added if submitguesscount = 1 to ensure the button only reappears between first and second guess.
//    submitGuessButton.style.display = 'block';
  }
  }
}
 


function highlightCorrectCards() {
  if (submitGuessCount > 0) {
  for (let i = 0; i < 4; i++) { 
    if (gridCards[i].disabled) { 
      gridCards[i].style.borderColor = 'rgb(255, 255, 255)';
      } else {
      gridCards[i].style.borderColor = 'rgb(0, 0, 0)'
      }
   }
  }
}

const arrayOfWords1 = ['a', 'a', 'a', 'a', 'a', 'f', 'g', 'h'];
const arrayOfWords2 = ['i', 'a', 'z', 'k', 'm', 'h', 'h', 'k', 'a', 'b', 'c'];
const arrayOfWords3 = ['n', 'i', 'c', 'n', 'o', 'a', 'a', 'a'];
function removeDuplicateWords(...arrays) {
  const combinedWordlist = [].concat(...arrays);
  const wordlist = combinedWordlist.map( word => word.toLowerCase()).filter( (word, index) => 
    {for (let i = index + 1; i < combinedWordlist.length; i++) {
      if (word === combinedWordlist[i]) {
        return false;}
        } 
      return true;}
      
      )
      return wordlist;
    }; 
  



function extractAtMostFourConsecutiveLetters(word, lengthOfSlice) {
  let combinationsOfWordArray = [];
  if (word.length > lengthOfSlice - 1) {
    for (let i = 0; i < word.length - lengthOfSlice + 1; i++)
    combinationsOfWordArray.push(word.slice(i,i+lengthOfSlice));
  } else {
    combinationsOfWordArray.push(word);
  }
  return combinationsOfWordArray;
}

function combinationsArrays(array) {
  let combinationsFromArray = [];
  array.forEach( word => {    
    combinationsFromArray.push(extractAtMostFourConsecutiveLetters(word, 4))
  })
  return combinationsFromArray;
}

const words123 = ['apple', 'banana', 'carrot'];

const words234 = ['banarama', 'parrot', 'applet', 'robot'];

function compareTwoArraysCommonWords(array1, array2) {

  for (let i= 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        
      }
    }
  }
}

function compareFamilyWords(array1, array2, length) {
  let commonWords = [];

  array1.forEach( (word1, index1) => {
    const combinations1 = extractAtMostFourConsecutiveLetters(word1, length);
  
    array2.forEach( (word2, index2) => {
      const combinations2 = extractAtMostFourConsecutiveLetters(word2, length);

      for (let i = 0; i < combinations1.length; i++) {
        for (let j = 0; j < combinations2.length; j++) {
          if (combinations1[i] === combinations2[j]) {
            commonWords.push( {
              1: word1,
              2: word2,
              combination: combinations1[i],
            })
          }
        }
      }
      })

})
return commonWords;
}





const codenamesWordlist = ["Hollywood", "Well", "Foot", "New York", "Spring", "Court", "Tube", "Point", "Tablet", "Slip", "Date", "Drill", "Lemon", "Bell", "Screen", "Fair", "Torch", "State", "Match", "Iron", "Block", "France", "Australia", "Limousine", "Stream", "Glove",
 "Nurse", "Leprechaun", "Play", "Tooth", "Arm", "Bermuda", "Diamond", "Whale", "Comic", "Mammoth", "Green", "Pass", "Missile", "Paste", "Drop", "Pheonix", "Marble", "Staff", "Figure", "Park", "Centaur", "Shadow", "Fish", "Cotton", "Egypt", "Theatre", "Scale", "Fall", "Track",
 "Force", "Dinosaur", "Bill", "Mine", "Turkey", "March", "Contract", "Bridge", "Robin", "Line", "Plate", "Band", "Fire", "Bank", "Boom", "Cat", "Shot", "Suit", "Chocolate", "Roulette", "Mercury", "Moon", "Net","Lawyer", "Satellite", "Angel", "Spider", "Germany", "Fork", "Pitch", 
 "King", "Crane", "Trip", "Dog", "Conductor", "Part", "Bugle", "Witch", "Ketchup", "Press", "Spine", "Worm", "Alps", "Bond", "Pan", "Beijing", "Racket", "Cross", "Seal", "Aztec", "Maple", "Parachute", "Hotel", "Berry", "Soldier", "Ray", "Post", "Greece", "Square", "Mass", "Bat",
 "Wave", "Car", "Smuggler", "England", "Crash", "Tail", "Card", "Horn", "Capital", "Fence", "Deck", "Buffalo", "Microscope", "Jet", "Duck", "Ring", "Train", "Field", "Gold", "Tick", "Check", "Queen", "Strike", "Kangaroo", "Spike", "Scientist", "Engine", "Shakespeare", "Wind",
 "Kid", "Embassy", "Robot", "Note", "Ground", "Draft", "Ham", "War", "Mouse", "Centre", "Chick", "China", "Bolt", "Spot", "Piano", "Pupil", "Plot", "Lion", "Police", "Head", "Litter", "Concert", "Mug", "Vacuum", "Atlantis", "Straw", "Switch", "Skyscraper", "Laser", "Scuba Diver",
 "Africa", "Plastic", "Dwarf", "Lap", "Life", "Honey", "Horseshoe", "Unicorn", "Spy", "Pants", "Wall", "Paper", "Sound", "Ice", "Tag", "Web", "Fan", "Orange", "Temple", "Canada", "Scorpion", "Undertaker", "Mail", "Europe", "Soul", "Apple", "Pole", "Tap", "Mouth", "Ambulance",
 "Dress", "Ice Cream", "Rabbit", "Buck", "Agent", "Sock", "Nut", "Boot", "Ghost", "Oil", "Superhero", "Code", "Kiwi", "Hospital", "Saturn", "Film", "Button", "Snowman", "Helicopter", "Loch Ness", "Log", "Princess", "Time", "Cook", "Revolution", "Shoe", "Mole", "Spell", "Grass",
 "Washer", "Game", "Beat", "Hole", "Horse", "Pirate", "Link", "Dance", "Fly", "Pit", "Server", "School", "Lock", "Brush", "Pool", "Star", "Jam", "Organ", "Berlin", "Face", "Luck", "Amazon", "Cast", "Gas", "Club", "Sink", "Water", "Chair", "Shark", "Jupiter", "Copper", "Jack",
 "Platypus", "Stick", "Olive", "Grace", "Bear", "Glass", "Row", "Pistol", "London", "Rock", "Van", "Vet", "Beach", "Charge", "Port", "Disease", "Palm", "Moscow", "Pin", "Washington", "Pyramid", "Opera", "Casino", "Pilot", "String", "Night", "Chest", "Yard", "Teacher", "Pumpkin",
 "Thief", "Bark", "Bug", "Mint", "Cycle", "Telescope", "Calf", "Air", "Box", "Mount", "Thumb", "Antarctica", "Trunk", "Snow", "Penguin", "Root", "Bar", "File", "Hawk", "Battery", "Compound", "Slug", "Octopus", "Whip", "America", "Ivory", "Pound", "Sub", "Cliff", "Lab", "Eagle",
 "Genius", "Ship", "Dice", "Hood", "Heart", "Novel", "Pipe", "Himalayas", "Crown", "Round", "India", "Needle", "Shop", "Watch", "Lead", "Tie", "Table", "Cell", "Cover", "Czech", "Back", "Bomb", "Ruler", "Forest", "Bottle", "Space", "Hook", "Doctor", "Ball", "Bow", "Degree",
 "Rome", "Plane", "Giant", "Nail", "Dragon", "Stadium", "Flute", "Carrot", "Wake", "Fighter", "Model", "Tokyo", "Eye", "Mexico", "Hand", "Swing", "Key", "Alien", "Tower", "Poison", "Cricket", "Cold", "Knife", "Church", "Board", "Cloak", "Ninja", "Olympus", "Belt", "Light",
 "Death", "Stock", "Millionaire", "Day", "Knight", "Pie", "Bed", "Circle", "Rose", "Change", "Cap", "Triangle"];
export const codenamesWords = codenamesWordlist.map( word => word.toLowerCase());
const duetWordlist = ["Drum", "Bride", "Wagon", "Univerity", "Hit", "Ash", "Bass", "Astronaut", "Doll", "Nerve", "Coach", "Beam", "Spoon", "Country", "Nose", "King Arthur", "Stamp", "Camp", "Brain", "Leaf", "Tutu", "Coast", "Lunch", "Thunder", "Potato", "Desk", "Onion",
 "Elephant", "Anchor", "Cowboy", "Flood", "Mohawk", "Santa", "Pitcher", "Barbecue", "Leather", "Skates", "Musketeer", "Snap", "Saddle", "Genie", "Mark", "Shoulder", "Governor", "Manicure", "Anthem", "Halloween", "Newton", "Balloon", "Fiddle", "Craft", "Glacier", "Cake",
 "Rat", "Tank", "Blind", "Spirit", "Cable", "Swamp", "Einstein", "Hide", "Crystal", "Gear", "Kiss", "Pew", "Powder", "Turtle", "Bacon", "Sherlock", "Squash", "Book", "Razor", "Dressing", "Brick", "Brazil", "Tear", "Stable", "Bikini", "Pen", "Roll", "Christmas", "Rubber",
 "Bay", "Mother", "Kick", "Fog", "Radio", "Crab", "Cone", "Skull", "Wheelchair", "Egg", "Butter", "Werewolf", "Cherry", "Patient", "Dryer", "Drawing", "Boss", "Fever", "Banana", "Polish", "Knot", "Paint", "Storm", "Goldilocks", "Pillow", "Chain", "Moses", "Saw", "Brother",
 "Rail", "Rope", "Street", "Pad", "Captain", "Wish", "Axe", "Shorts", "Popcorn", "Castle", "Second", "Team", "Oasis", "Mess", "Miss", "Avalanche", "Texas", "Sun", "Letter", "Rust", "Wing", "Steel", "Ear", "Scroll", "Bunk", "Cane", "Venus", "Ladder", "Purse", "Sheet", "Napoleon",
 "Sugar", "Director", "Ace", "Scratch", "Bucket", "Caesar", "Disk", "Beard", "Bulb", "Bench", "Scarecrow", "Igloo", "Tuxedo", "Earth", "Ram", "Sister", "Bread", "Record", "Dash", "Greenhouse", "Drone", "Steam", "Biscuit", "Rip", "Notre Dame", "Lip", "Shampoo", "Cheese",
 "Sack", "Mountie", "Sumo", "Sahara", "Walrus", "Dust", "Hammer", "Cloud", "Spray", "St.Patrick", "Kilt", "Monkey", "Frog", "Dentist", "Rainbow", "Whistle", "Reindeer", "Kitchen", "Lemonade", "Slipper", "Floor", "Valentine", "Pepper", "Road", "Shed", "Bowler", "Milk", "Wheel", "Magazine", "Brass", "Tea", "Helmet", "Flag", "Troll", "Jail", "Sticker", "Puppet", "Chalk", "Bonsai", "Sweat", "Gangster", "Butterfly", "Story", "Salad", "Armour", "Smoke", "Cave", "Quack", "Break", "Snake", "Mill", "Gymnast", "Wonderland", "Driver", "Spurs", "Zombie", "Pig", "Cleopatra", "Toast", "Penny", "Ant", "Volume", "Lace", "Battleship", "Maracas", "Meter", "Sling", "Delta", "Step", "Joan of Arc", "Comet", "Bath", "Polo", "Gum", "Vampire", "Ski", "Pocket", "Battle", "Foam", "Rodeo", "Squirrel", "Salt", "Mummy", "Blacksmith", "Chip", "Goat", "Laundry", "Bee", "Tattoo", "Russia", "Tin", "Map", "Yellowstone", "Silk", "Hose", "Sloth", "Kung Fu", "Clock", "Bean", "Lightning", "Bowl", "Guitar", "Ranch", "Pearl", "Flat", "Virus", "Ice Age", "Coffee", "Marathon", "Attic", "Wedding", "Columbus", "Pop", "Sherwood", "Trick", "Nylon", "Locust", "Pacific", "Cuckoo", "Tornado", "Memory", "Jockey", "Minotaur", "Big Bang", "Page", "Sphinx", "Crusader", "Volcano", "Rifle", "Boil", "Hair", "Bicycle", "Jumper", "Smoothie", "Sleep", "Pentagon", "Groom", "River", "Farm", "Judge", "Viking", "Easter", "Mud", "Parrot", "Comb", "Salsa", "Eden", "Army", "Paddle", "Saloon", "Mona Lisa", "Mile", "Blizzard", "Quarter", "Jeweller", "Hamburger", "Glasses", "Sail", "Boxer", "Rice", "Mirror", "Ink", "Beer", "Tipi", "Makeup", "Microwave", "Hercules", "Sign", "Pizza", "Wool", "Homer", "Minute", "Sword", "Soup", "Alaska", "Baby", "Potter", "Shower", "Blade", "Noah", "Soap", "Tunnel", "Peach", "Dollar", "Tip", "Love", "Jellyfish", "Stethoscope", "Taste", "Fuel", "Mosquito", "Wizard", "Big Ben", "Garden", "Waitress", "Shoot", "Shell", "Lumberjack", "Medic", "Dream", "Blues", "Earthquake", "Pea", "Parade", "Sled", "Smell", "Computer", "Cow", "Peanut", "Window", "Mustard", "Sand", "Golf", "Crow", "Iceland", "Apron", "Violet", "Door", "Tiger", "Joker", "House", "Collar", "Hawaii", "Dwarf", "Pine", "Magician", "Frost", "Curry", "Bubble", "Wood"];
export const duetWords = duetWordlist.map( word => word.toLowerCase());
const undercoverWordlist = ["Horse", "Sauna", "Hooker", "Stool", "Mouth", "Touchdown", "Snake", "Whiskey", "Pickle", "Hose", "Legend", "Blush", "Dick", "Cock", "Alcohol", "Sausage", "Pecker", "Straight", "Sore", "Toy", "Black", "White", "Period", "Couch", "Juice", "Bra", "Dame", "Chick", "Bitch", "Score", "Sheep", "Strap", "Mattress", "Train", "Bondage", "Wiener", "Penis", "Furry", "Joystick", "Coconuts", "Condom", "Bisexual", "Hole", "Secretary", "Roll", "Strip", "Freak", "Tramp", "Foreskin", "Wine", "Pee", "Experiment", "Johnson", "Banana", "Clam", "Blow", "Balloon", "Semen", "Regret", "Stripper", "Homerun", "Trim", "Bar", "Wood", "Paddle", "Cowgirl", "John", "Candle", "Cigarette", "Cigar", "Knob", "Sex", "Gang", "Stud", "Screw", "Trousers", "Safe", "Girl", "Package", "Grope", "Bulge", "Beach", "Chubby", "Beef", "Bender", "Shaft", "Peach", "Swallow", "Flower", "Trunk", "Sack", "Job", "Onion", "Bowl", "Jerk", "Crap", "Bush", "Box", "Mushroom", "Shame", "Couple", "Sweat", "Strobe", "Tubesteak", "Rug", "Butt", "Nylon", "Lick", "Hotel", "Boy", "Boob", "Toss", "Fatty", "Share", "Slut", "Swimmers", "Pound", "Tuna", "Roach", "Brownie", "Nuts", "Blonde", "Horny", "Catcher", "Body", "Dominate", "Mole", "Shave", "Orgasm", "Taboo", "Roof", "Twig", "Red", "Lube", "Nude", "Eat", "Hooters", "Legs", "Behind", "Olive", "Brown", "Shower", "Oyster", "Taco", "Salad", "Udders", "Rave", "Inch", "Nipple", "Gay", "High", "Booze", "Beaver", "Pussy", "Ice", "Skank", "Melons", "Tail", "Rack", "Uranus", "Queer", "Lingerie", "Needle", "Escort", "Herb", "Bear", "Bean", "Log", "Hamster", "Skirt", "Gigolo", "Tap", "Pie", "Vasectomy", "Queen", "Group", "Necklace", "Commando", "Headlights", "Ashes", "Bacon", "Goose", "Suck", "Smell", "Latex", "Tavern", "Smegma", "Vegas", "Queef", "Hot", "Navel", "Gag", "Headboard", "Bed", "Ass", "Caboose", "Carpet", "Smoke", "Cuffs", "Teabag", "Shot", "Vein", "Purple", "Gash", "Nail", "Hand", "Head", "Chaps", "Animal", "Coozie", "Fish", "Snatch", "Rookie", "Tease", "Snort", "Vibrator", "Pucker", "Film", "Mug", "Bang", "Hammer", "Grandma", "Grass", "Sniff", "Prick", "Tent", "Baked", "Video", "Pub", "G-Spot", "Movie", "Jazz", "Friction", "Smash", "Drunk", "Softballs", "Kitty",
 "Tequila", "Bottom", "Vinyl", "Prostate", "Clamps", "Motorboat", "Crabs", "French", "Hurl", "Cheek", "Solo", "Lizard", "Threesome", "Breast", "Virgin", "Prison", "Donkey", "Monkey", "Douche", "Freckles", "Bond", "Keg", "Spank", "Boxers", "Throat", "Pinch", "Vodka", "Pot", "Twat", "Mom", "Finger", "Fluff", "Bling", "Rectum", "Speed", "Missionary", "Tickle", "Sin", "Vomit", "Porn", "Cuddle", "Moist", "Manboobs", "Flash", "Dildo", "Cocktail", "Sperm", "Emission", "Tie", "Diarrhea", "Wad", "Pork", "Bottle", "Mixer", "Crack", "Fist", "Club", "Cucumber", "Spoon", "Seed", "Tip", "Intern", "Wang", "Pole", "Champagne", "Milkshake", "Loose", "Fire", "Choke", "Noodle", "Spread", "Doggy", "Tit", "Beer", "Waste", "Poker", "Gerbil", "Member", "Bartender", "Fetish", "Bone", "Motel", "Squirt", "Lotion", "Tongue", "Flesh", "Watch", "Player", "Balls", "Meat", "Cream", "Fecal", "Rubber", "Kinky", "Stalker", "Bust", "Tool", "Skid", "Wax", "Pitcher", "Knees", "Martini", "Lobster", "Feather", "Booty", "Joint", "Steamy", "Mesh", "Top", "Facial", "Weed", "Pipe", "Cherry", "Lust", "Knockers", "Fantasy", "Hump", "Poop", "Stiff", "Nurse", "Torture", "Bong", "Wench", "Pink", "Gangbang", "Love", "Coyote", "Drill", "Acid", "Line", "Stiletto", "Turd", "Touch", "Daddy", "Wet", "Pimp", "Hell", "Liquor", "Burn", "Drag", "Cougar", "Briefs", "Junk", "Naked", "Orgy", "Chest", "Whip", "Pig", "Jugs", "Lighter", "Erection", "Down", "Clap"]
export const undercoverWords = undercoverWordlist.map( word => word.toLowerCase());

compareTwoArraysCommonWords(words123, words234);






function wordEndsInLetter(array, letter) { // 5/9/23 logs words from array that end in letter
  let words = [];
  array.forEach( word => {
    let letters = word.split("");
    if (letters[word.length - 1] === letter) {
      words.push(word);
    }
  })
  return words;
}



function wordContainsLetter(array, letter) { // 5/9/23 logs words from array that contain letter
  let words = [];
  array.forEach( word => {
    let letters = word.split("");
    for (let i = 0; i < word.length; i++) {
      if (letters[i] === letter) {
      words.push(word);
    }
  }})
  return words;
}




// 5/9/23 this function overwrites soCloverWords from earlier, so only need let soCloverWords = [] earlier.
// arrays is the collection of wordlists chosen from selectWordlist(), removeDuplicate..() makes words lowercase before removing.
function createGame(...arrays) { 
  let wordlist = new Wordlist(removeDuplicateWords(...arrays));
  soCloverWords = wordlist.gameWords;
  
  boards = generateBoards(soCloverWords);
  
  return boards;
}

returnButton.addEventListener( 'click', () => {
  createGame(undercoverWords);
  userClues.forEach( clue => clue.value = "");    // 17/8/23 these two lines remove text but place placeholder (dont actually need this first one, as clues will be written by user)
userClues.forEach( clue => clue.setAttribute("placeholder", "Write your clue here"));
updateCardsOnBoard();
summaryBox.style.display = "block";    // 17/8/23
summaryBox.innerHTML = "<b>Clue-giving phase:</b>\
<p>Think of a clue that makes a link with the two words directly below the space provided.\
<p>The clue must be one word with no numbers or special characters. It should not be in the same word family as any word on a card.\
<p>Once all four clues around the board are written, submit them and pass the controls over to your <i>team</i>."
returnButton.style.display = "none";               // 24/8/23 changed from startGameButton.remove();

boardAnticlockwiseButton.style.display = "block";
boardAnticlockwiseButton.style.cursor = "pointer";  // 12/8/23 ADDED pointer AND textContent to highlight button only AFTER GameStart
boardAnticlockwiseButton.textContent = "Rotate board Anti-clockwise";
boardAnticlockwiseButton.style.backgroundColor = 'rgb(164, 221, 195)';
boardClockwiseButton.style.display = "block";
boardClockwiseButton.style.cursor = "pointer";    // 12/8/23 ADDED pointer, textContent and Color
boardClockwiseButton.textContent = "Rotate board Clockwise";
boardClockwiseButton.style.backgroundColor = 'rgb(164, 221, 195)';
// submitCluesButton.style.display = "block";     // 24/8/23
// clueCards.forEach( rectangle => rectangle[0].style.display = "flex");

gridCards.forEach( cardslot => cardslot.style.display = "flex");
userClues.forEach( clue => clue.removeAttribute('disabled'));

toggleButton('card1');  // ADDED THESE 4 lines 5/8/23 TO SIMULATE ONE SWAP (and back again)
toggleButton('card2');  // THIS WAS BECAUSE MY CODE ALWAYS SWAPS card3 when card4 is pressed
toggleButton('card2');  // BUT AFTER ONE SWAP, THE CODE WORKS, SO I NEEDED TO SIMULATE ONE SWAP!!!
toggleButton('card1'); submitGuessButton.style.display = 'none';  // 10/9/23 added submitguessbutton = none (see checkGridFull() function)
}
)

const wordlistButtons = document.querySelectorAll('.wordlist-selector-button');
const wordlists = [clover, codenamesWords, duetWords, undercoverWords];

function selectWordlist() { // 11/9/23 if classlist of button is 'wordlist-pressed', those wordlist are used (once 'proceed' is clicked)
  let wordlist = [];
  for (let i=0; i < wordlistButtons.length; i++) {
    if ( wordlistButtons[i].classList.contains('wordlist-pressed')) {
      wordlist.push(wordlists[i]);
    }
  }
  return wordlist;
}


wordlistButtons.forEach( button => { button.addEventListener( 
  'click' , () => {
    if (!button.classList.contains('wordlist-pressed')) {
      button.classList.add('wordlist-pressed');
      proceedButton.removeAttribute('disabled');
      proceedButton.style.backgroundColor = 'rgb(152, 251, 152)'; // palegreen
    } else {
      button.classList.remove('wordlist-pressed');
      if ([...wordlistButtons].every(button => !button.classList.contains('wordlist-pressed'))) { // 11/9/23 .every does not work on Nodelist, so use spread operator and [] to form array
        proceedButton.setAttribute('disabled', 'disabled');
        proceedButton.style.backgroundColor = ''; // default color
      }
    }
  }
)}
)
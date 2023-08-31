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
const clover4 =['shirt', 'tail', 'menu', 'child', 'strength', 'couch', 'farm', 'helmet', 'cougar', 'stone', 'coffee', 'puzzle', 'past', 'flash', 'capital', 'doll', 'dance', 'prison', 'matter', 'crown', 'casino', 'mind', 'moon', 'hide', 'chest', 'pit', 'paintbrush', 'nightmare', 'ink', 'stitches', 'garden', 'spear', 'heart', 'gas', 'appetite', 'war', 'wheat', 'museum', 'roof', 'canal', 'box', 'eye', 'sea', 'bouquet', 'port', 'gamble', 'mask', 'sugar', 'hole', 'march', 'wood', 'skeleton', 'charge', 'antarctica', 'armour', 'curtain', 'tank', 'challenge', 'friend', 'bill', 'noodle', 'weapon', 'bakery', 'tent', 'rose', 'volume', 'ammo', 'vacation', 'defence', 'piano', 'sense', 'bridge', 'permanent', 'cannon', 'potato', 'champion', 'screw', 'tomato', 'grey', 'forecast', 'studio', 'cave', 'mosquito', 'magician', 'explore', 'giant', 'bucket', 'barn', 'new', 'violin', 'fairy', 'cuddle', 'cat', 'record', 'monster', 'body', 'country', 'secret', 'cigarette', 'stick', 'underground', 'autumn', 'machine', 'curry', 'berry', 'electricity', 'spy', 'tube', 'bell', 'fruit', 'whale', 'wild', 'nude', 'well', 'rooster', 'alcohol', 'ball', 'night', 'tree', 'school', 'candy', 'court', 'danger', 'grass', 'mustard', 'apprentice', 'heritage', 'bedroom', 'chain', 'cold', 'advocate', 'fur', 'engine', 'letter', 'safari', 'sewer', 'minor', 'white', 'fable', 'cavalry', 'console', 'voice', 'recipient', 'cell', 'pizza', 'moustache', 'surgeon', 'silver', 'mouse', 'yellow', 'toilet', 'earth', 'astronaut', 'fish', 'padlock', 'inside', 'park', 'donkey', 'virgin', 'mug', 'crescent', 'outlet', 'size', 'camp', 'jungle', 'frame', 'weight', 'pumpkin', 'lady', 'blanket', 'pearl', 'carrot', 'carpet', 'laugh', 'luxury', 'battery', 'judge', 'herbs', 'dresser', 'suitcase', 'utensil', 'middle', 'grape', 'shower', 'fashion', 'movie', 'tile', 'bite', 'oasis', 'cereal', 'evening', 'plank', 'lighter', 'shelter', 'ireland', 'medusa', 'soldier', 'ghost', 'storm', 'pad', 'liquid', 'twins', 'patio', 'africa', 'master', 'skin', 'border', 'log', 'target', 'leak', 'flask', 'marriage', 'ladder', 'pilot', 'skate', 'circus', 'cage', 'bump', 'green', 'pie']
const clover3 = ['hero', 'emergency', 'metal', 'lighthouse', 'father', 'internet', 'snack', 'captain', 'medal', 'wave', 'fair', 'dirty', 'lemon', 'dog', 'ramp', 'television', 'house', 'hood', 'pear', 'lamp', 'cinema', 'cup', 'jump', 'dream', 'dungeon', 'ring', 'cane', 'wool', 'kitchen', 'finger', 'note', 'hard', 'universe', 'chameleon', 'wheel', 'balance', 'nerve', 'plane', 'nut', 'bath', 'salt', 'cotton', 'chef', 'square', 'mummy', 'flight', 'bread', 'chess', 'sound', 'gold', 'melon', 'lake', 'blond', 'trailer', 'decor', 'recipe', 'spice', 'detective', 'town', 'sky', 'club', 'loop', 'stylist', 'pyramid', 'space', 'accessory', 'brain', 'alarm', 'dough', 'queen', 'water', 'attic', 'double', 'silence', 'air', 'police', 'match', 'mother', 'rope', 'paradise', 'smoke', 'needle', 'knot', 'butcher', 'bay', 'pipe', 'magic', 'slow', 'tool', 'hall', 'heroine', 'hair', 'leaf', 'career', 'swing', 'bottom', 'ambulance', 'fox', 'mountain', 'dictator', 'pan', 'orange', 'tiny', 'feather', 'fountain', 'ice', 'walk', 'chick', 'first', 'fever', 'building', 'boxing', 'arrow', 'shadow', 'picture', 'market', 'jelly', 'computer', 'demon', 'revolver', 'dwarf', 'science', 'cross', 'hot', 'work', 'cream', 'laser', 'arm', 'turtle', 'statue', 'grain', 'shed', 'track', 'milk', 'taste', 'hell', 'north', 'bottle', 'group', 'beard', 'board', 'button', 'union', 'axe', 'bone', 'marine', 'spring', 'band', 'small', 'humour', 'garbage', 'car', 'feline', 'garage', 'tobacco', 'clown', 'stamp', 'bang', 'owl', 'ruin', 'straw', 'religion', 'promotion', 'thunder', 'solitary', 'grave', 'train', 'bear', 'sand', 'oven', 'entry', 'round', 'hunt', 'thread', 'sponge', 'black', 'birthday', 'press', 'military', 'dinosaur', 'pocket', 'suite', 'missile', 'comedy', 'zoo', 'angel', 'key', 'bed', 'polar', 'short', 'drink', 'horse', 'foot', 'winter', 'island', 'high', 'wolf', 'guardian', 'moist', 'sunday', 'report', 'string', 'blood', 'microscope', 'handle', 'talent', 'vegetable', 'foam', 'animal', 'map', 'waiter', 'fool', 'rail', 'pig', 'sage', 'trade', 'toy', 'basket', 'weak', 'knight'];
const clover2 = ['month', 'stroke', 'cabbage', 'stunt', 'rain', 'asset', 'race', 'closet', 'family', 'flame', 'sleeve', 'architecture', 'elastic', 'triangle', 'weather', 'order', 'furniture', 'comforter', 'brown', 'covered', 'princess', 'cactus', 'bulb', 'cake', 'duck', 'trim', 'barracks', 'kiss', 'cemetery', 'bracelet', 'deep', 'region', 'blade', 'peace', 'bowl', 'mouth', 'sock', 'door', 'cow', 'circle', 'plush', 'archaeology', 'cork', 'distributor', 'stocks', 'crane', 'district', 'lazy', 'shop', 'file', 'magnet', 'tennis', 'nest', 'bubble', 'poetry', 'sweet', 'antiquity', 'exit', 'plant', 'candle', 'limit', 'pirate', 'intersection', 'instrument', 'volcano', 'root', 'screen', 'beast', 'face', 'butterfly', 'road', 'cocktail', 'quit', 'soap', 'full', 'branch', 'business', 'dish', 'myth', 'big', 'pigeon', 'robot', 'america', 'wand', 'hammer', 'drawing', 'bin', 'forbidden', 'charm', 'tame', 'flour', 'sail', 'diamond', 'book', 'soft', 'poison', 'cockroach', 'landscape', 'champagne', 'switzerland', 'cookie', 'craft', 'shell', 'flea', 'right', 'forest', 'display', 'octopus', 'alliance', 'cabin', 'old', 'tiger', 'pump', 'season', 'card', 'porcelain', 'bench', 'patron', 'stud', 'camera', 'end', 'commerce', 'trophy', 'shovel', 'grease', 'wish', 'buckle', 'sword', 'thief', 'theatre', 'smell', 'oar', 'blue', 'tunnel', 'dress', 'vision', 'office', 'pair', 'protect', 'chocolate', 'slide', 'snail', 'dynamite', 'pliers', 'ray', 'boot', 'rat', 'gate', 'punch', 'soup', 'game', 'canvas', 'plastic', 'detergent', 'castle', 'frost', 'bird', 'treasure', 'nurse', 'sticky', 'cushion', 'necklace', 'oil', 'vampire', 'food', 'gift', 'library', 'bomb', 'day', 'shield', 'inspection', 'history', 'ear', 'cavern', 'shark', 'feed', 'major', 'dead', 'radar', 'reptile', 'wine', 'boat', 'iron', 'whirlwind', 'drum', 'fire', 'sister', 'hotel', 'banana', 'tattoo', 'doe', 'clothing', 'perfume', 'chariot', 'limb', 'napkin', 'bank', 'lava', 'dessert', 'god', 'hand', 'river', 'radio', 'crow', 'roast', 'essence', 'joke', 'hospital', 'mint', 'recent', 'layer', 'devil', 'revolution', 'fry', 'ruler', 'mail', 'shape', 'ground', 'asia', 'glove'];
const clover1 = ['witness', 'sausage', 'hardware', 'ticket', 'table', 'mushroom', 'truck', 'church', 'mirage', 'airport', 'sport', 'currency', 'ship', 'apple', 'common', 'exhibition', 'cantina', 'lightning', 'phone', 'music', 'handicap', 'lion', 'rich', 'star', 'honey', 'desert', 'paper', 'virus', 'diet', 'explosion', 'top', 'show', 'heavy', 'tea', 'room', 'life', 'powder', 'labyrinth', 'party', 'assassin', 'fault', 'france', 'physical', 'rabbit', 'jewel', 'summit', 'bug', 'genius', 'summer', 'species', 'temple', 'suit', 'illness', 'column', 'cloud', 'cheese', 'beer', 'marker', 'technology', 'edge', 'heel', 'revenge', 'watch', 'motor', 'europe', 'repair', 'victory', 'dragon', 'painting', 'speaker', 'ladybug', 'restaurant', 'bag', 'thin', 'rice', 'balcony', 'glasses', 'syrup', 'king', 'place', 'tongue', 'wizard', 'attraction', 'rake', 'mobile', 'oak', 'raft', 'suspect', 'beach', 'morning', 'head', 'device', 'egg', 'nail', 'newspaper', 'bus', 'hobbies', 'series', 'glass', 'turn', 'skull', 'award', 'fly', 'calendar', 'large', 'pine', 'spicy', 'hat', 'brush', 'travel', 'flower', 'fishing', 'pepper', 'fast', 'light', 'case', 'stage', 'hearing', 'ladle', 'hearth', 'fuel', 'luck', 'roll', 'hook', 'chair', 'beef', 'doctor', 'mark', 'mirror', 'ballroom', 'hen', 'bike', 'memory', 'down', 'guide', 'love', 'snow', 'scissors', 'palace', 'wing', 'ocean', 'camouflage', 'salad', 'young', 'window', 'uniform', 'whip', 'human', 'tradition', 'bronze', 'sabre', 'broom', 'strong', 'knife', 'caterpillar', 'bar', 'song', 'station', 'throat', 'delivery', 'sight', 'base', 'subway', 'baby', 'clean', 'story', 'jar', 'chimney','tornado', 'spider', 'shelf', 'transport', 'china', 'belt', 'bark', 'wind', 'carton', 'snake', 'belgium', 'sharp', 'line', 'red', 'adventure', 'umbrella', 'mass', 'photo', 'orchid', 'performance', 'climbing', 'pond', 'sheep', 'firefighter', 'colour', 'rifle', 'post', 'boss', 'siren', 'apron', 'cube', 'degree' ,'sun', 'concert', 'cable', 'basement', 'passion', 'field', 'crab', 'flute', 'grenade', 'mud', 'claw', 'trash', 'thermometer', 'guitar', 'lock', 'schedule', 'envelop', 'turnip', 'brother', 'grate'];
const clover = [...clover1, ...clover2, ...clover3, ...clover4];
console.log('clover:', clover.length);
console.log('clover4:', clover4.length);
console.log('clover3:', clover3.length);
console.log('clover2:', clover2.length);
console.log('clover:', clover1.length);
const _wordlistClover = new Wordlist(clover);
export const soCloverWords = _wordlistClover.gameWords;
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
console.log('test colour change');
// Add a click event listener to the button
boardAnticlockwiseButton.addEventListener('click', () => {
  getCluesFromBoard();      // 7/8/23 USER MAY ADD/AMEND CLUES. THIS TRANSFERS THEM TO boards[].clues
  boards[0].boardAnticlockwise();
  const clueStyles = getStyleFromElements(clueCards);
  const clueColors1 = ['lightgreen', 'lightblue', 'lightgreen', 'lightblue'];
  console.log(clueStyles);
  if (clueStyles[0].backgroundColor === 'rgb(144, 238, 144)') {
    console.log('change colour test');
    
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
})
boardClockwiseButton.addEventListener('click', () => {
  getCluesFromBoard();      // 7/8/23 USER MAY ADD/AMEND CLUES. THIS TRANSFERS THEM TO boards[].clues
  boards[0].boardClockwise();
  const clueStyles = getStyleFromElements(clueCards);
  const clueColors1 = ['lightgreen', 'lightblue', 'lightgreen', 'lightblue'];
  console.log(clueStyles);
  if (clueStyles[0].backgroundColor === 'rgb(144, 238, 144)') {
    console.log('change colour test');
    
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
  console.log('should be enabled NOW');
  rotateDisabledClockwise();  // 10/8/23 ROTATES pressedCardIndices array THEN DISABLES these ROTATED (correct) CARDS
 console.log(boards[0].clues);
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
    console.log(button.length);
    let buttonPosition = button[0].id.replace(/\D/g, "");
    if (button[0].id.includes('card')) {
      boards[0].cardClockwise(buttonPosition -1);
    } else if (button[0].id.includes('slot')) {
      boards[0].slotClockwise(buttonPosition -1);
    }
    updateCardsOnBoard();
  updateSlotsOnBoard();
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
  updateSlotsOnBoard();
  }
});
const submitCluesButton = document.getElementById('submitCluesButton');
const summaryBox = document.getElementById("summaryBox"); // 17/8/23
const proceedButton = document.getElementById("proceedButton");
proceedButton.addEventListener('click', () => {
//  boards[0].getCardsOnBoardPosition;
// updateBoard2();
userClues.forEach( clue => clue.value = "");    // 17/8/23 these two lines remove text but place placeholder (dont actually need this first one, as clues will be written by user)
userClues.forEach( clue => clue.setAttribute("placeholder", "Write your clue here"));
updateCardsOnBoard();
summaryBox.style.display = "block";    // 17/8/23
summaryBox.innerHTML = "<b>Player One:</b>\
<p>Write a clue that you think links the two words on the cards directly below the space \
where you write the clue.\
<br>The clue must be one word with no numbers or special characters.\
<p>Once you have written all four clues, submit them and pass the controls over to !</p>"
proceedButton.style.display = "none";               // 24/8/23 changed from startGameButton.remove();
console.log('why not working2')
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
console.log(gridCards);
gridCards.forEach( cardslot => cardslot.style.display = "flex");
userClues.forEach( clue => clue.removeAttribute('disabled'));
console.log('poopylopp2');
toggleButton('card1');  // ADDED THESE 4 lines 5/8/23 TO SIMULATE ONE SWAP (and back again)
toggleButton('card2');  // THIS WAS BECAUSE MY CODE ALWAYS SWAPS card3 when card4 is pressed
toggleButton('card2');  // BUT AFTER ONE SWAP, THE CODE WORKS, SO I NEEDED TO SIMULATE ONE SWAP!!!
toggleButton('card1');
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
    function updateBoard2() {   //THIS IS NOT LEGACY, DO NOT DELETE!!
      console.log('poopoopop');
     const gridElement = document.getElementById('grid');
     console.log(gridElement);
console.log(gridElement.innerHTML);
 //     const gridItems = gridElement.getElementsByClassName('grid-item');
 //     const gridArray = Array.from(gridItems);
      // Clear existing content in the grid
      gridElement.innerHTML = '';
      console.log('cleared gridElement');
console.log(gridElement);
      console.log(gridElement.innerHTML);
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

function updateSlots() {  //THIS IS NOT LEGACY DO NOT DELETE!!
  console.log('foottu');
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
console.log(buttonsy[0].replace(/\D/g, ""));





function swapCards(otherButton) {
console.log('SCREW YOU2');

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
   
  //AMENDED THIS 29/7/3 so that CURRENTLY PRESSED BECOMES UNPRESSED (REMOVED 5/8/23 as unpressCards/Slots does same thing.)
  // cardButtons[0].classList.remove('pressed');
  // cardButtons[0].classList.add('unpressed');
  // otherButton.classList.remove('unpressed');
  // otherButton.classList.add('pressed');
   
  updateBoard2(); //THIS IS NOT LEGACY CODE- cannot replace by updateCardsOnBoard / Slots. NEED TO FIND OUT WHAT IT DOES!
  
  updateSlots();  //THIS IS NOT LEGACY CODE - without it, cards repplicate onto empty when swapped!

 // unpressCards(); 12/8/23 REMOVED NOT NEEDED?
  
 // unpressSlots();
  console.log(currentPressedButtonId);
  console.log('should unpress button after swap');
  console.log(currentPressedButtonId);
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
          highlightButtons(); // 12/8/23 ADDED this function to HIGHLIGHT option to rotate PRESSED Card
        }
        else if (button === currentPressedButtonId) {    // 26/7/23 -AMENDED THIS FIRST IF STATEMENT THE DELETIONS ABOVE:
        console.log('remove pressed')
        currentPressedButtonId = null;              // : SO THAT NO NEED TO CHANGE BETWEEN CURRENT AND SECOND BUTTON.
       // button.classList.remove('pressed'); // Remove the pressed class from this buttonId
       // button.classList.add('unpressed');
       // cardAnticlockwiseButton.style.backgroundColor = 'rgb(245, 245, 245)'; // 12/8/23 ADDED these two
       // cardAnticlockwiseButton.textContent = "";
       unpressCards();  // 12/8/23 ADDED two lines, REMOVED 4 lines above (unpress has color change)
       unpressSlots();
          }  else if (button !== currentPressedButtonId && currentPressedButtonId !== null) {
              console.log('switch cards');       //ADDED THIS 28/7/23
              currentPressedButtonId = button;  // 4/8/23 STILL SEEMS TO WORK IF THIS IS NULL.
              console.log(currentPressedButtonId); //4/8/23 IN FACT COULD I... (no cos, need pressed className in swapCards function) JUST REMOVE PRESSED AT THE END OF else if HERE?
              //currentPressedButtonId = null; //ADDED 4/8/23 COS DUNNO WHY current = button, MUST BE A REASON RIGHT??
              //button.classList.remove('unpressed');
              //button.classList.add('pressed');
              swapCards(button);
              highlightButtons(); // 12/8/23 ADDED this function to HIGHLIGHT option to rotate PRESSED Card
              unpressCards(); // 12/8/23 ADDED two lines, removed these same lines from swapCards function
              unpressSlots();
              updateCardsOnBoard();
              updateSlotsOnBoard();
              console.log(currentPressedButtonId);
              console.log(document.getElementsByClassName('pressed'));
              console.log('ARGH WHO KNOWS!!!!')
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
console.log(cardslots);


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
console.log('poopo5o');



// 5/8/23 see 2 lines below for MOVE OF const AND AMENDMENT:
boards.forEach( board => {
  const wordsOnCards = board.cards;  // 5/8/23 PREVIOUSLY THIS WAS BEFORE boards.forEach AND = boards[0].cards instead
  console.log(wordsOnCards);         // 5/8/23 SO IT MEANS I CAN DO THIS FOR MORE THAN ONE BOARD.
  [0,1,3,2].forEach( (index, element) => {if (wordsOnCards[element] !== null) {
    console.log(element);

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
}
)
}


function updateSlotsOnBoard() {
  //  const cardslots = Array.from(document.getElementsByClassName('grid-item'));
  //  console.log(cardslots);
  //  boards.forEach( board => {
   //   [0,1,3,2].forEach( index => {if (board.cards[index] !== null) {
    
  const grid = Array.from(document.getElementsByClassName('slot'));
  console.log('poro');
  
  
  // 5/8/23 SWAPPED const wordOnCards TO 2 LINES BELOW
  boards.forEach( board => {
    grid.forEach(element => element.innerHTML = ''); // Clear existing content inside the card 6/8/23 MOVED HERE INSTEAD OF WITHIN if STATEMENT OF forEach FUNCTION. SEEMS FINE.
    const wordsOnCards = board.slots;  // 5/8/23 PREVIOUSLY THIS WAS BEFORE boards.forEach AND = boards[0].cards instead
    console.log(wordsOnCards);
    [0,1,2,3,4].forEach( element => {if (wordsOnCards[element] !== null) { // 31/8/23 NOW only 0,1,2,3,4 for only 5 cardslots
      console.log(element);
  
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
  }
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
console.log(allWords); // ALL THE WORDS ON CARDS IN SINGLE ARRAY
if ([...userClues].some(clue => clue.value === "")) {
  textBox.style.display = "flex";
  textBox.textContent = "Give a clue for every pair before submitting!";
}
else if ([...userClues].some( clue => { 
  if (!/^[A-Za-z]+$/.test(clue.value)) { invalidClue = clue.value;  return true } // 17/8/23 textbox says one word which is false
} )) {
  console.log(invalidClue);
  textBox.style.display = "flex";
  textBox.textContent = `Your clues must only consist of one word, with no special characters or numbers. An example of an invalid clue is "${invalidClue}".`
  console.log('You foolish person! Your clues must consist of only one word, with no special characters or numbers.')}
  else if ( allWords.some( word => [...userClues].some( 
    clue => { if ( word.toLowerCase() === clue.value.toLowerCase()) {
      invalidClue = clue.value; return true}} )   )) {  // 17/8/23 textbox to say one invalid word which is same as words on card
    
    textBox.style.display = "flex";
    textBox.textContent = `You must not use a word from a card as your clue. An example of an invalid clue is "${invalidClue}".`
    console.log('You foolish person! You must not use a word from a card as your clue.')
  } else {
  textBox.style.display = "none";   // 17/8/23 remove the text box if present.
  submitCluesCount++  // 12/8/23 ADDED to provide extra condition for POINTER to show on CARDS
  userClues.forEach( clue => clue.value = clue.value.toUpperCase());
  console.log(userClues[0].value);
  getCluesFromBoard();  // WITHOUT IT, board.clues not updated to latest. BUT DOES IT MATTER, AS CODE WORKS WITHOUT THIS getCluesFromBoard. I WILL INCLUDE IT.
//updateCluesOnBoard();
  console.log(boards[0].clues);
  console.log('poo')
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
  submitGuessButton.style.display = "block";
  console.log(userClues);
  console.log(boards[0].cards);
  summaryBox.innerHTML = "<b>Player Two:</b><p>Each <b>clue</b> links to exactly two words from \
  distinct cards.<p>Click to <b>rotate</b> and <b>position</b> the cards at the bottom onto the \
  board to match the words with the clues.<p>Only four of the cards form the correct answer."; }  //17/8/23
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
    return console.log('You foolish person, you need to fill all the spaces on the board with a card before submitting your guess!');} else {
  boards[0].removeIncorrectCards();   // TAKES OFF WRONG CARDS, KEEPS ORIENTATION OF BOARD SAME
  updateCardsOnBoard();
  console.log(boards[0].slots);
  updateSlotsOnBoard();
console.log('foo');
  disableCorrectCards();
  submitGuessCount++;
  if (submitGuessCount === 2) {
    gameScore = pressedCardsIndices.length;
  }
  if ( submitGuessCount === 4) {
    disableAllCardslots(); // 17/8/23 this disables all cardslots on board but DOES NOT do slots. WHY???
    seeOriginalCardsButton.style.display = "block";
    submitGuessButton.style.display = "none";
    totalScore = totalScore + gameScore;
    summaryBox.style.backgroundColor = "rgb(255,230,230)";
    summaryBox.innerHTML = `You have had four attempts, double the number usually attempted in this game.\
    <br>So let us not prolong this any further.\
    <br>You can view the solution before proceeding to a new game.\
    <p>Your point score for this game is <b>${convertNumberToWord(gameScore)}</b>.\
    <br>This was the number of cards you had correctly guessed after 2 attempts.\
    <p><p>Your <b>total score</b> across ${newGameCount + 1} games is ${totalScore}`;
}
  else if (pressedCardsIndices.length === 0) {
    textBox.style.display = "flex";
    textBox.textContent = "None of your guesses were correct. Try again, but better!";
    summaryBox.innerHTML = "<b>Player Two:</b><p>You have <b>no</b> correct cards on the board.\
    <p><b>Rotate</b> and <b>position</b> the cards to match the words with the clues on the outer \
    edge of the board.<br><b>Important:</b> Even if the <i>position</i> of the card on the \
    board is correct, but the <i>orientation</i> (rotation) may not be.";
    summaryBox.style.backgroundColor = "rgb(211,211,211)";
  }
  else if ( boards[0].cards.every( card => card !== null && submitGuessCount === 1)) {
    gameScore = 6;
    totalScore = totalScore + gameScore;
    summaryBox.innerHTML = `You guessed them all correctly, and on your 1st attempt!\
    <p>You get the maximum <b>six points!</b>\
    <p><p>Your <b>total score</b> across ${newGameCount + 1} games is ${totalScore}`;
    summaryBox.style.backgroundColor = "rgb(230,255,230)";
    submitGuessButton.style.display = "none";
    newGameButton.style.display = "block";
    console.log(`You win! Number of guesses: ${ submitGuessCount}. Well done!`)   //10/8/23 ADDED submitGuessCount
  } else if ( boards[0].cards.every( card => card !== null) ) {
      totalScore = totalScore + gameScore;
      summaryBox.style.backgroundColor = "rgb(230,255,230)";
      summaryBox.innerHTML = `You guessed them all correctly, after <b>${submitGuessCount} attempts</b>.\
      <p>Your point score for this game is <b>${convertNumberToWord(gameScore)}</b>!\
      <br>This was the number of cards you had correctly guessed after 2 attempts.\
      <p><p>Your <b>total score</b> across ${newGameCount + 1} games is ${totalScore}`;
      submitGuessButton.style.display = "none";
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
  console.log('foobardyhardypants444nd')
}


function enableAllCardslots() {   // ALL BELOW ADDED FROM 10/8/23 (lock cards into position by disabling)
  if (submitGuessCount > 0) { // MUST BE AFTER FIRST SUBMITGUESS, BUT NOT NEEDED SINCE ALL CARDSLOTS ENABLED ALREADY
    unpressedCardslotsOnBoard.forEach( cardslot => cardslot.removeAttribute('disabled'));
   }
} ;
// cardslot 1,2 locked => 1,2,3 locked (actual) on clockwise
let pressedCardsIndices = [];
let disableCardsCount = 0;

function disableCorrectCards() {  // DETERMINES THE FIRST (and subsequent) INDICES OF DISABLED CARD SLOTS
 // if (pressedCardsIndices.length > 0 || disableCardsCount === 0) {
    disableCardsCount++;
    console.log('there are some correct cards');
    console.log(disableCardsCount);
//  if (submitGuessCount === 0) {
  for (let i=0 ; i < 4; i++) { if (boards[0].cards[i] !== null && !pressedCardsIndices.includes(i)) { 
    pressedCardsIndices.push(i);
    unpressedCardslotsOnBoard[i].setAttribute('disabled', 'disabled');
  } } // } else if (submitGuessCount === 1) {
//    pressedCardsIndices.forEach( i => unpressedCardslotsOnBoard[(i+1) % 4].setAttribute('disabled', 'disabled'));
//  } else {console.log('Game ENDS');}
//}
console.log(pressedCardsIndices);
console.log(boards[0].cards);
console.log(unpressedCardslotsOnBoard.map(cardslot => cardslot.textContent));
}


function rotateDisabledClockwise() { // ANNOYING CODE TO ROTATE THE DISABLED CARDSLOTS (MAYBE CAN MAKE 'disabled' a Card property, also COLOUR OF DISABLED CARD also, or even COLOUR OF CARD can be Card property???)
  if (pressedCardsIndices.length > 0) {
    pressedCardsIndices = pressedCardsIndices.map( i => {
      unpressedCardslotsOnBoard[(i+1) % 4].setAttribute('disabled', 'disabled');
        return (i+1) % 4  } );
          } 
  console.log(pressedCardsIndices)
    };

function rotateDisabledAnticlockwise() {
  if (pressedCardsIndices.length > 0) {
    pressedCardsIndices = pressedCardsIndices.map( i => {
      unpressedCardslotsOnBoard[(i+3) % 4].setAttribute('disabled', 'disabled');
        return (i+3) % 4  } );
          } 
  console.log(pressedCardsIndices)
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
  cardAnticlockwiseButton.style.backgroundColor = 'rgb(245,245,245)'; // 12/8/23 ADDED these two
  cardAnticlockwiseButton.textContent = "";
  cardAnticlockwiseButton.style.cursor = "";
  cardClockwiseButton.style.backgroundColor = 'rgb(245, 245, 245)'; // 12/8/23 ADDED these two
  cardClockwiseButton.textContent = "";
  cardClockwiseButton.style.cursor = "";
}

let newGameCount = 0;
newGameButton.addEventListener('click', () => {
  newGameCount++;
  gameScore = 0;
  pressedCardsIndices = [];   // 31/8/23 RESETS all parameters for newGame
  submitGuessCount = 0;
  boards = generateBoards(soCloverWords); //17/8/23 this eventListener same as startGameButton, but add this since new board needs initialise
  //  boards[0].getCardsOnBoardPosition;
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
  submitCluesButton.style.display = "block";
  // clueCards.forEach( rectangle => rectangle[0].style.display = "flex");
  console.log(gridCards);
  gridCards.forEach( cardslot => cardslot.style.display = "flex");
  userClues.forEach( clue => clue.removeAttribute('disabled'));
  console.log('poopylopp2');
  toggleButton('card1');  // ADDED THESE 4 lines 5/8/23 TO SIMULATE ONE SWAP (and back again)
  toggleButton('card2');  // THIS WAS BECAUSE MY CODE ALWAYS SWAPS card3 when card4 is pressed
  toggleButton('card2');  // BUT AFTER ONE SWAP, THE CODE WORKS, SO I NEEDED TO SIMULATE ONE SWAP!!!
  toggleButton('card1');
  });

const slots = Array.from(document.querySelectorAll('cardslot')); // CHECK THIS...
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
  seeOriginalCardsButton.addEventListener('click', () => {
    const currentBoardOrientation = boards[0].orientation % 4; // 31/8/23 SO BOARD orientation can remain same
    seeOriginalCardsButton.style.display = "none";
    newGameButton.style.display = "block";
    boards[0].reset;
    console.log('MOFO')
    updateCluesOnBoard();
    boards[0].slots.forEach( card => {if (card !== null && boards[0].originalCards.includes(card)) {
    card.orientation2 = 0; 
    boards[0].addCardToBoard(boards[0].slots, boards[0].slots.indexOf(card), boards[0].cards, boards[0].originalCards.indexOf(card))}
    });
    console.log('did i really d this?')
  //  boards[0].cards = boards[0].originalCards;
    console.log(boards[0].cards[0].orientation2)
    
    for (let i=currentBoardOrientation ; i > 0 ; i--) { boards[0].boardAnticlockwise() }; // 31/8/23 BOARD orientation same as what user left it.
    updateCardsOnBoard();  // DONE: 17/8/23 NEED TO do reset() and then make orientation2 = 0 for each card
    updateSlotsOnBoard();
    updateCluesOnBoard(); // 31/8/23
    disableCorrectCards(); // 31/8/23 ensures user cannot remove original cards from board.
    console.log(boards[0].clues);
    console.log(boards[0].originalCards);
    console.log(boards[0].cards);
    console.log(boards[0].originalCards[2]._words);
});



//proceedButton.addEventListener('click', () => {
//  if (submitCluesButton.style.display !== "none") {
//    submitClues();
 // } else if (submitGuessButton.style.display !== none) {
//    submitGuesses();
//  }
//}
//)
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
    console.log('HELLO');
    // Check if all input fields have non-empty values
    const allFieldsFilled = Array.from(userClues).every(input => input.value.trim() !== '');

    // Display or hide the button based on the condition
    if (allFieldsFilled) {
      console.log('BLOB');
      submitCluesButton.style.display = 'block';
    } else {
      console.log('NOOO');
      submitCluesButton.style.display = 'none';
    }
  });
});
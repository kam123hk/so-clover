export class Slot {
    constructor() {
    this.slot = [null, null, null, null]; // will push into slot the card in the add method.
                    }
    add(card, index) { if (this.slot[index] !== null) {
                        remover(this.slot[index], index);
                        this.slot.splice(index, 1, card);
    }
        this.slot.splice(index, 1, card);
    
                    }
    remover(index) { 
        this.slot.splice(index, 1, null);

    }
}

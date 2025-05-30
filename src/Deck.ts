export class Deck {
    // define the attributes
    cards: string[] = [];
    shoeCount: number = 0;
    resetCounter: number = 0;


    constructor(deckCount: number, resetCounter: number = 0) {
        this.createDeck(deckCount);
        this.shoeCount = deckCount;
        if ((resetCounter < deckCount * 52) || deckCount === 0) {
            this.resetCounter = resetCounter;
        } else {
            throw new Error("resetCounter must be less than the number of cards in the deck.");
        }
    }

    private createDeck(deckCount: number) {
        // create empty list to store deck
        let deck: string[] = [];

        // create the deck
        for (let i = 0; i < deckCount; i++) {
            for (let j = 0; j < 4; j++) {
                deck.push('2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A');
            }
        }
        this.cards = deck;
    }

    shuffleDeck() {
        // shuffle the deck of cards
        for (let i = 0; i < this.cards.length; i++) {
            for (let j = 0; j < 10; j++){
                // each iteration is shuffled 10 times
                const randomIndex = Math.floor(Math.random() * this.cards.length);
                const temp = this.cards[randomIndex];
                // swap the cards
                this.cards[randomIndex] = this.cards[i];
                this.cards[i] = temp;
            }
        }
    }

    drawCard(): string{
        if (this.shoeCount === 0) {
            throw new Error("Can't draw from a deck with no decks.");
        }
        if (this.cards.length === 0) {
            throw new Error("No cards left in the deck.");
        }
        if (this.cards.length < this.resetCounter) {
            this.resetDeck();
            this.shuffleDeck();
        }
        return <string>this.cards.pop();
    }

    resetDeck() {
        this.cards = [];
        this.createDeck(this.shoeCount);
    }
}
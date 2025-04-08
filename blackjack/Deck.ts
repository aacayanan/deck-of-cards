class Deck {
    // define the attributes
    cards: string[] = [];

    constructor(deckCount: number) {
        this.createDeck(deckCount);
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
}
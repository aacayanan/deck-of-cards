import {Deck} from '../src/Deck';

// Test with one deck
describe('Deck', () => {
    test('should create a deck with the correct number of cards', () => {
        const deckCount = 1;
        const deck = new Deck(deckCount);
        const expectedCards = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
        ];
        expect(deck.cards.length).toBe(52 * deckCount);
        expect(deck.cards).toEqual(expectedCards);
        expect(deck.shoeCount).toBe(1);
    });
});

// Test with multiple decks
describe('Deck with two decks', () => {
    test('should create a deck with the correct number of cards', () => {
        const deckCount = 2;
        const deck = new Deck(deckCount);
        expect(deck.cards.length).toBe(52 * deckCount);
    });

    test('should create a deck with the correct cards', () => {
        const deckCount = 2;
        const deck = new Deck(deckCount);
        const expectedCards = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
        ];
        expect(deck.cards).toEqual(expectedCards);
        expect(deck.shoeCount).toBe(2);
    });
});

// Test with zero decks
describe('Deck with zero decks', () => {
    test('should create an empty deck with no cards', () => {
        const deckCount = 0;
        const deck = new Deck(deckCount);
        expect(deck.cards.length).toBe(0);
        expect(deck.shoeCount).toBe(0);
        expect(deck.cards).toEqual([]);
    });
});

// Test shuffleDeck method
describe('Deck shuffleDeck', () => {
    test('should not have the same order after shuffling', () => {
        const deckCount = 1;
        const deck = new Deck(deckCount);
        const originalOrder = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
        ];
        deck.shuffleDeck();
        expect(deck.cards).not.toEqual(originalOrder);
    });

    test('should still equal the same number of cards after shuffling', () => {
        const deckCount = 1;
        const deck = new Deck(deckCount);
        const originalCount = deck.cards.length;
        deck.shuffleDeck();
        expect(deck.cards.length).toBe(originalCount);
    });
});

// Test drawCard method
describe('Deck drawCard', () => {
    test('should draw a card from the deck', () => {
        const deckCount = 1;
        const deck = new Deck(deckCount);
        const expectedCard = 'A';
        const expectedCount = 51;
        const drawnCard = deck.drawCard();
        expect(drawnCard).toBe(expectedCard);
        expect(deck.cards.length).toBe(expectedCount);
    });

    test('should return empty array if there are no cards', () => {
        const deckCount = 0;
        const deck = new Deck(deckCount);
        const drawnCard = deck.drawCard();
        expect(drawnCard).toStrictEqual([]);
    });

    test('should draw multiple cards from the deck', () => {
        const deckCount = 1;
        const deck = new Deck(deckCount);
        const numberOfCardsToDraw = 2;
        const expectedCount = 50;
        const expectedCards = ['A', 'K'];
        const drawnCards = []
        for (let i = 0; i < numberOfCardsToDraw; i++) {
            drawnCards.push(deck.drawCard());
        }
        expect(drawnCards).toEqual(expectedCards);
        expect(deck.cards.length).toBe(expectedCount);
    });

    test('should return empty array if multiplier is zero', () => {
        const deckCount = 1;
        const deck = new Deck(deckCount);
        const numberOfCardsToDraw = 0;
        const expectedCount = 52;
        const drawnCards = []
        for (let i = 0; i < numberOfCardsToDraw; i++) {
            drawnCards.push(deck.drawCard());
        }
        expect(drawnCards).toStrictEqual([]);
        expect(deck.cards.length).toBe(expectedCount);
    });

    test('should return remaining cards if multiplier is greater than remaining cards', () => {
        const deckCount = 1;
        const deck = new Deck(deckCount);
        const numberOfCardsToDraw = 60;
        const expectedDeckCount = 0;
        const expectedCards = [
            'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2',
            'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2',
            'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2',
            'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'
        ];
        const drawnCards = []
        for (let i = 0; i < numberOfCardsToDraw; i++) {
            drawnCards.push(deck.drawCard());
        }
        expect(drawnCards).toEqual(expectedCards);
        expect(deck.cards.length).toBe(expectedDeckCount);
        expect(drawnCards.length).toBe(52);
    });
});

// Test resetDeck method
describe('Deck resetDeck', () => {
    test('should reset the deck to the original state', () => {
        const deckCount = 1;
        const deck = new Deck(deckCount);
        expect(deck.cards.length).toBe(52);
        for (let i = 0; i < 20; i++) {
            deck.drawCard();
        }
        expect(deck.cards.length).toBe(32);
        deck.resetDeck();
        expect(deck.cards.length).toBe(52);
        const expectedCards = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
        ];
        expect(deck.cards).toEqual(expectedCards);
    });

    test('should be empty if the deck count is zero', () => {
        const deckCount = 0;
        const deck = new Deck(deckCount);
        expect(deck.cards.length).toBe(0);
        for (let i = 0; i < 50; i++) {
            deck.drawCard();
        }
        expect(deck.cards.length).toBe(0);
        deck.resetDeck();
        expect(deck.cards.length).toBe(0);
        expect(deck.cards).toStrictEqual([]);
    });

    test('should reset the deck to the original state with multiple decks', () => {
        const deckCount = 2;
        const deck = new Deck(deckCount);
        expect(deck.cards.length).toBe(104);
        for (let i = 0; i < 20; i++) {
            deck.drawCard();
        }
        expect(deck.cards.length).toBe(84);
        deck.resetDeck();
        expect(deck.cards.length).toBe(104);
        const expectedCards = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
        ];
        expect(deck.cards).toEqual(expectedCards);
    });
});
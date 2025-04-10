import {Deck} from '../Deck';

// Test with one deck
describe('Deck', () => {
    test('should create a deck with the correct number of cards', () => {
        const deckCount = 1;
        const deck = new Deck(deckCount);
        expect(deck.cards.length).toBe(52 * deckCount);
    });

    test('should create a deck with the correct cards', () => {
        const deckCount = 1;
        const deck = new Deck(deckCount);
        const expectedCards = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
        ];
        expect(deck.cards).toEqual(expectedCards);
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
    })
})
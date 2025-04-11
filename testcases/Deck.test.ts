import {Deck} from '../src/Deck';

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

// Test with zero decks
describe('Deck with zero decks', () => {
    test('should create an empty deck', () => {
        const deckCount = 0;
        const deck = new Deck(deckCount);
        expect(deck.cards.length).toBe(0);
    });

    test('should create an empty deck with no cards', () => {
        const deckCount = 0;
        const deck = new Deck(deckCount);
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
        const expectedCard = '2';
        const expectedCount = 51;
        const drawnCard = deck.drawCard();
        expect(drawnCard).toBe(expectedCard);
        expect(deck.cards.length).toBe(expectedCount);
    });

    test('should return undefined if there are no cards', () => {
        const deckCount = 0;
        const deck = new Deck(deckCount);
        const drawnCard = deck.drawCard();
        expect(drawnCard).toBeNull();
    });
});
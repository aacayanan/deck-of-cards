import {Card} from "../src/cards/Card";
import {PlayingCard} from "../src/cards/PlayingCard";
import {CardConstructor} from "../src/cards/CardConstructor";

describe('Creating new PlayingCards', () => {
    test('should create a new PlayingCard with the correct properties', () => {
        const deck: Card[] = [];
        const card = new PlayingCard('A', 'Hearts');
        deck.push(card);
        expect(card.value).toBe('A');
        expect(card.identifier).toBe('Hearts');
        expect(deck.length).toBe(1);
        expect(deck[0].value).toBe('A');
        expect(deck[0].identifier).toBe('Hearts');
    });
});

describe('Creating a deck with PlayingCards', () => {
    function initalizeDeck(PlayingCard: CardConstructor): Card[] {
        return PlayingCard.generateFullDeck();
    }

    test('should create a deck with the correct number of cards', () => {
        const deck = initalizeDeck(PlayingCard);
        expect(deck.length).toBe(52);
        expect(deck[0].value).toBe('2');
        expect(deck[0].identifier).toBe('Hearts');
        expect(deck[51].value).toBe('A');
        expect(deck[51].identifier).toBe('Spades');
    });
});